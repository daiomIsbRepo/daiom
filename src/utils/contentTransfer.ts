import { AppState } from '../types/app';

export const transferContentToEnhancer = (
  state: AppState,
  updateCopyEnhancer: (data: Partial<AppState['copyEnhancer']>) => void
) => {
  updateCopyEnhancer({
    formData: {
      ...state.copyEnhancer.formData,
      copyText: state.copyEvaluator.copyText,
      crmChannel: state.copyEvaluator.crmChannel,
      callToAction: state.copyEvaluator.callToAction
    }
  });
};