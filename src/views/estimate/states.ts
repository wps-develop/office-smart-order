import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useMainState = defineStore("mainState", () => {
  /** @type {Ref<Conditions>} 検索条件 */
  const estimateNo = ref<string | null>(null);

  /**
   * #TAG 検索条件をリセットする
   */
  const reset = () => {
    estimateNo.value = null;
  };

  return {
    estimateNo,

    reset,
  };
});
