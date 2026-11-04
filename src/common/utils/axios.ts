import axios, { type AxiosInstance, AxiosError } from 'axios';
import swal from '@/common/utils/swal';
import { Loading } from 'quasar';

const $axios: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  xsrfHeaderName: 'X-XSRF-TOKEN',
  responseType: 'json',
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
  },
  withCredentials: true,
});

/**
 * Request Interceptor
 * 末尾のスラッシュを除去する儀式
 */
$axios.interceptors.request.use((config) => {
  if (config.url) {
    config.url = config.url.replace(/\/$/, '');
  }
  return config;
});

/**
 * Response Interceptor
 * エラーハンドリングの要
 */
$axios.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    // 1. Quasar Loading があれば速やかに退陣させる
    if (Loading.isActive) {
      Loading.hide();
    }

    // 2. 認証エラー(401)は、ここでは深追いせず呼び出し元へ投げる
    if (error.response?.status === 401) {
      return Promise.reject(error);
    }

    // 3. エラーメッセージの抽出
    const message = extractErrorMessage(error);

    // 4. Swal による告知
    await swal.fire({
      title: 'エラー！',
      html: message,
      icon: 'error',
    });

    return Promise.reject(error);
  }
);

/**
 * #TAG エラーレスポンスからメッセージを抽出する（隠密関数）
 */
function extractErrorMessage(error: AxiosError<any>): string {
  const data = error.response?.data;
  if (!data) return 'システムエラーが発生しました';

  const messages: string[] = [];

  // Laravelのバリデーションエラー(errorsオブジェクト)を平坦化して抽出
  if (data.errors) {
    const errorArrays = Object.values(data.errors) as string[][];
    messages.push(...errorArrays.flat());
  }

  // 単一のメッセージがある場合
  if (data.message) {
    messages.push(data.message);
  }

  // 重複を排除し、改行で繋ぐ
  return messages.length > 0 ? [...new Set(messages)].join('<br>') : 'データの処理に失敗しました';
}

export default $axios;
