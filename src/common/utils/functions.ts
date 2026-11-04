import { ray } from "vue-ray";
import axios from "axios";

export const wray = (value?: any): any => {
  if (import.meta.env.DEV) {
    // node-ray はブラウザ環境でも動作するように設計されておる
    let payload = value;
    if (value instanceof Error) {
      // 1. まずは共通の値を抽出
      payload = {
        name: value.name,
        message: value.message,
        stack: value.stack,
      };

      // 2. Axios独自のプロパティを安全に検分
      if (axios.isAxiosError(value)) {
        // ここを通過した時点で、value は AxiosError 型として扱われ、
        // .response や .config が補完の対象になり申す
        payload = {
          ...payload,
          ...value, // スプレッドで全展開
          responseData: value.response?.data, // 安全にアクセス可能
        };
      }
    }
    return ray(payload).green().label("【パーツスクリップ】");
  }

  const silent: any = new Proxy(() => silent, {
    get: () => silent,
    apply: () => silent,
  });

  return silent;
};

export const errorResponse = (error: any) => {
  if (error?.isAxiosError && error.response?.data) {
    return JSON.parse(JSON.stringify(error.response.data, null, 2));
  }
  return error;
};
