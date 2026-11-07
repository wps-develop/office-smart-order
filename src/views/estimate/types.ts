export interface EstimateConditions {
  estimateDateFrom: string;
  estimateDateTo: string;
  estimateNo: string;
  customerName: string;
  status: string;
}

export const defaultEstimateConditions = (): EstimateConditions => ({
  estimateDateFrom: "",
  estimateDateTo: "",
  estimateNo: "",
  customerName: "",
  status: "",
});
