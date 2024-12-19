import { CRMTheme } from '../../utils/theme';

export interface ButtonGroupProps {
  onEvaluate: () => void;
  onEnhance: () => void;
  isLoading: boolean;
  theme: {
    primary: string;
    hover: string;
  };
}

export interface TextFormat {
  bold: boolean;
  italic: boolean;
  underline: boolean;
  alignment: string;
}

export interface OutputSectionProps {
  crmChannel: string;
  evaluation: {
    response: string;
    rating: string;
    rulesViolated: string;
  };
  error: string;
  isLoading: boolean;
  theme?: CRMTheme;
}