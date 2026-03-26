// "use client";

// import { useState, useEffect, use } from "react";
// import { Edit2, Trash2, Plus, Search, Users } from "lucide-react";
// import { getMembers, deleteMember } from "@/app/actions/adminMemberManagement";
// import AddMemberModal from "./AddmembersModal";
// import EditMemberModal from "./EditMembersModal";
// import { useToast } from "@/app/(general)/context/ToastContext";

// // --- TYPES (Mapped precisely to your Prisma Schema) ---
// export type Member = {
//   id: string;
//   membershipId: string; // <-- Added back
//   fullName: string;
//   residentialAddress: string;
//   state: string;
//   ward: string;
//   whatsappNumber: string;
//   profilePicture: string | null;
// };

// // --- AVATAR ---
// function Avatar({ member }: { member: Member }) {
//   return (
//     <div className="w-12 h-12 sm:w-14 sm:h-14 border border-gray-200 bg-gray-50 flex-shrink-0 overflow-hidden relative">
//       {member.profilePicture ? (
//         <img src={member.profilePicture} alt={member.fullName} className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-500" />
//       ) : (
//         <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-heading font-bold text-lg uppercase">
//           {member.fullName.charAt(0)}
//         </div>
//       )}
//     </div>
//   );
// }

// // --- SKELETON ROW ---
// function SkeletonRow() {
//   return (
//     <tr className="animate-pulse border-b border-gray-100">
//       {[...Array(4)].map((_, i) => (
//         <td key={i} className="px-6 py-5">
//           <div className="h-3 bg-gray-100" style={{ width: `${[60, 40, 50, 20][i]}%` }} />
//         </td>
//       ))}
//     </tr>
//   );
// }

// // --- MOBILE MEMBER CARD ---
// function MemberCard({
//   member,
//   onEdit,
//   onDelete,
// }: {
//   member: Member;
//   onEdit: (m: Member) => void;
//   onDelete: (id: string) => void;
// }) {
//   return (
//     <div className="bg-white border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow relative">
//       <div className="flex items-start gap-4">
//         <Avatar member={member} />
//         <div className="flex-1 min-w-0 pt-1">
//           <div className="min-w-0 mb-3">
//             <p className="font-heading font-bold text-lg text-gray-900 truncate leading-none">{member.fullName}</p>
//             <p className="font-body text-[0.8rem] text-gray-500 font-medium mt-1.5">{member.membershipId}</p> {/* <-- Added ID */}
//           </div>
//           <div className="flex flex-col gap-1">
//             <p className="font-body text-sm text-gray-600">
//               <span className="font-semibold text-gray-900 uppercase text-[0.65rem] tracking-[0.1em] mr-2">Location</span>
//               {member.state}, {member.ward}
//             </p>
//             <p className="font-body text-sm text-gray-600">
//               <span className="font-semibold text-gray-900 uppercase text-[0.65rem] tracking-[0.1em] mr-2">WhatsApp</span>
//               {member.whatsappNumber}
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Card Footer */}
//       <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-end">
//         <div className="flex gap-2">
//           <button
//             onClick={() => onEdit(member)}
//             className="w-10 h-10 border border-gray-200 flex items-center justify-center text-gray-400 hover:text-[var(--color-secondary)] hover:border-[var(--color-secondary)] transition-all bg-white"
//             title="Edit"
//           >
//             <Edit2 size={16} strokeWidth={1.5} />
//           </button>
//           <button
//             onClick={() => onDelete(member.id)}
//             className="w-10 h-10 border border-gray-200 flex items-center justify-center text-gray-400 hover:text-[var(--color-accent)] hover:border-[var(--color-accent)] transition-all bg-white"
//             title="Delete"
//           >
//             <Trash2 size={16} strokeWidth={1.5} />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// // --- MAIN COMPONENT ---
// export default function MembersMain() {
//   const { toast } = useToast();
//   const [members, setMembers] = useState<Member[]>([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [searchQuery, setSearchQuery] = useState("");

//   // Modal States
//   const [isAddOpen, setIsAddOpen] = useState(false);
//   const [isEditOpen, setIsEditOpen] = useState(false);
//   const [selectedMember, setSelectedMember] = useState<Member | null>(null);

//   // --- LOAD DATA ---
//   const loadMembers = async () => {
//     setIsLoading(true);
//     const result = await getMembers();
//     if (result.success && result.data) {
//       setMembers(result.data);
//     } else {
//       toast(result.error || "Failed to load members", "error");
//     }
//     setIsLoading(false);
//   };

