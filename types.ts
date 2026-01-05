
import React from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export enum PortalType {
  ETA = 'ETA',
  EFNS = 'EFNS',
  PR = 'PR'
}