// 定義審查流程的狀態和動作
const initialState = {
  currentStep: 1,
  isAgreed: false,
};

const StepReducer = (state, action) => {
  switch (action.type) {
    case "CHECK_STEP": // 檢查申請費用事項
      return {
        ...state,
        isAgreed: true,
      };
    case "REVIEW_STEP": // 複審 (市場部)
      return {
        ...state,
        currentStep: state.currentStep + 1,
      };
    case "APPROVED_STEP": // 核准 (財務部)
      return {
        ...state,
        currentStep: state.currentStep + 1,
      };
    case "PREV_STEP": // 退件
      return {
        ...state,
        currentStep: state.currentStep - 1,
      };

    default:
      return state;
  }
};

export default StepReducer;