//   useEffect(() => {
//     loadMembers();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   // --- FILTERED MEMBERS ---
//   const filteredMembers = members.filter((m) => {
//     const search = searchQuery.toLowerCase();
//     return (
//       (m.fullName || "").toLowerCase().includes(search) ||
//       (m.membershipId || "").toLowerCase().includes(search) || // <-- Added ID to search filter
//       (m.state || "").toLowerCase().includes(search) ||
//       (m.ward || "").toLowerCase().includes(search)
//     );
//   });

//   // --- HANDLERS ---
//   const handleDelete = async (id: string) => {
//     if (!confirm("Are you sure you want to delete this member?")) return;
//     const previousMembers = [...members];
//     setMembers((prev) => prev.filter((m) => m.id !== id));
    
//     const result = await deleteMember(id);
//     if (!result.success) {
//       setMembers(previousMembers); // Revert UI if DB fails
//       toast(result.error || "Failed to delete member", "error");
//     } else {
//       toast("Member deleted successfully", "success");
//     }
//   };

//   const openEditModal = (member: Member) => {
//     setSelectedMember(member);
//     setIsEditOpen(true);
//   };

//   return (
//     <section className="relative pb-24 min-h-screen flex flex-col bg-gray-50/30">
//       <div className="w-full max-w-[1400px] mx-auto flex flex-col flex-1 gap-6 pt-10">

//         {/* ── Header ── */}
//         <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 pb-6">
//           <div>
//             <div className="flex items-center gap-3.5 mb-3">
//               <div className="w-7 h-0.5 bg-[var(--color-secondary)]" />
//               <span className="font-body font-semibold uppercase text-[0.68rem] tracking-[0.28em] text-[var(--color-secondary)]">
//                 Network
//               </span>
//             </div>
//             <h2 className="font-heading font-bold text-gray-900 text-[clamp(2.2rem,4vw,3rem)] leading-[1.1] tracking-[0.01em]">
//               Member <span className="text-[var(--color-secondary)]">Directory</span>
//             </h2>
//             <div className="w-12 h-[3px] bg-[var(--color-accent)] my-5" />
//             <p className="font-body text-[#5D5555] text-[0.95rem] leading-[1.8] max-w-md">
//               Manage registered members and update community details across all states and wards.
//             </p>
//           </div>
          
//           <button
//             onClick={() => setIsAddOpen(true)}
//             className="font-body font-semibold uppercase text-white text-[0.72rem] tracking-[0.18em] px-8 py-4 bg-[var(--color-secondary)] hover:opacity-85 transition-opacity duration-300 shadow-lg flex justify-center items-center gap-3"
//           >
//             <Plus size={16} strokeWidth={2} />
//             Add Member
//           </button>
//         </div>

//         {/* ── Search Bar ── */}
//         <div className="flex flex-col sm:flex-row gap-6 mb-2">
//           <div className="relative flex-1 group">
//             <Search
//               size={18}
//               className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[var(--color-secondary)] transition-colors pointer-events-none"
//               strokeWidth={1.5}
//             />
//             <input
//               type="text"
//               placeholder="Search by name, ID, state or ward…"
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               className="w-full pl-8 pr-4 py-3 bg-transparent font-body text-[0.95rem] text-gray-900 border-b border-gray-300 placeholder:text-gray-400 outline-none focus:border-[var(--color-secondary)] transition-colors"
//             />
//           </div>
//         </div>

//         {/* ── Results count ── */}
//         {!isLoading && (
//           <p className="font-body font-semibold uppercase text-[0.65rem] tracking-[0.2em] text-gray-500 mb-2">
//             {filteredMembers.length === members.length
//               ? `Showing all ${members.length} members`
//               : `Showing ${filteredMembers.length} of ${members.length} members`}
//           </p>
//         )}

