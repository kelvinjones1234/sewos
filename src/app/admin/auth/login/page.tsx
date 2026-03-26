"use client";

import React, { useState, Suspense } from "react";
import Image from "next/image";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useToast } from "@/app/(general)/context/ToastContext";


/* ── Arrow icon (Matches landing page style) ── */
const Arrow = () => (
  <svg
    viewBox="0 0 20 20"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    className="w-4 h-4 ml-2 shrink-0"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4 10h12M10 4l6 6-6 6"
    />
  </svg>
);

function LoginContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { toast } = useToast();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // If no callbackUrl is provided, default to the dashboard
  const callbackUrl = searchParams.get("callbackUrl") || "/dashboard";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (res?.error) {
        toast("Invalid email or password.", "error");
      } else {
        toast("Signed in successfully.", "success");
        router.push(callbackUrl);
        router.refresh();
      }
    } catch (err) {
      toast("An unexpected error occurred. Please try again.", "error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .anim-1 { animation: fadeUp 0.7s 0.2s ease both; }
        .anim-2 { animation: fadeUp 0.7s 0.4s ease both; }
        .anim-3 { animation: fadeUp 0.7s 0.6s ease both; }
        .anim-4 { animation: fadeUp 0.7s 0.8s ease both; }
      `}</style>

      {/* Form Container (Editorial Card Look) */}
      <div className="relative z-20 w-full max-w-[500px] mx-auto bg-white p-8 md:p-12 shadow-2xl anim-2">
        {/* Overline Indicator */}
        <div className="flex items-center gap-3.5 mb-6">
          <div className="w-7 h-0.5 bg-[var(--color-secondary)]" />
          <span className="font-body font-semibold uppercase text-[0.68rem] tracking-[0.28em] text-[var(--color-secondary)]">
            Admin Access
          </span>
        </div>

        {/* Heading */}
        <h2 className="font-heading flex items-center gap-2 font-bold text-gray-900 text-[clamp(1.5rem,2vw,2.2rem)] leading-[1.1] tracking-[0.01em] mb-4">
          Welcome
          <span className="text-[var(--color-secondary)]">Back</span>
        </h2>

        {/* Divider matches the hero component */}
        <div className="w-12 h-[3px] bg-[var(--color-accent)] my-6" />

        <p className="font-body text-[#5D5555] text-[0.95rem] leading-[1.8] mb-8">
          Please login to the admin dashboard to manage membership activities,
          events, and community impact.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          {/* Email Field - Changed from bubbles to clean editorial borders */}
          <div className="anim-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
              className="w-full bg-transparent font-body text-[0.95rem] text-gray-900 border-b border-gray-300 py-3 placeholder:text-gray-400 outline-none focus:border-[var(--color-secondary)] transition-colors"
              required
              disabled={isLoading}
            />
          </div>

          {/* Password Field */}
          <div className="relative anim-3">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full bg-transparent font-body text-[0.95rem] text-gray-900 border-b border-gray-300 py-3 pr-10 placeholder:text-gray-400 outline-none focus:border-[var(--color-secondary)] transition-colors"
              required
              disabled={isLoading}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[var(--color-secondary)] transition-colors focus:outline-none"
              tabIndex={-1}
            >
              {showPassword ? (
                <EyeOff className="w-5 h-5" strokeWidth={1.5} />
              ) : (
                <Eye className="w-5 h-5" strokeWidth={1.5} />
              )}
            </button>
          </div>

          {/* Submit Button - Standardized to the Teal CTA styling */}
          <button
            type="submit"
            disabled={isLoading}
            className="anim-4 mt-4 w-full font-body font-semibold uppercase text-white text-[0.72rem] tracking-[0.18em] px-8 py-4 bg-[var(--color-secondary)] hover:opacity-85 transition-opacity duration-300 shadow-lg disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center"
          >
            {isLoading ? "Signing In..." : "Sign In"}
          </button>

          {/* Create Account Link */}
          <div className="anim-4 mt-6 pt-6 border-t border-gray-100 flex flex-col items-center gap-4">
            <span className="font-body font-semibold uppercase text-[0.65rem] tracking-[0.22em] text-gray-500">
              Don't have an account?
            </span>
            <Link
              href={`/auth/register${
                callbackUrl !== "/dashboard"
                  ? `?callbackUrl=${encodeURIComponent(callbackUrl)}`
                  : ""
              }`}
              className="inline-flex items-center text-[0.75rem] font-semibold tracking-[0.12em] uppercase text-[var(--color-secondary)] border-b border-[var(--color-secondary)] pb-0.5 hover:opacity-65 transition-opacity"
            >
              Create Account <Arrow />
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}

// Main component with Suspense and thematic background setup
export default function LoginPage() {
  return (
    <section
      className="relative flex items-center justify-center min-h-screen pt-18 pb-16 px-4 overflow-hidden bg-black"
      id="login"
    >
      {/* ── Background: Matches the Hero section of Main ── */}
      <div className="absolute inset-0 bg-black pointer-events-none">
        <Image
          src="/img3.jpeg"
          alt="South East Women of Substance"
          fill
          className="object-cover grayscale opacity-60"
          priority
        />
        {/* High-End Monochrome Wash */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/80 backdrop-blur-[2px]" />
      </div>

      {/* Top border strip to maintain layout consistency */}
      <div className="absolute top-0 left-0 right-0 z-10 h-[4px] bg-[var(--color-secondary)]" />

      <Suspense
        fallback={
          <div className="relative z-20 flex justify-center items-center h-full w-full">
            <p className="font-body text-white font-semibold uppercase tracking-[0.28em] text-[0.8rem] animate-pulse">
              Loading...
            </p>
          </div>
        }
      >
        <LoginContent />
      </Suspense>
    </section>
  );
}
