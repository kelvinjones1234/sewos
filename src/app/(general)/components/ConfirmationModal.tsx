"use client";

import React from "react";
import { X, AlertTriangle, Loader2, Info } from "lucide-react";

interface ConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  description: string;
  confirmLabel?: string;
  cancelLabel?: string;
  isLoading?: boolean;
  variant?: "danger" | "primary";
}

export default function ConfirmationModal({
  isOpen,
  onClose,
  onConfirm,
  title,
  description,
  confirmLabel = "Confirm",
  cancelLabel = "Cancel",
  isLoading = false,
  variant = "primary",
}: ConfirmationModalProps) {
  if (!isOpen) return null;

  const isDanger = variant === "danger";
  
  // Dynamically set the theme colors based on the variant
  const themeBg = isDanger ? "bg-[var(--color-accent)]" : "bg-[var(--color-secondary)]";
  const themeText = isDanger ? "text-[var(--color-accent)]" : "text-[var(--color-secondary)]";
  const hoverBg = isDanger ? "hover:bg-red-900" : "hover:bg-[var(--color-primary)]";

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      
      {/* ── Premium Frosted Backdrop ── */}
      <div 
        className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm animate-in fade-in duration-300" 
        onClick={!isLoading ? onClose : undefined} 
      />

      {/* ── Modal Container ── */}
      <div 
        className="relative w-full max-w-md bg-white shadow-2xl overflow-hidden animate-in zoom-in-95 slide-in-from-bottom-4 duration-400 ease-out flex flex-col"
        style={{ 
          // Matches the thick top border style used in your Footer
          borderTop: `4px solid var(--color-${isDanger ? 'accent' : 'secondary'})` 
        }}
      >
        
        {/* Abstract Background Watermark (Matches your aesthetic) */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]" aria-hidden="true">
          <svg className="w-full h-full text-black" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <circle cx="100%" cy="0%" r="180" />
            <circle cx="0%" cy="100%" r="120" opacity="0.5" />
          </svg>
        </div>

        {/* ── Header ── */}
        <div className="relative z-10 flex items-start justify-between p-6 pb-4">
          <div className="flex items-start gap-4">
            {/* Icon Box */}
            <div className={`mt-0.5 shrink-0 p-2.5 rounded-full bg-slate-50 border border-slate-100 ${themeText}`}>
              {isDanger ? (
                <AlertTriangle className="w-5 h-5" strokeWidth={2} />
              ) : (
                <Info className="w-5 h-5" strokeWidth={2} />
              )}
            </div>
            
            <div className="flex flex-col gap-1.5">
              {/* Overline/Eyebrow */}
              <span className={`font-body font-bold uppercase text-[0.65rem] tracking-[0.25em] ${themeText}`}>
                {isDanger ? "Warning" : "Confirmation"}
              </span>
              {/* Title */}
              <h3 className="font-heading font-bold text-xl text-[var(--color-primary)] leading-tight">
                {title}
              </h3>
            </div>
          </div>
          
          <button 
            onClick={onClose} 
            disabled={isLoading}
            className="text-gray-400 hover:text-[var(--color-primary)] transition-colors p-1 bg-white hover:bg-gray-100 rounded-full disabled:opacity-50"
          >
            <X className="w-4 h-4" strokeWidth={2} />
          </button>
        </div>

        {/* ── Content ── */}
        <div className="relative z-10 px-6 pb-8 pl-[4.5rem]">
          <p className="font-body text-[0.95rem] text-gray-600 leading-[1.7]">
            {description}
          </p>
        </div>

        {/* ── Actions (Split bottom layout) ── */}
        <div className="relative z-10 flex border-t border-gray-100 bg-white mt-auto">
          <button
            onClick={onClose}
            disabled={isLoading}
            className="flex-1 px-6 py-4 font-body font-bold uppercase text-[0.7rem] tracking-[0.18em] text-gray-500 hover:text-[var(--color-primary)] hover:bg-gray-50 transition-colors border-r border-gray-100 disabled:opacity-50"
          >
            {cancelLabel}
          </button>
          
          <button
            onClick={onConfirm}
            disabled={isLoading}
            className={`flex-1 px-6 py-4 font-body font-bold uppercase text-[0.7rem] tracking-[0.18em] text-white transition-colors flex items-center justify-center gap-2 ${themeBg} ${hoverBg} disabled:opacity-70`}
          >
            {isLoading ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              confirmLabel
            )}
          </button>
        </div>

      </div>
    </div>
  );
}