//         {/* ── Desktop Table ── */}
//         <div className="hidden md:block bg-white border border-gray-200 shadow-sm">
//           <div className="overflow-x-auto">
//             <table className="w-full text-left border-collapse whitespace-nowrap">
//               <thead>
//                 <tr className="border-b border-gray-200 bg-gray-50/50">
//                   <th className="px-6 py-5 font-body font-semibold uppercase text-[0.65rem] tracking-[0.2em] text-gray-500">Member</th>
//                   <th className="px-6 py-5 font-body font-semibold uppercase text-[0.65rem] tracking-[0.2em] text-gray-500">Location</th>
//                   <th className="px-6 py-5 font-body font-semibold uppercase text-[0.65rem] tracking-[0.2em] text-gray-500">WhatsApp</th>
//                   <th className="px-6 py-5 font-body font-semibold uppercase text-[0.65rem] tracking-[0.2em] text-gray-500 text-right">Actions</th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-gray-100">
//                 {isLoading ? (
//                   [...Array(5)].map((_, i) => <SkeletonRow key={i} />)
//                 ) : filteredMembers.length === 0 ? (
//                   <tr>
//                     <td colSpan={4} className="px-6 py-20 text-center">
//                       <div className="flex flex-col items-center gap-3">
//                         <Users size={32} className="text-gray-300" strokeWidth={1} />
//                         <p className="font-body text-[0.95rem] text-gray-500">
//                           {searchQuery ? "No members match your criteria." : "No members found."}
//                         </p>
//                         {searchQuery && (
//                           <button
//                             onClick={() => setSearchQuery("")}
//                             className="font-body font-semibold uppercase text-[0.65rem] tracking-[0.1em] text-[var(--color-secondary)] hover:text-gray-900 transition-colors mt-2"
//                           >
//                             Clear Search
//                           </button>
//                         )}
//                       </div>
//                     </td>
//                   </tr>
//                 ) : (
//                   filteredMembers.map((member) => (
//                     <tr key={member.id} className="hover:bg-gray-50/50 transition-colors group">
//                       <td className="px-6 py-4">
//                         <div className="flex items-center gap-4">
//                           <Avatar member={member} />
//                           <div>
//                             <p className="font-heading font-bold text-gray-900 text-[1.05rem]">{member.fullName}</p>
//                             <p className="font-body text-xs text-gray-500 mt-0.5">{member.membershipId}</p> {/* <-- Added ID */}
//                           </div>
//                         </div>
//                       </td>
//                       <td className="px-6 py-4 font-body text-[0.95rem] text-gray-700">{member.state}, {member.ward}</td>
//                       <td className="px-6 py-4 font-body text-[0.95rem] text-gray-700">{member.whatsappNumber}</td>
//                       <td className="px-6 py-4 text-right">
//                         <div className="flex justify-end gap-2">
//                           <button
//                             onClick={() => openEditModal(member)}
//                             className="w-9 h-9 border border-transparent flex items-center justify-center text-gray-400 hover:text-[var(--color-secondary)] hover:border-[var(--color-secondary)] transition-all bg-white shadow-sm"
//                             title="Edit"
//                           >
//                             <Edit2 size={15} strokeWidth={1.5} />
//                           </button>
//                           <button
//                             onClick={() => handleDelete(member.id)}
//                             className="w-9 h-9 border border-transparent flex items-center justify-center text-gray-400 hover:text-[var(--color-accent)] hover:border-[var(--color-accent)] transition-all bg-white shadow-sm"
//                             title="Delete"
//                           >
//                             <Trash2 size={15} strokeWidth={1.5} />
//                           </button>
//                         </div>
//                       </td>
//                     </tr>
//                   ))
//                 )}
//               </tbody>
//             </table>
//           </div>
//         </div>

//         {/* ── Mobile Card List ── */}
//         <div className="md:hidden flex flex-col gap-4">
//           {isLoading ? (
//             [...Array(4)].map((_, i) => (
//               <div key={i} className="bg-white border border-gray-200 p-6 animate-pulse shadow-sm">
//                 <div className="flex gap-4">
//                   <div className="w-12 h-12 border border-gray-100 bg-gray-50" />
//                   <div className="flex-1 space-y-3 pt-1">
//                     <div className="h-3 bg-gray-100 w-2/3" />
//                     <div className="h-2 bg-gray-100 w-1/3" />
//                   </div>
//                 </div>
//               </div>
//             ))
//           ) : filteredMembers.length === 0 ? (
//             <div className="flex flex-col items-center gap-3 py-16 text-center border border-gray-200 bg-white">
//               <Users size={32} className="text-gray-300" strokeWidth={1} />
//               <p className="font-body text-[0.95rem] text-gray-500">
//                 {searchQuery ? "No members match your criteria." : "No members found."}
//               </p>
//               {searchQuery && (
//                 <button
//                   onClick={() => setSearchQuery("")}
//                   className="font-body font-semibold uppercase text-[0.65rem] tracking-[0.1em] text-[var(--color-secondary)] hover:text-gray-900 transition-colors mt-2"
//                 >
//                   Clear Search
//                 </button>
//               )}
//             </div>
//           ) : (
//             filteredMembers.map((member) => (
//               <MemberCard
//                 key={member.id}
//                 member={member}
//                 onEdit={openEditModal}
//                 onDelete={handleDelete}
//               />
//             ))
//           )}
//         </div>

