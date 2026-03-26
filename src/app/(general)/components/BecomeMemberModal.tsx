"use client";
import React, { useState, useEffect } from "react";
import { useToast } from "../context/ToastContext";
import { submitMemberApplication } from "@/app/actions/membershipApplication";

interface BecomeMemberModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// Added this interface to type your component state
interface MemberFormData {
  fullName: string;
  residentialAddress: string;
  state: string;
  ward: string;
  whatsappNumber: string;
  profilePicture: string;
}

const BecomeMemberModal: React.FC<BecomeMemberModalProps> = ({
  isOpen,
  onClose,
}) => {
  const { toast } = useToast();
  const [fileName, setFileName] = useState<string>("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Form State
  const [formData, setFormData] = useState<MemberFormData>({
    fullName: "",
    residentialAddress: "",
    state: "",
    ward: "",
    whatsappNumber: "",
    profilePicture: "",
  });

  // Lock body scroll when modal is open so the background doesn't scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  // Handle generic text/select inputs
  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle file picker
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
      setSelectedFile(e.target.files[0]);
    } else {
      setFileName("");
      setSelectedFile(null);
    }
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // 1. Create a new FormData object
      const formDataPayload = new FormData();

      // 2. Append all text fields
      formDataPayload.append("fullName", formData.fullName);
      formDataPayload.append("residentialAddress", formData.residentialAddress);
      formDataPayload.append("state", formData.state);
      formDataPayload.append("ward", formData.ward);
      formDataPayload.append("whatsappNumber", formData.whatsappNumber);

      // 3. Append the file if the user selected one
      if (selectedFile) {
        formDataPayload.append("profilePicture", selectedFile);
      }

      // 4. Send the FormData to the Server Action
      const result = await submitMemberApplication(formDataPayload);

      if (result.success) {
        toast("Application submitted successfully!", "success");
        // Reset form
        setFormData({
          fullName: "",
          residentialAddress: "",
          state: "",
          ward: "",
          whatsappNumber: "",
          profilePicture: "",
        });
        setFileName("");
        setSelectedFile(null);
        onClose();
      } else {
        toast(result.error || "Failed to submit application", "error");
      }
    } catch (error) {
      toast("An unexpected error occurred", "error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-6">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        className="relative bg-[var(--color-bg)] w-full max-w-xl mx-auto shadow-2xl overflow-hidden rounded-t-2xl sm:rounded-none flex flex-col max-h-[95dvh] sm:max-h-[90vh] anim-1 z-10"
        style={{ animation: "fadeUp 0.4s ease-out forwards" }}
      >
        {/* Top Accent Bar */}
        <div className="w-full h-1.5 shrink-0 bg-[var(--color-secondary)]" />

        <div className="px-5 py-8 sm:px-8 sm:py-10 overflow-y-auto custom-scrollbar">
          {/* Header & Close Button */}
          <div className="flex justify-between items-start mb-6 sm:mb-8">
            <div>
              <div className="flex items-center gap-3 mb-2 sm:mb-3">
                <div className="w-5 h-0.5 bg-[var(--color-accent)]" />
                <span className="font-body font-semibold uppercase text-[0.6rem] sm:text-[0.65rem] tracking-[0.28em] text-[var(--color-secondary)]">
                  Join The Movement
                </span>
              </div>
              <h2 className="font-heading font-bold text-gray-900 text-[clamp(1.5rem,5vw,2rem)] leading-[1.1]">
                Become a Member
              </h2>
            </div>

            <button
              onClick={onClose}
              className="text-gray-400 hover:text-[var(--color-secondary)] transition-colors p-2 -mr-2 bg-gray-50 sm:bg-transparent rounded-full sm:rounded-none"
              aria-label="Close modal"
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

          {/* Form */}
          <form
            className="space-y-4 sm:space-y-5 pb-4 sm:pb-0"
            onSubmit={handleSubmit}
          >
            {/* Full Name */}
            <div>
              <label className="block font-body font-semibold uppercase text-[0.65rem] sm:text-[0.7rem] tracking-[0.15em] text-gray-600 mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                disabled={isSubmitting}
                required
                className="w-full border border-gray-300 bg-white px-4 py-3 sm:py-3.5 text-[0.95rem] font-body text-gray-800 focus:outline-none focus:border-[var(--color-secondary)] focus:ring-1 focus:ring-[var(--color-secondary)] transition-colors duration-200"
                placeholder="Enter your full name"
              />
            </div>

            {/* Address */}
            <div>
              <label className="block font-body font-semibold uppercase text-[0.65rem] sm:text-[0.7rem] tracking-[0.15em] text-gray-600 mb-2">
                Residential Address
              </label>
              <textarea
                name="residentialAddress"
                value={formData.residentialAddress}
                onChange={handleInputChange}
                disabled={isSubmitting}
                rows={2}
                required
                className="w-full border border-gray-300 bg-white px-4 py-3 sm:py-3.5 text-[0.95rem] font-body text-gray-800 focus:outline-none focus:border-[var(--color-secondary)] focus:ring-1 focus:ring-[var(--color-secondary)] transition-colors duration-200 resize-none"
                placeholder="Enter your full address"
              />
            </div>

            {/* State & Ward Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              <div>
                <label className="block font-body font-semibold uppercase text-[0.65rem] sm:text-[0.7rem] tracking-[0.15em] text-gray-600 mb-2">
                  State
                </label>
                <select
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                  required
                  className="w-full border border-gray-300 bg-white px-4 py-3 sm:py-3.5 text-[0.95rem] font-body text-gray-800 focus:outline-none focus:border-[var(--color-secondary)] focus:ring-1 focus:ring-[var(--color-secondary)] transition-colors duration-200 appearance-none"
                >
                  <option value="" disabled>
                    Select State
                  </option>
                  <option value="Abia">Abia</option>
                  <option value="Anambra">Anambra</option>
                  <option value="Ebonyi">Ebonyi</option>
                  <option value="Enugu">Enugu</option>
                  <option value="Imo">Imo</option>
                </select>
              </div>

              <div>
                <label className="block font-body font-semibold uppercase text-[0.65rem] sm:text-[0.7rem] tracking-[0.15em] text-gray-600 mb-2">
                  Ward
                </label>
                <input
                  type="text"
                  name="ward"
                  value={formData.ward}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                  required
                  className="w-full border border-gray-300 bg-white px-4 py-3 sm:py-3.5 text-[0.95rem] font-body text-gray-800 focus:outline-none focus:border-[var(--color-secondary)] focus:ring-1 focus:ring-[var(--color-secondary)] transition-colors duration-200"
                  placeholder="e.g. Ward 3"
                />
              </div>
            </div>

            {/* WhatsApp Number */}
            <div>
              <label className="block font-body font-semibold uppercase text-[0.65rem] sm:text-[0.7rem] tracking-[0.15em] text-gray-600 mb-2">
                WhatsApp Number
              </label>
              <input
                type="tel"
                name="whatsappNumber"
                value={formData.whatsappNumber}
                onChange={handleInputChange}
                disabled={isSubmitting}
                required
                className="w-full border border-gray-300 bg-white px-4 py-3 sm:py-3.5 text-[0.95rem] font-body text-gray-800 focus:outline-none focus:border-[var(--color-secondary)] focus:ring-1 focus:ring-[var(--color-secondary)] transition-colors duration-200"
                placeholder="+234 800 000 0000"
              />
            </div>

            {/* Picture Upload */}
            <div>
              <label className="block font-body font-semibold uppercase text-[0.65rem] sm:text-[0.7rem] tracking-[0.15em] text-gray-600 mb-2">
                Profile Picture
              </label>
              <div
                className={`relative border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 transition-colors px-4 py-5 sm:py-6 text-center ${isSubmitting ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
              >
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  disabled={isSubmitting}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer disabled:cursor-not-allowed"
                />
                <svg
                  className="mx-auto h-7 w-7 sm:h-8 sm:w-8 text-gray-400 mb-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <span className="font-body text-[0.8rem] sm:text-[0.85rem] text-gray-500">
                  {fileName ? (
                    <span className="text-[var(--color-secondary)] font-semibold break-all">
                      {fileName}
                    </span>
                  ) : (
                    "Tap to upload from device"
                  )}
                </span>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-3 sm:pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex justify-center items-center font-body font-semibold uppercase text-white text-[0.75rem] tracking-[0.18em] px-8 py-4 bg-[var(--color-secondary)] hover:opacity-85 transition-opacity duration-300 shadow-md disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Submitting..." : "Submit Application"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BecomeMemberModal;
