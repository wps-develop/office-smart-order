import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { type EstimateConditions, defaultEstimateConditions } from "./types";

export const useMainState = defineStore("mainState", () => {
  /** @type {Ref<Conditions>} 検索条件 */
  const estimateNo = ref<string | null>(null);

  const conditions = ref<EstimateConditions>(defaultEstimateConditions());

  /**
   * #TAG 検索条件をリセットする
   */
  const reset = () => {
    estimateNo.value = null;
    resetConditions();
  };

  const resetConditions = () => {
    conditions.value = defaultEstimateConditions();
  };

  return {
    estimateNo,
    conditions,

    reset,
  };
});