//       </div>

//       {/* ── Modals ── */}
//       <AddMemberModal isOpen={isAddOpen} onClose={() => setIsAddOpen(false)} onSuccess={loadMembers} />
//       <EditMemberModal
//         isOpen={isEditOpen}
//         onClose={() => { setIsEditOpen(false); setSelectedMember(null); }}
//         onSuccess={loadMembers}
//         member={selectedMember}
//       />
//     </section>
//   );
// }












"use client";

import { useState, useEffect } from "react";
import { Edit2, Trash2, Plus, Search, Users, ShieldCheck, ShieldOff, ChevronDown } from "lucide-react";
import { updateMember, getMembers, deleteMember } from "@/app/actions/adminMemberManagement";
import AddMemberModal from "./AddmembersModal";
import EditMemberModal from "./EditMembersModal";
import { useToast } from "@/app/(general)/context/ToastContext";

// --- TYPES (Mapped precisely to your Prisma Schema) ---
export type Member = {
  id: string;
  membershipId: string;
  fullName: string;
  residentialAddress: string;
  state: string;
  ward: string;
  whatsappNumber: string;
  profilePicture: string | null;
  verified: boolean; // <-- Added verified flag
};

// --- AVATAR ---
function Avatar({ member }: { member: Member }) {
  return (
    <div className="w-12 h-12 sm:w-14 sm:h-14 border border-gray-200 bg-gray-50 flex-shrink-0 overflow-hidden relative">
      {member.profilePicture ? (
        <img src={member.profilePicture} alt={member.fullName} className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-500" />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-heading font-bold text-lg uppercase">
          {member.fullName.charAt(0)}
        </div>
      )}
    </div>
  );
}

