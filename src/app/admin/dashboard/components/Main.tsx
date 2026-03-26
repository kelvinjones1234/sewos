"use client";

import { useState, useEffect } from "react";
import {
  Users,
  ShieldCheck,
  ShieldOff,
  UserCog,
  UserCheck,
  CalendarPlus,
  Crown,
  Briefcase,
  TrendingUp,
  RefreshCw,
} from "lucide-react";
import {
  getDashboardStats,
  DashboardStats,
} from "@/app/actions/dashboardSummary";
import { useToast } from "@/app/(general)/context/ToastContext";

// ─────────────────────────────────────────────
// TYPES
// ─────────────────────────────────────────────

type StatCardProps = {
  label: string;
  value: number | string;
  icon: React.ElementType;
  accent?: "default" | "green" | "amber" | "blue" | "red";
  sub?: string;
};

// ─────────────────────────────────────────────
// STAT CARD
// ─────────────────────────────────────────────

const accentMap: Record<NonNullable<StatCardProps["accent"]>, string> = {
  default: "text-[var(--color-secondary)] bg-gray-50 border-gray-200",
  green: "text-emerald-600 bg-emerald-50 border-emerald-100",
  amber: "text-amber-600 bg-amber-50 border-amber-100",
  blue: "text-blue-600 bg-blue-50 border-blue-100",
  red: "text-red-500 bg-red-50 border-red-100",
};

function StatCard({
  label,
  value,
  icon: Icon,
  accent = "default",
  sub,
}: StatCardProps) {
  return (
    <div className="bg-white border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow relative">
      <div className="flex items-start gap-4">
        <div
          className={`w-12 h-12 flex items-center justify-center flex-shrink-0 border ${accentMap[accent]}`}
        >
          <Icon size={20} strokeWidth={1.5} />
        </div>
        <div className="min-w-0 pt-1">
          <p className="font-semibold text-gray-900 uppercase text-[0.65rem] tracking-[0.1em] truncate">
            {label}
          </p>
          <p className="font-heading font-bold text-[1.75rem] text-gray-900 mt-1 leading-none">
            {value}
          </p>
          {sub && (
            <p className="font-body text-xs text-gray-500 mt-1.5">{sub}</p>
          )}
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// SECTION HEADER
// ─────────────────────────────────────────────

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3.5 mb-4 mt-8">
      <div className="w-4 h-0.5 bg-[var(--color-secondary)]" />
      <h3 className="font-body font-semibold uppercase text-[0.68rem] tracking-[0.28em] text-[var(--color-secondary)]">
        {children}
      </h3>
    </div>
  );
}

// ─────────────────────────────────────────────
// AVATAR
// ─────────────────────────────────────────────

