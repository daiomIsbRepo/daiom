export interface OutputSectionProps {
  formData: {
    crmChannel: string;
    includeEmoji: boolean;
  };
  generatedContent: string;
  error: string;
  isLoading: boolean;
  onSubmit: () => void;
  onEmojiToggle: (value: boolean) => void;
}

export interface ButtonTheme {
  primary: string;
  hover: string;
  text?: string;
}