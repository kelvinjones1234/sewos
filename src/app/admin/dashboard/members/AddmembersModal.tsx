"use client";

import React, { useState } from "react";
import { X, Upload, ChevronDown } from "lucide-react";
import { createMember } from "@/app/actions/adminMemberManagement";
import { useToast } from "@/app/(general)/context/ToastContext";

type AddMemberModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
};

// Added verified boolean
interface AdminMemberInput {
  fullName: string;
  residentialAddress: string;
  state: string;
  ward: string;
  whatsappNumber: string;
  verified: boolean; 
}

export default function AddMemberModal({ isOpen, onClose, onSuccess }: AddMemberModalProps) {
  const { toast } = useToast();
  
  const [formData, setFormData] = useState<AdminMemberInput>({
    fullName: "",
    residentialAddress: "",
    state: "",
    ward: "",
    whatsappNumber: "",
    verified: true, // Defaulting to true for admin-added members
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fileName, setFileName] = useState("Upload Profile Picture...");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  if (!isOpen) return null;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
      setSelectedFile(file);
    } else { 
      setFileName("Upload Profile Picture...");
      setSelectedFile(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // 1. Package data into FormData
      const formDataPayload = new FormData();
      formDataPayload.append("fullName", formData.fullName);
      formDataPayload.append("residentialAddress", formData.residentialAddress);
      formDataPayload.append("state", formData.state);
      formDataPayload.append("ward", formData.ward);
      formDataPayload.append("whatsappNumber", formData.whatsappNumber);
      
      // Append the verified status as a string ("true" or "false")
      formDataPayload.append("verified", String(formData.verified));

      if (selectedFile) {
        formDataPayload.append("profilePicture", selectedFile);
      }

      // 2. Send to Server Action
      const result = await createMember(formDataPayload); 
      
      if (result.success) {
        toast("Member created successfully", "success");
        // Reset state
        setFormData({ fullName: "", residentialAddress: "", state: "", ward: "", whatsappNumber: "", verified: true });
        setFileName("Upload Profile Picture...");
        setSelectedFile(null);
        onSuccess(); 
        onClose();   
      } else {
        toast(result.error || "Failed to create member", "error");
      }
    } catch (err) {
      toast("An unexpected error occurred", "error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <style>{`
        @keyframes modalFadeIn {
          from { opacity: 0; transform: translateY(20px) scale(0.98); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        .anim-modal { animation: modalFadeIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
      `}</style>

      {/* Backdrop */}
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
        
        {/* Modal Container */}
        <div className="bg-white w-full max-w-[550px] shadow-2xl flex flex-col max-h-[90vh] anim-modal relative">
          
          {/* Top border strip */}
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-[var(--color-secondary)] z-10" />

          {/* Header */}
          <div className="p-8 pb-6 flex justify-between items-start shrink-0">
            <div>
              <div className="flex items-center gap-3.5 mb-3">
                <div className="w-5 h-0.5 bg-[var(--color-secondary)]" />
                <span className="font-body font-semibold uppercase text-[0.65rem] tracking-[0.28em] text-[var(--color-secondary)]">
                  Network
                </span>
              </div>
              <h3 className="font-heading font-bold text-gray-900 text-3xl leading-none tracking-[0.01em]">
                Add New <span className="text-[var(--color-secondary)]">Member</span>
              </h3>
            </div>
            
            <button 
              onClick={onClose} 
              className="text-gray-400 hover:text-[var(--color-secondary)] transition-colors mt-1"
            >
              <X size={26} strokeWidth={1.5} />
            </button>
          </div>

          {/* Scrollable Form Body */}
          <div className="overflow-y-auto px-8 pb-4 custom-scrollbar">
            <form id="add-member-form" onSubmit={handleSubmit} className="flex flex-col gap-6">
              
              {/* Full Name */}
              <div>
                <input 
                  type="text" 
                  name="fullName"
                  placeholder="Full Name" 
                  required
                  value={formData.fullName} 
                  onChange={handleInputChange}
                  className="w-full bg-transparent font-body text-[0.95rem] text-gray-900 border-b border-gray-300 py-3 placeholder:text-gray-400 outline-none focus:border-[var(--color-secondary)] transition-colors" 
                />
              </div>

              {/* Residential Address */}
              <div>
                <input 
                  type="text" 
                  name="residentialAddress"
                  placeholder="Residential Address" 
                  required
                  value={formData.residentialAddress} 
                  onChange={handleInputChange}
                  className="w-full bg-transparent font-body text-[0.95rem] text-gray-900 border-b border-gray-300 py-3 placeholder:text-gray-400 outline-none focus:border-[var(--color-secondary)] transition-colors" 
                />
              </div>

              {/* State & Ward Row */}
              <div className="grid grid-cols-2 gap-4">
                <div className="relative group">
                  <select
                    name="state"
                    required
                    value={formData.state}
                    onChange={handleInputChange}
                    className="w-full bg-transparent font-body text-[0.95rem] text-gray-900 border-b border-gray-300 py-3 appearance-none outline-none focus:border-[var(--color-secondary)] transition-colors cursor-pointer"
                  >
                    <option value="" disabled className="text-gray-400">Select State</option>
                    <option value="Abia">Abia</option>
                    <option value="Anambra">Anambra</option>
                    <option value="Ebonyi">Ebonyi</option>
                    <option value="Enugu">Enugu</option>
                    <option value="Imo">Imo</option>
                  </select>
                  <ChevronDown
                    size={16}
                    className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[var(--color-secondary)] pointer-events-none"
                    strokeWidth={1.5}
                  />
                </div>

                <div>
                  <input 
                    type="text" 
                    name="ward"
                    placeholder="Ward" 
                    required
                    value={formData.ward} 
                    onChange={handleInputChange}
                    className="w-full bg-transparent font-body text-[0.95rem] text-gray-900 border-b border-gray-300 py-3 placeholder:text-gray-400 outline-none focus:border-[var(--color-secondary)] transition-colors" 
                  />
                </div>
              </div>

              {/* WhatsApp Number */}
              <div>
                <input 
                  type="tel" 
                  name="whatsappNumber"
                  placeholder="WhatsApp Number" 
                  required
                  value={formData.whatsappNumber} 
                  onChange={handleInputChange}
                  className="w-full bg-transparent font-body text-[0.95rem] text-gray-900 border-b border-gray-300 py-3 placeholder:text-gray-400 outline-none focus:border-[var(--color-secondary)] transition-colors" 
                />
              </div>

              {/* Verified Toggle */}
              <div className="flex items-center justify-between border-b border-gray-300 py-3">
                <div>
                  <span className="font-body text-[0.95rem] text-gray-900 block">Verified Status</span>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input 
                    type="checkbox" 
                    className="sr-only peer" 
                    checked={formData.verified} 
                    onChange={(e) => setFormData((prev) => ({ ...prev, verified: e.target.checked }))} 
                  />
                  <div className="w-10 h-5 bg-gray-200 border border-gray-300 peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[1px] after:left-[1px] after:bg-white after:border-gray-300 after:border after:h-[16px] after:w-[18px] after:transition-all peer-checked:bg-[var(--color-secondary)] peer-checked:border-[var(--color-secondary)] transition-colors duration-300" />
                </label>
              </div>
              
              {/* Picture Upload Field */}
              <div className={`relative w-full border-b border-gray-300 py-3 flex items-center justify-between transition-colors focus-within:border-[var(--color-secondary)] group ${isSubmitting ? "opacity-50" : "cursor-pointer"}`}>
                <span className={`font-body text-[0.95rem] truncate pr-4 ${selectedFile ? "text-gray-900" : "text-gray-400"}`}>
                  {fileName}
                </span>
                
                <div className="text-gray-400 group-hover:text-[var(--color-secondary)] transition-colors shrink-0 mr-2">
                  <Upload size={18} strokeWidth={1.5} />
                </div>
                
                <input
                  type="file"
                  name="profilePicture"
                  accept="image/*"
                  onChange={handleFileChange}
                  className={`absolute inset-0 w-full h-full opacity-0 ${isSubmitting ? "cursor-not-allowed" : "cursor-pointer"}`}
                  disabled={isSubmitting}
                />
              </div>

            </form>
          </div>

          {/* Footer Actions */}
          <div className="p-8 flex gap-4 shrink-0 mt-2">
            <button 
              type="button" 
              onClick={onClose} 
              className="flex-1 font-body font-semibold uppercase text-gray-500 text-[0.72rem] tracking-[0.18em] py-4 border border-gray-200 hover:bg-gray-50 hover:text-gray-800 transition-colors"
            >
              Cancel
            </button>
            <button 
              type="submit" 
              form="add-member-form"
              disabled={isSubmitting} 
              className="flex-1 font-body font-semibold uppercase text-white text-[0.72rem] tracking-[0.18em] py-4 bg-[var(--color-secondary)] hover:opacity-85 transition-opacity duration-300 shadow-md disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center"
            >
              {isSubmitting ? "Creating..." : "Create Member"}
            </button>
          </div>

        </div>
      </div>
    </>
  );
}