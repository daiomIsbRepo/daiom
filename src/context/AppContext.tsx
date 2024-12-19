import React, { createContext, useContext, useState } from 'react';

interface FormData {
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

interface AppState {
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

const initialState: AppState = {
  mainContent: {
    input: '',
    result: null
  },
  copyEvaluator: {
    copyText: '',
    callToAction: '',
    evaluation: {
      response: '',
      rating: '',
      rulesViolated: ''
    },
    crmChannel: 'whatsapp'
  },
  copyEnhancer: {
    formData: {
      improvementContext: [],
      customContext: '',
      crmChannel: 'whatsapp',
      callToAction: '',
      pointOfView: '',
      wordLimit: '',
      audience: '',
      brandVoice: '',
      productTitle: '',
      vendor: '',
      productType: '',
      keywords: '',
      includeEmoji: true, // Set default to true
      copyText: ''
    },
    enhancedCopy: ''
  },
  copyWriter: {
    formData: {
      campaignDescription: '',
      selectedCampaign: '',
      crmChannel: 'whatsapp',
      wordLimit: '',
      callToAction: '',
      pointOfView: '',
      style: '',
      productTitle: '',
      vendor: '',
      productType: '',
      keywords: '',
      includeEmoji: true // Set default to true
    },
    generatedContent: ''
  }
};

interface AppContextType {
  state: AppState;
  updateMainContent: (data: Partial<AppState['mainContent']>) => void;
  updateCopyEvaluator: (data: Partial<AppState['copyEvaluator']>) => void;
  updateCopyEnhancer: (data: Partial<AppState['copyEnhancer']>) => void;
  updateCopyWriter: (data: Partial<AppState['copyWriter']>) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, setState] = useState<AppState>(initialState);

  const updateMainContent = (data: Partial<AppState['mainContent']>) => {
    setState(prev => ({
      ...prev,
      mainContent: { ...prev.mainContent, ...data }
    }));
  };

  const updateCopyEvaluator = (data: Partial<AppState['copyEvaluator']>) => {
    setState(prev => ({
      ...prev,
      copyEvaluator: { ...prev.copyEvaluator, ...data }
    }));
  };

  const updateCopyEnhancer = (data: Partial<AppState['copyEnhancer']>) => {
    setState(prev => ({
      ...prev,
      copyEnhancer: {
        ...prev.copyEnhancer,
        ...data,
        formData: {
          ...prev.copyEnhancer.formData,
          ...(data.formData || {})
        }
      }
    }));
  };

  const updateCopyWriter = (data: Partial<AppState['copyWriter']>) => {
    setState(prev => ({
      ...prev,
      copyWriter: {
        ...prev.copyWriter,
        ...data,
        formData: {
          ...prev.copyWriter.formData,
          ...(data.formData || {})
        }
      }
    }));
  };

  return (
    <AppContext.Provider value={{ 
      state, 
      updateMainContent,
      updateCopyEvaluator, 
      updateCopyEnhancer, 
      updateCopyWriter 
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};