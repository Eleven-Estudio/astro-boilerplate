export type Business = {
  lang: string;
  name: string;
  site: string;
  description: string;
  robots?: {
    index?: boolean;
    follow?: boolean;
  };
  contact: {
    tel: {
      ext: number;
      number: number;
    };
    whatsapp?: {
      ext?: number;
      number: number;
    };
    email: string;
  };
  address: {
    location: string;
  };
  googleTagManager?: {
    id: string;
  };
  social?: {
    facebook?: string;
    instagram?: string;
    tiktok?: string;
    youtube?: string;
    linkedin?: string;
    twitter?: string;
  };
  openGraph?: string;
  settings: {
    emailSender: string
    bccEmail?: Array<string>
    resendToCompany: boolean
  }
};