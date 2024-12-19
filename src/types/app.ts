export interface FormData {
  improvementContext: string[];
  customContext: string;
  crmChannel: string;
  callToAction: string;
  pointOfView: string;
  wordLimit: string;
  audience: string;
  brandVoice: string;
  productTitle: string;
  vendor: string;
  productType: string;
  keywords: string;
  includeEmoji: boolean;
  copyText: string;
}

export interface AppState {
  mainContent: {
    input: string;
    result: any;
  };
  copyEvaluator: {
    copyText: string;
    callToAction: string;
    evaluation: {
      response: string;
      rating: string;
      rulesViolated: string;
    };
    crmChannel: string;
  };
  copyEnhancer: {
    formData: FormData;
    enhancedCopy: string;
  };
  copyWriter: {
    formData: {
      campaignDescription: string;
      selectedCampaign: string;
      crmChannel: string;
      wordLimit: string;
      callToAction: string;
      pointOfView: string;
      style: string;
      productTitle: string;
      vendor: string;
      productType: string;
      keywords: string;
      includeEmoji: boolean;
    };
    generatedContent: string;
  };
}