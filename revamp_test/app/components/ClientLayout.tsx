'use client';
import React from 'react';
import { ThemeProvider } from '../providers/ThemeProvider';
import Navbar from './Navbar';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <Navbar />
      {children}
    </ThemeProvider>
  );
}
