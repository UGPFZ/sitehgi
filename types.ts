
import React from 'react';

export enum AppRoutes {
  HOME = '/',
  ABOUT = '/sobre',
  CONTACT = '/contato'
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export interface ProductCardProps {
  title: string;
  description: string;
  type: string;
  image: string;
}

export interface FeatureCardProps {
  title: string;
  description: string;
  // Fix: Added React import to define the React namespace
  icon: React.ReactNode;
}