// --- VERIFIED BADGE ---
function VerifiedBadge({ verified }: { verified: boolean }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 font-body font-semibold uppercase text-[0.65rem] tracking-[0.2em] ${
        verified ? "text-[var(--color-secondary)]" : "text-gray-400"
      }`}
    >
      {verified ? <ShieldCheck size={14} strokeWidth={1.5} /> : <ShieldOff size={14} strokeWidth={1.5} />}
      {verified ? "Verified" : "Pending"}
    </span>
  );
}

// --- TOGGLE SWITCH ---
function Toggle({ checked, onChange }: { checked: boolean; onChange: () => void }) {
  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input type="checkbox" className="sr-only peer" checked={checked} onChange={onChange} />
      <div className="w-10 h-5 bg-gray-200 border border-gray-300 peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[1px] after:left-[1px] after:bg-white after:border-gray-300 after:border after:h-[16px] after:w-[18px] after:transition-all peer-checked:bg-[var(--color-secondary)] peer-checked:border-[var(--color-secondary)] transition-colors duration-300" />
    </label>
  );
}

// --- SKELETON ROW ---
function SkeletonRow() {
  return (
    <tr className="animate-pulse border-b border-gray-100">
      {[...Array(5)].map((_, i) => (
        <td key={i} className="px-6 py-5">
          <div className="h-3 bg-gray-100" style={{ width: `${[60, 40, 50, 30, 20][i]}%` }} />
        </td>
      ))}
    </tr>
  );
}

// --- MOBILE MEMBER CARD ---
function MemberCard({
  member,
  onEdit,
  onDelete,
  onToggleVerify,
}: {
  member: Member;
  onEdit: (m: Member) => void;
  onDelete: (id: string) => void;
  onToggleVerify: (id: string, current: boolean) => void;
}) {
  return (
    <div className="bg-white border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow relative">
      <div className="flex items-start gap-4">
        <Avatar member={member} />
        <div className="flex-1 min-w-0 pt-1">
          <div className="min-w-0 mb-3">
            <p className="font-heading font-bold text-lg text-gray-900 truncate leading-none">{member.fullName}</p>
            <p className="font-body text-[0.8rem] text-gray-500 font-medium mt-1.5">{member.membershipId}</p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="font-body text-sm text-gray-600">
              <span className="font-semibold text-gray-900 uppercase text-[0.65rem] tracking-[0.1em] mr-2">Location</span>
              {member.state}, {member.ward}
            </p>
            <p className="font-body text-sm text-gray-600">
              <span className="font-semibold text-gray-900 uppercase text-[0.65rem] tracking-[0.1em] mr-2">WhatsApp</span>
              {member.whatsappNumber}
            </p>
          </div>
        </div>
      </div>

      {/* Card Footer */}
      <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-between">
        <div className="flex flex-col items-start gap-2">
          <VerifiedBadge verified={member.verified} />
          <Toggle checked={member.verified} onChange={() => onToggleVerify(member.id, member.verified)} />
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => onEdit(member)}
            className="w-10 h-10 border border-gray-200 flex items-center justify-center text-gray-400 hover:text-[var(--color-secondary)] hover:border-[var(--color-secondary)] transition-all bg-white"
            title="Edit"
          >
            <Edit2 size={16} strokeWidth={1.5} />
          </button>
          <button
            onClick={() => onDelete(member.id)}
            className="w-10 h-10 border border-gray-200 flex items-center justify-center text-gray-400 hover:text-[var(--color-accent)] hover:border-[var(--color-accent)] transition-all bg-white"
            title="Delete"
          >
            <Trash2 size={16} strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </div>
  );
}

// --- MAIN COMPONENT ---
export default function MembersMain() {
  const { toast } = useToast();
  const [members, setMembers] = useState<Member[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterVerified, setFilterVerified] = useState<"all" | "verified" | "pending">("all");

  // Modal States
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);

  // --- LOAD DATA ---
  const loadMembers = async () => {
    setIsLoading(true);
    const result = await getMembers();
    if (result.success && result.data) {
      setMembers(result.data);
    } else {
      toast(result.error || "Failed to load members", "error");
    }
    setIsLoading(false);
  };

  useEffect(() => {
    loadMembers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // --- FILTERED MEMBERS ---
  const filteredMembers = members.filter((m) => {
    const search = searchQuery.toLowerCase();
    const matchesSearch =
      (m.fullName || "").toLowerCase().includes(search) ||
      (m.membershipId || "").toLowerCase().includes(search) ||
      (m.state || "").toLowerCase().includes(search) ||
      (m.ward || "").toLowerCase().includes(search);

    const matchesFilter =
      filterVerified === "all" ||
      (filterVerified === "verified" && m.verified) ||
      (filterVerified === "pending" && !m.verified);

    return matchesSearch && matchesFilter;
  });

  // --- HANDLERS ---
  const handleToggleVerify = async (id: string, currentStatus: boolean) => {
    const memberToUpdate = members.find((m) => m.id === id);
    if (!memberToUpdate) return;

    // 1. Optimistic UI update (feels instant to the user)
    setMembers((prev) => prev.map((m) => (m.id === id ? { ...m, verified: !currentStatus } : m)));

    // 2. Package existing data into FormData
    const payload = new FormData();
    payload.append("fullName", memberToUpdate.fullName);
    payload.append("residentialAddress", memberToUpdate.residentialAddress);
    payload.append("state", memberToUpdate.state);
    payload.append("ward", memberToUpdate.ward);
    payload.append("whatsappNumber", memberToUpdate.whatsappNumber);
    payload.append("verified", String(!currentStatus)); // Flip the status

    // 3. Send to Server Action
    const result = await updateMember(id, payload);
    if (!result.success) {
      // Revert UI if database fails
      setMembers((prev) => prev.map((m) => (m.id === id ? { ...m, verified: currentStatus } : m)));
      toast(result.error || "Failed to update status", "error");
    } else {
      toast(`Member ${!currentStatus ? "verified" : "marked as pending"}`, "success");
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this member?")) return;
    const previousMembers = [...members];
    setMembers((prev) => prev.filter((m) => m.id !== id));
    
    const result = await deleteMember(id);
    if (!result.success) {
      setMembers(previousMembers); // Revert UI if DB fails
      toast(result.error || "Failed to delete member", "error");
    } else {
      toast("Member deleted successfully", "success");
    }
  };

  const openEditModal = (member: Member) => {
    setSelectedMember(member);
    setIsEditOpen(true);
  };

  return (
    <section className="relative pb-24 min-h-screen flex flex-col bg-gray-50/30">
      <div className="w-full max-w-[1400px] mx-auto flex flex-col flex-1 gap-6">

        {/* ── Header ── */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 pb-6">
          <div>
            <div className="flex items-center gap-3.5 mb-3">
              <div className="w-7 h-0.5 bg-[var(--color-secondary)]" />
              <span className="font-body font-semibold uppercase text-[0.68rem] tracking-[0.28em] text-[var(--color-secondary)]">
                Network
              </span>
            </div>
            <h2 className="font-heading font-bold text-gray-900 text-[clamp(1.5rem,2.5vw,3rem)] leading-[1.1] tracking-[0.01em]">
              Member <span className="text-[var(--color-secondary)]">Directory</span>
            </h2>
            <div className="w-12 h-[3px] bg-[var(--color-accent)] my-5" />
            <p className="font-body text-[#5D5555] text-[0.95rem] leading-[1.8] max-w-md">
              Manage registered members, approve applications, and update community details across all states.
            </p>
          </div>
          
          <button
            onClick={() => setIsAddOpen(true)}
            className="font-body font-semibold uppercase text-white text-[0.72rem] tracking-[0.18em] px-8 py-4 bg-[var(--color-secondary)] hover:opacity-85 transition-opacity duration-300 shadow-lg flex justify-center items-center gap-3"
          >
            <Plus size={16} strokeWidth={2} />
            Add Member
          </button>
        </div>

        {/* ── Search + Filter Bar ── */}
        <div className="flex flex-col sm:flex-row gap-6 mb-2">
          
          {/* Search */}
          <div className="relative flex-1 group">
            <Search
              size={18}
              className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[var(--color-secondary)] transition-colors pointer-events-none"
              strokeWidth={1.5}
            />
            <input
              type="text"
              placeholder="Search by name, ID, state or ward…"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-8 pr-4 py-3 bg-transparent font-body text-[0.95rem] text-gray-900 border-b border-gray-300 placeholder:text-gray-400 outline-none focus:border-[var(--color-secondary)] transition-colors"
            />
          </div>

          {/* Filter Status */}
          <div className="relative sm:w-56 group">
            <select
              value={filterVerified}
              onChange={(e) => setFilterVerified(e.target.value as typeof filterVerified)}
              className="w-full pl-0 pr-8 py-3 bg-transparent font-body text-[0.95rem] text-gray-900 border-b border-gray-300 outline-none focus:border-[var(--color-secondary)] transition-colors appearance-none cursor-pointer"
            >
              <option value="all">All Statuses</option>
              <option value="verified">Verified Only</option>
              <option value="pending">Pending Only</option>
            </select>
            <ChevronDown
              size={16}
              className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
              strokeWidth={1.5}
            />
          </div>
        </div>

        {/* ── Results count ── */}
        {!isLoading && (
          <p className="font-body font-semibold uppercase text-[0.65rem] tracking-[0.2em] text-gray-500 mb-2">
            {filteredMembers.length === members.length
              ? `Showing all ${members.length} members`
              : `Showing ${filteredMembers.length} of ${members.length} members`}
          </p>
        )}

        {/* ── Desktop Table ── */}
        <div className="hidden md:block bg-white border border-gray-200 shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse whitespace-nowrap">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50/50">
                  <th className="px-6 py-5 font-body font-semibold uppercase text-[0.65rem] tracking-[0.2em] text-gray-500">Member</th>
                  <th className="px-6 py-5 font-body font-semibold uppercase text-[0.65rem] tracking-[0.2em] text-gray-500">Location</th>
                  <th className="px-6 py-5 font-body font-semibold uppercase text-[0.65rem] tracking-[0.2em] text-gray-500">WhatsApp</th>
                  <th className="px-6 py-5 font-body font-semibold uppercase text-[0.65rem] tracking-[0.2em] text-gray-500">Status</th>
                  <th className="px-6 py-5 font-body font-semibold uppercase text-[0.65rem] tracking-[0.2em] text-gray-500">Approve</th>
                  <th className="px-6 py-5 font-body font-semibold uppercase text-[0.65rem] tracking-[0.2em] text-gray-500 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {isLoading ? (
                  [...Array(5)].map((_, i) => <SkeletonRow key={i} />)
                ) : filteredMembers.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="px-6 py-20 text-center">
                      <div className="flex flex-col items-center gap-3">
                        <Users size={32} className="text-gray-300" strokeWidth={1} />
                        <p className="font-body text-[0.95rem] text-gray-500">
                          {searchQuery || filterVerified !== "all" ? "No members match your criteria." : "No members found."}
                        </p>
                        {(searchQuery || filterVerified !== "all") && (
                          <button
                            onClick={() => { setSearchQuery(""); setFilterVerified("all"); }}
                            className="font-body font-semibold uppercase text-[0.65rem] tracking-[0.1em] text-[var(--color-secondary)] hover:text-gray-900 transition-colors mt-2"
                          >
                            Clear Filters
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ) : (
                  filteredMembers.map((member) => (
                    <tr key={member.id} className="hover:bg-gray-50/50 transition-colors group">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-4">
                          <Avatar member={member} />
                          <div>
                            <p className="font-heading font-bold text-gray-900 text-[1.05rem]">{member.fullName}</p>
                            <p className="font-body text-xs text-gray-500 mt-0.5">{member.membershipId}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 font-body text-[0.95rem] text-gray-700">{member.state}, {member.ward}</td>
                      <td className="px-6 py-4 font-body text-[0.95rem] text-gray-700">{member.whatsappNumber}</td>
                      <td className="px-6 py-4">
                        <VerifiedBadge verified={member.verified} />
                      </td>
                      <td className="px-6 py-4">
                        <Toggle checked={member.verified} onChange={() => handleToggleVerify(member.id, member.verified)} />
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="flex justify-end gap-2">
                          <button
                            onClick={() => openEditModal(member)}
                            className="w-9 h-9 border border-transparent flex items-center justify-center text-gray-400 hover:text-[var(--color-secondary)] hover:border-[var(--color-secondary)] transition-all bg-white shadow-sm"
                            title="Edit"
                          >
                            <Edit2 size={15} strokeWidth={1.5} />
                          </button>
                          <button
                            onClick={() => handleDelete(member.id)}
                            className="w-9 h-9 border border-transparent flex items-center justify-center text-gray-400 hover:text-[var(--color-accent)] hover:border-[var(--color-accent)] transition-all bg-white shadow-sm"
                            title="Delete"
                          >
                            <Trash2 size={15} strokeWidth={1.5} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* ── Mobile Card List ── */}
        <div className="md:hidden flex flex-col gap-4">
          {isLoading ? (
            [...Array(4)].map((_, i) => (
              <div key={i} className="bg-white border border-gray-200 p-6 animate-pulse shadow-sm">
                <div className="flex gap-4">
                  <div className="w-12 h-12 border border-gray-100 bg-gray-50" />
                  <div className="flex-1 space-y-3 pt-1">
                    <div className="h-3 bg-gray-100 w-2/3" />
                    <div className="h-2 bg-gray-100 w-1/3" />
                  </div>
                </div>
              </div>
            ))
          ) : filteredMembers.length === 0 ? (
            <div className="flex flex-col items-center gap-3 py-16 text-center border border-gray-200 bg-white">
              <Users size={32} className="text-gray-300" strokeWidth={1} />
              <p className="font-body text-[0.95rem] text-gray-500">
                {searchQuery || filterVerified !== "all" ? "No members match your criteria." : "No members found."}
              </p>
              {(searchQuery || filterVerified !== "all") && (
                <button
                  onClick={() => { setSearchQuery(""); setFilterVerified("all"); }}
                  className="font-body font-semibold uppercase text-[0.65rem] tracking-[0.1em] text-[var(--color-secondary)] hover:text-gray-900 transition-colors mt-2"
                >
                  Clear Filters
                </button>
              )}
            </div>
          ) : (
            filteredMembers.map((member) => (
              <MemberCard
                key={member.id}
                member={member}
                onEdit={openEditModal}
                onDelete={handleDelete}
                onToggleVerify={handleToggleVerify}
              />
            ))
          )}
        </div>

      </div>

      {/* ── Modals ── */}
      <AddMemberModal isOpen={isAddOpen} onClose={() => setIsAddOpen(false)} onSuccess={loadMembers} />
      <EditMemberModal
        isOpen={isEditOpen}
        onClose={() => { setIsEditOpen(false); setSelectedMember(null); }}
        onSuccess={loadMembers}
        member={selectedMember}
      />
    </section>
  );
}

