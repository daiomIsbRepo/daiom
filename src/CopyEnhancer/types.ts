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

export interface CRMTheme {
  primary: string;
  background: string;
  hover: string;
  border: string;
  text: string;
  pattern?: string;
}

export interface InputSectionProps {
  formData: FormData;
  showAdvanced: boolean;
  onToggleAdvanced: () => void;
  onChange: (field: keyof FormData, value: any) => void;
  theme: CRMTheme;
}

export interface OutputSectionProps {
  formData: FormData;
  enhancedCopy: string;
  error: string;
  isLoading: boolean;
  onSubmit: () => void;
  onEmojiToggle: (value: boolean) => void;
  theme: CRMTheme;
}