function Avatar({ name, picture }: { name: string; picture?: string | null }) {
  return (
    <div className="w-10 h-10 sm:w-12 sm:h-12 border border-gray-200 bg-gray-50 flex-shrink-0 overflow-hidden relative">
      {picture ? (
        <img
          src={picture}
          alt={name}
          className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-500"
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-heading font-bold text-lg uppercase">
          {name.charAt(0)}
        </div>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────
// VERIFIED BADGE
// ─────────────────────────────────────────────

function VerifiedBadge({ verified }: { verified: boolean }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 font-body font-semibold uppercase text-[0.65rem] tracking-[0.2em] ${
        verified ? "text-[var(--color-secondary)]" : "text-gray-400"
      }`}
    >
      {verified ? (
        <ShieldCheck size={14} strokeWidth={1.5} />
      ) : (
        <ShieldOff size={14} strokeWidth={1.5} />
      )}
      {verified ? "Verified" : "Pending"}
    </span>
  );
}

// ─────────────────────────────────────────────
// SKELETON HELPERS
// ─────────────────────────────────────────────

function SkeletonCard() {
  return (
    <div className="bg-white border border-gray-200 p-6 shadow-sm animate-pulse">
      <div className="flex gap-4">
        <div className="w-12 h-12 border border-gray-100 bg-gray-50 flex-shrink-0" />
        <div className="flex-1 space-y-3 pt-1">
          <div className="h-2 bg-gray-100 w-2/3" />
          <div className="h-4 bg-gray-100 w-1/3" />
        </div>
      </div>
    </div>
  );
}

function SkeletonRow() {
  return (
    <div className="flex items-start gap-4 py-4 animate-pulse border-t border-gray-100">
      <div className="w-12 h-12 bg-gray-50 border border-gray-100 flex-shrink-0" />
      <div className="flex-1 space-y-2 pt-1">
        <div className="h-3 bg-gray-100 w-2/3" />
        <div className="h-2 bg-gray-100 w-1/3" />
      </div>
      <div className="h-3 w-16 bg-gray-100 mt-1" />
    </div>
  );
}

// ─────────────────────────────────────────────
// WARD BAR CHART ROW
// ─────────────────────────────────────────────

function WardBar({
  ward,
  count,
  max,
}: {
  ward: string;
  count: number;
  max: number;
}) {
  const pct = max > 0 ? Math.round((count / max) * 100) : 0;
  return (
    <div className="flex items-center gap-4 py-3 group">
      <p className="font-body text-[0.95rem] text-gray-700 w-28 flex-shrink-0 truncate group-hover:text-gray-900 transition-colors">
        {ward}
      </p>
      <div className="flex-1 h-1.5 bg-gray-100 overflow-hidden relative">
        <div
          className="absolute top-0 left-0 h-full bg-[var(--color-secondary)] transition-all duration-700"
          style={{ width: `${pct}%` }}
        />
      </div>
      <p className="font-body font-bold text-gray-900 w-8 text-right flex-shrink-0">
        {count}
      </p>
    </div>
  );
}

// ─────────────────────────────────────────────
// MAIN COMPONENT
// ─────────────────────────────────────────────

export default function DashboardMain() {
  const { toast } = useToast();
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const loadStats = async (silent = false) => {
    if (!silent) setIsLoading(true);
    else setIsRefreshing(true);

    const result = await getDashboardStats();
    if (result.success && result.data) {
      setStats(result.data);
    } else {
      toast(result.error || "Failed to load dashboard stats", "error");
    }

    setIsLoading(false);
    setIsRefreshing(false);
  };

  useEffect(() => {
    loadStats();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const wardMax = stats?.membersByWard?.[0]?.count ?? 1;

  return (
    <section className="relative pb-24 min-h-screen flex flex-col bg-gray-50/30">
      <div className="w-full max-w-[1400px] mx-auto flex flex-col flex-1 gap-6 pt-10">
        {/* ── Header ── */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 pb-6">
          <div>
            <div className="flex items-center gap-3.5 mb-3">
              <div className="w-7 h-0.5 bg-[var(--color-secondary)]" />
              <span className="font-body font-semibold uppercase text-[0.68rem] tracking-[0.28em] text-[var(--color-secondary)]">
                Overview
              </span>
            </div>
            <h2 className="font-heading font-bold text-gray-900 text-[clamp(2.2rem,4vw,3rem)] leading-[1.1] tracking-[0.01em]">
              System{" "}
              <span className="text-[var(--color-secondary)]">Dashboard</span>
            </h2>
            <div className="w-12 h-[3px] bg-[var(--color-accent)] my-5" />
            <p className="font-body text-[#5D5555] text-[0.95rem] leading-[1.8] max-w-md">
              A live overview of membership activity and system users across the
              entire network.
            </p>
          </div>

          <button
            onClick={() => loadStats(true)}
            disabled={isRefreshing}
            className="font-body font-semibold uppercase text-gray-600 text-[0.72rem] tracking-[0.18em] px-8 py-4 border border-gray-200 bg-white hover:bg-gray-50 hover:text-gray-900 transition-all shadow-sm flex justify-center items-center gap-3 disabled:opacity-60"
          >
            <RefreshCw
              size={16}
              strokeWidth={2}
              className={
                isRefreshing ? "animate-spin text-[var(--color-secondary)]" : ""
              }
            />
            {isRefreshing ? "Refreshing..." : "Refresh Data"}
          </button>
        </div>

        {/* ── Member Stats ── */}
        <div>
          <SectionLabel>Members</SectionLabel>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {isLoading ? (
              [...Array(4)].map((_, i) => <SkeletonCard key={i} />)
            ) : (
              <>
                <StatCard
                  label="Total Members"
                  value={stats?.totalMembers ?? 0}
                  icon={Users}
                  accent="default"
                />
                <StatCard
                  label="Verified"
                  value={stats?.verifiedMembers ?? 0}
                  icon={ShieldCheck}
                  accent="green"
                />
                <StatCard
                  label="Pending"
                  value={stats?.pendingMembers ?? 0}
                  icon={ShieldOff}
                  accent="amber"
                />
                <StatCard
                  label="New This Month"
                  value={stats?.newMembersThisMonth ?? 0}
                  icon={CalendarPlus}
                  accent="blue"
                  sub={new Date().toLocaleString("default", {
                    month: "long",
                    year: "numeric",
                  })}
                />
              </>
            )}
          </div>
        </div>

        {/* ── User Stats ── */}
        <div>
          <SectionLabel>System Users</SectionLabel>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {isLoading ? (
              [...Array(4)].map((_, i) => <SkeletonCard key={i} />)
            ) : (
              <>
                <StatCard
                  label="Total Users"
                  value={stats?.totalUsers ?? 0}
                  icon={UserCog}
                  accent="default"
                />
                <StatCard
                  label="Active Users"
                  value={stats?.activeUsers ?? 0}
                  icon={UserCheck}
                  accent="green"
                />
                <StatCard
                  label="Admins"
                  value={stats?.adminUsers ?? 0}
                  icon={Crown}
                  accent="blue"
                />
                <StatCard
                  label="Staff"
                  value={stats?.staffUsers ?? 0}
                  icon={Briefcase}
                  accent="default"
                />
              </>
            )}
          </div>
        </div>

        {/* ── Bottom Two-Column Grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
          {/* Recent Members Column */}
          <div className="bg-white border border-gray-200 shadow-sm p-6">
            <div className="flex flex-col mb-6">
              <div className="flex items-center gap-3.5 mb-2">
                <div className="w-4 h-0.5 bg-[var(--color-secondary)]" />
                <span className="font-body font-semibold uppercase text-[0.65rem] tracking-[0.28em] text-[var(--color-secondary)]">
                  Activity
                </span>
              </div>
              <div className="flex items-center justify-between">
                <h3 className="font-heading font-bold text-xl text-gray-900">
                  Latest Members
                </h3>
                <TrendingUp
                  size={18}
                  className="text-[var(--color-secondary)]"
                  strokeWidth={1.5}
                />
              </div>
            </div>

            <div className="divide-y divide-gray-100 border-t border-gray-100">
              {isLoading ? (
                [...Array(5)].map((_, i) => <SkeletonRow key={i} />)
              ) : stats?.recentMembers.length === 0 ? (
                <div className="py-12 flex flex-col items-center gap-3 text-center">
                  <Users size={32} className="text-gray-300" strokeWidth={1} />
                  <p className="font-body text-[0.95rem] text-gray-500">
                    No members registered yet.
                  </p>
                </div>
              ) : (
                stats?.recentMembers.map((member) => (
                  <div
                    key={member.id}
                    className="flex items-start gap-4 py-4 group hover:bg-gray-50/50 -mx-6 px-6 transition-colors"
                  >
                    <Avatar
                      name={member.fullName}
                      picture={member.profilePicture || ""}
                    />
                    <div className="flex-1 min-w-0 pt-1">
                      <p className="font-heading font-bold text-[1.05rem] text-gray-900 truncate">
                        {member.fullName}
                      </p>
                      <div className="flex flex-col gap-0.5 mt-1">
                        <p className="font-body text-xs text-gray-500">
                          <span className="font-semibold text-gray-900 uppercase text-[0.6rem] tracking-[0.1em] mr-1">
                            ID
                          </span>
                          {member.membershipId}
                        </p>
                        <p className="font-body text-xs text-gray-500">
                          <span className="font-semibold text-gray-900 uppercase text-[0.6rem] tracking-[0.1em] mr-1">
                            Ward
                          </span>
                          {member.ward}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-2 pt-1 flex-shrink-0">
                      <VerifiedBadge verified={member.verified} />
                      <p className="font-body font-semibold uppercase text-[0.6rem] tracking-[0.1em] text-gray-400 mt-1">
                        {new Date(member.createdAt).toLocaleDateString(
                          "en-GB",
                          {
                            day: "numeric",
                            month: "short",
                          },
                        )}
                      </p>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Top Wards Column */}
          <div className="bg-white border border-gray-200 shadow-sm p-6 flex flex-col">
            <div className="flex flex-col mb-6">
              <div className="flex items-center gap-3.5 mb-2">
                <div className="w-4 h-0.5 bg-[var(--color-secondary)]" />
                <span className="font-body font-semibold uppercase text-[0.65rem] tracking-[0.28em] text-[var(--color-secondary)]">
                  Demographics
                </span>
              </div>
              <div className="flex items-center justify-between">
                <h3 className="font-heading font-bold text-xl text-gray-900">
                  Top Wards
                </h3>
                <Users
                  size={18}
                  className="text-[var(--color-secondary)]"
                  strokeWidth={1.5}
                />
              </div>
            </div>

            <div className="flex-1">
              {isLoading ? (
                <div className="space-y-6 py-2 border-t border-gray-100 pt-6">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-4 animate-pulse"
                    >
                      <div className="h-2.5 bg-gray-100 rounded w-24 flex-shrink-0" />
                      <div className="flex-1 h-1.5 bg-gray-100" />
                      <div className="h-2.5 bg-gray-100 rounded w-6 flex-shrink-0" />
                    </div>
                  ))}
                </div>
              ) : stats?.membersByWard.length === 0 ? (
                <div className="py-12 flex flex-col items-center gap-3 text-center border-t border-gray-100">
                  <Users size={32} className="text-gray-300" strokeWidth={1} />
                  <p className="font-body text-[0.95rem] text-gray-500">
                    No ward data available.
                  </p>
                </div>
              ) : (
                <div className="divide-y divide-gray-50 border-t border-gray-100">
                  {stats?.membersByWard.map((w) => (
                    <WardBar
                      key={w.ward}
                      ward={w.ward}
                      count={w.count}
                      max={wardMax}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Verification Rate Footer */}
            {!isLoading && stats && stats.totalMembers > 0 && (
              <div className="mt-6 pt-6 border-t border-gray-100">
                <div className="flex items-center justify-between mb-3">
                  <p className="font-semibold text-gray-900 uppercase text-[0.65rem] tracking-[0.1em]">
                    System Verification Rate
                  </p>
                  <p className="font-heading font-bold text-lg text-[var(--color-secondary)]">
                    {Math.round(
                      (stats.verifiedMembers / stats.totalMembers) * 100,
                    )}
                    %
                  </p>
                </div>

                <div className="w-full h-1.5 bg-gray-100 overflow-hidden relative">
                  <div
                    className="absolute top-0 left-0 h-full bg-[var(--color-secondary)] transition-all duration-700"
                    style={{
                      width: `${Math.round((stats.verifiedMembers / stats.totalMembers) * 100)}%`,
                    }}
                  />
                </div>

                <div className="flex justify-between mt-3">
                  <p className="font-body text-xs text-gray-500">
                    <span className="font-bold text-gray-900">
                      {stats.verifiedMembers}
                    </span>{" "}
                    Verified
                  </p>
                  <p className="font-body text-xs text-gray-500">
                    <span className="font-bold text-gray-900">
                      {stats.pendingMembers}
                    </span>{" "}
                    Pending
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
