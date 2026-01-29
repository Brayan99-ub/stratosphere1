import React from 'react';

export interface Entity {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
}

export interface Value {
  title: string;
  description: string;
}