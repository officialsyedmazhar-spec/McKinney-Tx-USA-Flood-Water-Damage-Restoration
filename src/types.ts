export type PageTab =
  | 'home'
  | 'services'
  | 'service-detail'
  | 'about'
  | 'service-areas'
  | 'emergency-guide'
  | 'contact';

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  image: string;
  beforeAfterImages?: {
    before: string;
    after: string;
  };
  features: string[];
  equipment: string[];
  process: {
    step: number;
    title: string;
    description: string;
  }[];
  urgencyWarning: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'emergency' | 'insurance' | 'process' | 'mold';
}

export interface ServiceAreaItem {
  name: string;
  type: string;
  zipCodes: string[];
  responseTime: string;
  description: string;
}

export interface DispatchFormData {
  fullName: string;
  phoneNumber: string;
  email: string;
  streetAddress: string;
  city: string;
  zipCode: string;
  serviceType: string;
  urgency: 'immediate' | 'within-4-hours' | 'scheduled';
  waterSource: string;
  standingWater: string;
  notes: string;
  insuranceClaim: 'yes' | 'no' | 'unsure';
}
