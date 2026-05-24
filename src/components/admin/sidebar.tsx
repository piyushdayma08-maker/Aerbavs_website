"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  LayoutDashboard, Image, Info, ListChecks, Briefcase,
  CheckCircle, Globe, Trophy, BadgeCheck, HelpCircle,
  Mail, Search, FolderOpen, LogOut, Plane, ChevronRight
} from "lucide-react";
import { cn } from "@/lib/cn";

const navGroups = [
  {
    label: "Overview",
    items: [
      { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
    ],
  },
  {
    label: "Content",
    items: [
      { href: "/admin/hero", label: "Hero Slider", icon: Image },
      { href: "/admin/about", label: "About Section", icon: Info },
      { href: "/admin/what-we-do", label: "What We Do", icon: ListChecks },
      { href: "/admin/services", label: "Services", icon: Briefcase },
      { href: "/admin/why-choose-us", label: "Why Choose Us", icon: CheckCircle },
      { href: "/admin/industries", label: "Industries", icon: Globe },
      { href: "/admin/global-operations", label: "Global Operations", icon: Globe },
      { href: "/admin/achievements", label: "Achievements", icon: Trophy },
      { href: "/admin/certifications", label: "Certifications", icon: BadgeCheck },
      { href: "/admin/faq", label: "FAQ", icon: HelpCircle },
      { href: "/admin/contact", label: "Contact", icon: Mail },
    ],
  },
  {
    label: "Settings",
    items: [
      { href: "/admin/seo", label: "SEO & Metadata", icon: Search },
      { href: "/admin/media", label: "Media Library", icon: FolderOpen },
    ],
  },
];

export function AdminSidebar() {
  const pathname = usePathname();
  const router = useRouter();

  async function handleLogout() {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/admin/login");
  }

  return (
    <aside className="flex h-screen w-64 flex-col border-r border-slate-200 bg-white">
      {/* Logo */}
      <div className="flex h-16 shrink-0 items-center gap-3 border-b border-slate-200 px-5">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#0F172A]">
          <Plane className="h-4 w-4 text-white" />
        </div>
        <div>
          <div className="text-sm font-semibold text-[#0F172A]">AeroTrade</div>
          <div className="text-xs text-slate-500">Admin Panel</div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto px-3 py-4">
        {navGroups.map((group) => (
          <div key={group.label} className="mb-5">
            <p className="mb-1.5 px-2 text-[10px] font-semibold uppercase tracking-widest text-slate-400">
              {group.label}
            </p>
            <ul className="space-y-0.5">
              {group.items.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        "flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-sm font-medium transition-colors",
                        isActive
                          ? "bg-[#0F172A] text-white"
                          : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                      )}
                    >
                      <Icon className="h-4 w-4 shrink-0" />
                      <span className="flex-1 truncate">{item.label}</span>
                      {isActive && <ChevronRight className="h-3 w-3 opacity-60" />}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>

      {/* Bottom actions */}
      <div className="shrink-0 border-t border-slate-200 p-3">
        <Link
          href="/"
          target="_blank"
          className="flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-sm text-slate-600 hover:bg-slate-100 hover:text-slate-900"
        >
          <Globe className="h-4 w-4" />
          View Website
        </Link>
        <button
          onClick={handleLogout}
          className="mt-0.5 flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2 text-sm text-red-600 hover:bg-red-50 hover:text-red-700"
        >
          <LogOut className="h-4 w-4" />
          Sign Out
        </button>
      </div>
    </aside>
  );
}
