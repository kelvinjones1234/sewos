"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { toPng } from "html-to-image";
import { getMemberById } from "@/app/actions/getMember";

// Updated interface to match your Prisma schema and Server Action select
interface Member {
  id: string;
  membershipId: string;
  fullName: string;
  ward: string;
  state: string;
  profilePicture?: string | null;
  verified: boolean;
  createdAt: Date;
}

interface MemberIdModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const MemberIdModal: React.FC<MemberIdModalProps> = ({ isOpen, onClose }) => {
  const [searchId, setSearchId] = useState("");
  const [member, setMember] = useState<Member | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [isDownloading, setIsDownloading] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);

  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      const savedMember = localStorage.getItem("sewosMemberProfile");
      if (savedMember) {
        try {
          setMember(JSON.parse(savedMember));
        } catch (err) {
          console.error("Failed to parse saved member data", err);
        }
      }
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setMember(null);
    setIsLoading(true);
    setIsFlipped(false);

    try {
      const result = await getMemberById(searchId.trim().toUpperCase());

      if (result.success && result.data) {
        const memberData = result.data as unknown as Member;
        setMember(memberData);
        localStorage.setItem("sewosMemberProfile", JSON.stringify(memberData));
      } else {
        setError(result.error || "Membership ID not found. Please try again.");
      }
    } catch (err) {
      setError("A network error occurred. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleBack = () => {
    setMember(null);
    setSearchId("");
    setError("");
    setIsFlipped(false);
    localStorage.removeItem("sewosMemberProfile");
  };

  const downloadCard = async () => {
    if (!cardRef.current || !member) return;

    setIsDownloading(true);
    try {
      const dataUrl = await toPng(cardRef.current, {
        quality: 1,
        pixelRatio: 3,
        skipFonts: true,
      });

      const link = document.createElement("a");
      link.href = dataUrl;
      const side = isFlipped ? "Back" : "Front";
      link.download = `Member_ID_${member.membershipId}_${side}.png`;
      link.click();
    } catch (err) {
      console.error("Failed to download image:", err);
      setError("Failed to download card. Please try again.");
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-6">
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      <div
        className="relative bg-[var(--color-bg,#ffffff)] w-full max-w-xl mx-auto shadow-2xl overflow-hidden rounded-t-2xl sm:rounded-none flex flex-col max-h-[95dvh] sm:max-h-[90vh] z-10"
        style={{ animation: "fadeUp 0.4s ease-out forwards" }}
      >
        <style>{`
          @keyframes fadeUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .custom-scrollbar::-webkit-scrollbar { width: 6px; }
          .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
          .custom-scrollbar::-webkit-scrollbar-thumb { background-color: #d1d5db; border-radius: 20px; }
        `}</style>

        {/* Top Accent Bar (Modal UI) */}
        <div className="w-full h-1.5 shrink-0 bg-[var(--color-secondary)]" />

        <div className="px-5 py-8 sm:px-8 sm:py-10 overflow-y-auto custom-scrollbar">
          <div className="flex justify-between items-start mb-6 sm:mb-8">
            <div>
              <div className="flex items-center gap-3 mb-2 sm:mb-3">
                <div className="w-5 h-0.5 bg-[var(--color-accent)]" />
                <span className="font-body font-semibold uppercase text-[0.6rem] sm:text-[0.65rem] tracking-[0.28em] text-[var(--color-secondary)]">
                  Digital Identity
                </span>
              </div>
              <h2 className="font-heading font-bold text-gray-900 text-[clamp(1.5rem,4vw,2rem)] leading-[1.1]">
                {member ? "Your ID Card" : "Access Profile"}
              </h2>
            </div>

            <button
              onClick={onClose}
              className="text-gray-400 hover:text-[var(--color-accent)] transition-colors p-2 -mr-2 bg-gray-50 sm:bg-transparent rounded-full sm:rounded-none"
            >
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {!member && (
            <div className="animate-fade-in">
              <p className="font-body text-[0.95rem] text-gray-600 mb-6">
                Enter your unique 8-character Membership ID to retrieve and
                download your official digital ID card.
              </p>
              <form onSubmit={handleSearch} className="space-y-4">
                <div>
                  <label className="block font-body font-semibold uppercase text-[0.65rem] sm:text-[0.7rem] tracking-[0.15em] text-gray-600 mb-2">
                    Membership ID
                  </label>
                  <input
                    type="text"
                    value={searchId}
                    onChange={(e) => setSearchId(e.target.value)}
                    placeholder="e.g. A1B2C3D4"
                    maxLength={15}
                    required
                    className="w-full border border-gray-300 bg-white px-4 py-3 sm:py-3.5 text-[0.95rem] font-body text-gray-800 uppercase placeholder:normal-case placeholder:text-gray-400 focus:outline-none focus:border-[var(--color-secondary)] focus:ring-1 focus:ring-[var(--color-secondary)] transition-colors duration-200"
                  />
                </div>
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isLoading || !searchId}
                    className="w-full flex justify-center items-center font-body font-semibold uppercase text-white text-[0.75rem] tracking-[0.18em] px-8 py-4 bg-[var(--color-secondary)] hover:opacity-85 transition-opacity duration-300 shadow-md disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isLoading ? "Searching..." : "Retrieve ID"}
                  </button>
                </div>
              </form>
              {error && (
                <div className="mt-5 flex items-center gap-2 p-3.5 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm font-body">
                  <span className="font-medium">{error}</span>
                </div>
              )}
            </div>
          )}

          {member && (
            <div className="flex flex-col items-center animate-fade-in">
              <div className="w-full overflow-x-auto pb-4 flex justify-center no-scrollbar">
                {/* ID Card Wrapper */}
                <div
                  ref={cardRef}
                  className="relative shrink-0 w-[300px] h-[480px] bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] overflow-hidden flex flex-col transition-opacity duration-300"
                >
                  {!isFlipped ? (
                    /* --- FRONT OF CARD --- */
                    <div className="flex flex-col h-full w-full bg-white relative">
                      {/* Top Logo Container */}
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-[60px] bg-white rounded-b-3xl z-20 flex justify-center items-start pt-2 shadow-sm">
                        <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center border-2 border-[var(--color-accent)] overflow-hidden">
                          <Image
                            src="/logo.jpg"
                            width={48}
                            height={48}
                            alt="SEWOS Logo"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>

                      {/* SVG Background Curves mapped to CSS variables */}
                      <div className="absolute top-0 w-full h-[240px] pointer-events-none z-0">
                        <svg
                          viewBox="0 0 300 240"
                          preserveAspectRatio="none"
                          className="w-full h-full"
                        >
                          {/* Accent Layer */}
                          <path
                            d="M0,185 C100,265 200,205 300,145 L300,0 L0,0 Z"
                            fill="var(--color-accent)"
                          />
                          {/* White Gap Layer */}
                          <path
                            d="M0,178 C100,258 200,198 300,138 L300,0 L0,0 Z"
                            fill="#FFFFFF"
                          />
                          {/* Main Secondary Color Background */}
                          <path
                            d="M0,170 C100,250 200,190 300,130 L300,0 L0,0 Z"
                            fill="var(--color-secondary)"
                          />
                        </svg>
                      </div>

                      {/* Header Text */}
                      <div className="relative z-10 w-full pt-[68px] flex flex-col items-center text-white">
                        <h2 className="font-bold text-xs px-8 text-center tracking-wider uppercase drop-shadow-sm">
                          South East Women of Substance (SEWOS)
                        </h2>
                        <h3 className="font-bold text-sm tracking-widest uppercase mt-0.5 opacity-90">
                          Official Member
                        </h3>
                      </div>

                      {/* Profile Picture */}
                      <div className="relative z-20 mt-4 flex justify-center">
                        <div className="w-[120px] h-[120px] rounded-full border-[6px] border-white shadow-md overflow-hidden bg-gray-100 flex items-center justify-center">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={member.profilePicture || ""}
                            alt={member.fullName}
                            crossOrigin="anonymous"
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              (e.target as HTMLImageElement).src =
                                'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="%23ccc"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>';
                            }}
                          />
                        </div>
                      </div>

                      {/* Details Section */}
                      <div className="relative z-10 flex-1 flex flex-col items-center px-8 pt-4 pb-4">
                        <h2 className="font-bold text-[20px] uppercase text-center leading-tight tracking-wide text-[var(--color-secondary)]">
                          {member.fullName}
                        </h2>
                        <h3 className="font-bold text-[11px] uppercase mt-1 mb-5 tracking-widest text-[var(--color-accent)]">
                          {member.verified ? "Verified" : "Pending"}
                        </h3>

                        {/* Info Grid (Updated with real Prisma schema data) */}
                        <div className="w-full flex flex-col gap-2.5 text-left pl-1">
                          <div className="flex items-center text-[12px] font-bold">
                            <span className="w-[65px] text-[var(--color-accent)]">
                              ID NO
                            </span>
                            <span className="mr-3 text-[var(--color-accent)]">
                              :
                            </span>
                            <span className="text-gray-900">
                              {member.membershipId}
                            </span>
                          </div>
                          <div className="flex items-center text-[12px] font-bold">
                            <span className="w-[65px] text-[var(--color-accent)]">
                              STATE
                            </span>
                            <span className="mr-3 text-[var(--color-accent)]">
                              :
                            </span>
                            <span
                              className="text-gray-900 uppercase truncate"
                              title={member.state}
                            >
                              {member.state}
                            </span>
                          </div>
                          <div className="flex items-center text-[12px] font-bold">
                            <span className="w-[65px] text-[var(--color-accent)]">
                              WARD
                            </span>
                            <span className="mr-3 text-[var(--color-accent)]">
                              :
                            </span>
                            <span
                              className="text-gray-900 uppercase truncate"
                              title={member.ward}
                            >
                              {member.ward}
                            </span>
                          </div>
                        </div>

                        {/* Barcode Simulator */}
                        <div className="w-full mt-auto flex flex-col items-center justify-end">
                          <div className="w-full h-[35px] flex gap-[1.5px] justify-center items-end opacity-90">
                            {[...Array(65)].map((_, i) => (
                              <div
                                key={i}
                                className="bg-gray-900 rounded-sm"
                                style={{
                                  width: `${Math.random() > 0.6 ? 2.5 : 1.5}px`,
                                  height: `${Math.random() > 0.85 ? "75%" : "100%"}`,
                                }}
                              />
                            ))}
                          </div>
                          <p className="text-[7px] text-gray-800 tracking-[0.2em] mt-1 font-mono font-bold">
                            {member.membershipId}-
                            {new Date(member.createdAt)
                              .getTime()
                              .toString()
                              .slice(-8)}
                          </p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    /* --- BACK OF CARD --- */
                    <div className="flex flex-col h-full w-full bg-white p-6 relative text-gray-800 border-4 border-[var(--color-secondary)]">
                      <div className="w-full border-b-2 border-[var(--color-accent)] pb-3 mb-5 mt-4 text-center">
                        <h2 className="font-heading font-bold tracking-[0.15em] text-lg uppercase text-[var(--color-secondary)]">
                          Sewos
                        </h2>
                        <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mt-1">
                          Official Property
                        </p>
                      </div>

                      <div className="flex-1 flex flex-col gap-4 text-xs leading-relaxed text-gray-700 px-1 text-justify font-medium">
                        <p>
                          <strong>1.</strong> This identity card is strictly
                          non-transferable and remains the absolute property of
                          the issuing organization.
                        </p>
                        <p>
                          <strong>2.</strong> The bearer whose details appear on
                          the reverse side is an officially registered member
                          and is subject to the organization's code of conduct.
                        </p>
                        <p>
                          <strong>3.</strong> If this card is found, please drop
                          it at the nearest police station or return it to the
                          organization's headquarters.
                        </p>
                      </div>

                      <div className="w-full mt-auto pt-6 pb-4 flex flex-col items-center">
                        <div
                          className="font-[cursive] text-2xl mb-1 opacity-90"
                          style={{
                            fontFamily:
                              "'Brush Script MT', cursive, sans-serif",
                          }}
                        >
                          Authorized
                        </div>
                        <div className="w-40 h-[2px] mb-2 bg-[var(--color-secondary)]" />
                        <span className="text-[9px] uppercase tracking-widest text-gray-500 font-bold">
                          Authorized Signature
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-2 flex flex-col gap-3 w-full max-w-[300px]">
                <button
                  onClick={() => setIsFlipped(!isFlipped)}
                  className="flex items-center justify-center gap-2 w-full bg-gray-100 border border-gray-200 text-gray-700 py-3 px-6 font-body font-bold uppercase text-xs tracking-wide hover:bg-gray-200 hover:text-gray-900 transition-all shadow-sm rounded-lg"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className={`w-4 h-4 transition-transform duration-300 ${isFlipped ? "rotate-180" : ""}`}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                    />
                  </svg>
                  {isFlipped ? "View Front" : "View Back"}
                </button>

                <button
                  onClick={downloadCard}
                  disabled={isDownloading}
                  className="flex justify-center items-center font-body font-semibold uppercase text-white text-[0.75rem] tracking-[0.18em] px-8 py-4 bg-[var(--color-secondary)] hover:opacity-85 transition-opacity duration-300 shadow-md disabled:opacity-70 disabled:cursor-not-allowed rounded-lg"
                >
                  {isDownloading
                    ? "Generating..."
                    : `Download ${isFlipped ? "Back" : "Front"}`}
                </button>

                <button
                  onClick={handleBack}
                  disabled={isDownloading}
                  className="flex items-center justify-center gap-2 w-full bg-white border border-gray-300 text-gray-600 py-3 px-6 font-body font-bold uppercase text-xs tracking-wide hover:border-[var(--color-secondary)] hover:text-[var(--color-secondary)] transition-all disabled:opacity-70 rounded-lg"
                >
                  Search Again
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MemberIdModal;
