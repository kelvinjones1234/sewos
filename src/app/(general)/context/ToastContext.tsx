"use client";

import React, { createContext, useContext, useState, useCallback, useEffect } from "react";
import { X, Check, AlertCircle, Info } from "lucide-react";

type ToastType = "success" | "error" | "info";

interface Toast {
  id: string;
  message: string;
  type: ToastType;
}

interface ToastContextType {
  toast: (message: string, type?: ToastType) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

const TOAST_DURATION = 4000;

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const toast = useCallback((message: string, type: ToastType = "info") => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { id, message, type }]);

    // Auto-remove after duration
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, TOAST_DURATION);
  }, []);

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <ToastContext.Provider value={{ toast }}>
      {children}
      {/* Global Toast Container */}
      <div className="fixed bottom-6 right-6 z-[100] flex flex-col gap-3 pointer-events-none">
        {toasts.map((t) => (
          <ToastItem key={t.id} toast={t} onRemove={() => removeToast(t.id)} />
        ))}
      </div>
    </ToastContext.Provider>
  );
}

// Hook to use the toast
export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};

// Individual Toast UI Component
function ToastItem({ toast, onRemove }: { toast: Toast; onRemove: () => void }) {
  const [isShowing, setIsShowing] = useState(false);
  const [progress, setProgress] = useState(100);

  // Trigger enter animation and progress bar countdown
  useEffect(() => {
    requestAnimationFrame(() => setIsShowing(true));
    
    // Start shrinking the progress bar after a tiny delay to ensure transition triggers
    const progressTimer = setTimeout(() => {
      setProgress(0);
    }, 50);

    return () => clearTimeout(progressTimer);
  }, []);

  const icons = {
    success: <Check className="w-5 h-5 text-white drop-shadow-sm" strokeWidth={2.5} />,
    error: <AlertCircle className="w-5 h-5 text-white drop-shadow-sm" strokeWidth={2.5} />,
    info: <Info className="w-5 h-5 text-white drop-shadow-sm" strokeWidth={2.5} />,
  };

  // Styling based on your brand colors and high-end monochrome aesthetic
  const styles = {
    success: "bg-[var(--color-secondary)] text-white border-transparent", // Teal
    error: "bg-[var(--color-accent)] text-white border-transparent",   // Deep Red
    info: "bg-[var(--color-primary)] text-white border-transparent",  // Navy
  };

  return (
    <div
      className={`pointer-events-auto relative overflow-hidden flex items-center justify-between min-w-[320px] max-w-sm px-6 py-4 border shadow-xl transition-all duration-500 ease-out transform ${
        isShowing ? "translate-x-0 opacity-100" : "translate-x-12 opacity-0"
      } ${styles[toast.type]}`}
      style={{
        /* Using inline shadow to match the professional smooth shadows from your Hero */
        boxShadow: "0 10px 30px rgba(0,0,0,0.15), 0 4px 10px rgba(0,0,0,0.1)"
      }}
    >
      
      {/* Abstract Background Decoration (matches your geometric patches) */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-10">
        <svg
          className="w-full h-full text-white"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="95%" cy="-10%" r="40" />
          <circle cx="10%" cy="120%" r="60" />
        </svg>
      </div>

      <div className="flex items-center gap-4 relative z-10">
        <div className="shrink-0 bg-white/20 p-2 rounded-full backdrop-blur-sm">
           {icons[toast.type]}
        </div>
        <div className="flex flex-col">
          {/* Subtle overline matching your 'Est. 2003' style */}
          <span className="font-body font-semibold uppercase text-white/70 text-[0.6rem] tracking-[0.25em] mb-1">
            Notification
          </span>
          <p className="font-heading font-bold text-white text-[0.95rem] leading-tight tracking-wide drop-shadow-sm">
            {toast.message}
          </p>
        </div>
      </div>
      
      <button
        onClick={() => {
          setIsShowing(false);
          setTimeout(onRemove, 300); // Wait for exit animation
        }}
        className="ml-6 relative z-10 shrink-0 text-white/70 hover:text-white transition-colors focus:outline-none bg-white/5 hover:bg-white/20 p-1.5 rounded-full backdrop-blur-sm"
      >
        <X className="w-4 h-4" strokeWidth={2} />
      </button>

      {/* The Animated Progress Bar - Changed to a clean white line */}
      <div 
        className="absolute bottom-0 left-0 h-[3px] bg-white opacity-40 transition-all ease-linear"
        style={{ 
          width: `${progress}%`, 
          transitionDuration: `${TOAST_DURATION}ms` 
        }}
      />
    </div>
  );
}