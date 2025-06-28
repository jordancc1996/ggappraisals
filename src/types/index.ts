// Contact Form Types
export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  serviceType: string;
  timeline: string;
  propertyAddress: string;
  propertyType: string;
  additionalInfo: string;
}

export type SubmitStatus = 'success' | 'error' | null;

// Service Types
export interface Service {
  title: string;
  description: string;
  features: string[];
  pricing?: string;
  turnaround?: string;
  icon?: React.ComponentType<any>;
}

// Office Location Types
export interface OfficeLocation {
  city: string;
  state: string;
  address: string;
  fullAddress: string;
  phone: string;
  serviceArea: string;
}

// Navigation Types
export interface NavItem {
  name: string;
  path: string;
}

// Hero Slide Types
export interface HeroSlide {
  image: string;
  location: string;
  title: string;
  subtitle: string;
}

// Statistics Types
export interface Statistic {
  number: string;
  label: string;
}

// Contact Info Types
export interface ContactInfo {
  icon: string;
  title: string;
  value: string;
  description?: string;
}

// SEO Types
export interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogType?: string;
  ogUrl?: string;
}

// Component Props Types
export interface LayoutProps {
  children: React.ReactNode;
}

export interface ServiceCardProps {
  service: Service;
  index?: number;
}

export interface SEOHeadProps extends SEOProps {}

// Form Event Types
export type FormSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
export type InputChangeHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;

