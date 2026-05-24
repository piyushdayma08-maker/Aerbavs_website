"use client";

import Link from "next/link";
import {
  Image, Info, ListChecks, Briefcase, CheckCircle,
  Globe, Trophy, BadgeCheck, HelpCircle, Mail,
  Search, FolderOpen, ArrowRight, Plane
} from "lucide-react";

const sections = [
  { href: "/admin/hero", label: "Hero Slider", description: "Manage cinematic hero slides", icon: Image, color: "bg-blue-50 text-blue-700" },
  { href: "/admin/about", label: "About Section", description: "Edit company overview", icon: Info, color: "bg-purple-50 text-purple-700" },
  { href: "/admin/what-we-do", label: "What We Do", description: "Update service capabilities", icon: ListChecks, color: "bg-green-50 text-green-700" },
  { href: "/admin/services", label: "Services", description: "Manage service offerings", icon: Briefcase, color: "bg-orange-50 text-orange-700" },
  { href: "/admin/why-choose-us", label: "Why Choose Us", description: "Edit differentiators", icon: CheckCircle, color: "bg-teal-50 text-teal-700" },
  { href: "/admin/industries", label: "Industries", description: "Update industry cards", icon: Globe, color: "bg-sky-50 text-sky-700" },
  { href: "/admin/global-operations", label: "Global Operations", description: "Manage hub locations", icon: Globe, color: "bg-indigo-50 text-indigo-700" },
  { href: "/admin/achievements", label: "Achievements", description: "Update statistics", icon: Trophy, color: "bg-amber-50 text-amber-700" },
  { href: "/admin/certifications", label: "Certifications", description: "Manage certifications", icon: BadgeCheck, color: "bg-emerald-50 text-emerald-700" },
  { href: "/admin/faq", label: "FAQ", description: "Edit Q&A items", icon: HelpCircle, color: "bg-rose-50 text-rose-700" },
  { href: "/admin/contact", label: "Contact", description: "Update contact details", icon: Mail, color: "bg-pink-50 text-pink-700" },
  { href: "/admin/seo", label: "SEO Settings", description: "Manage metadata", icon: Search, color: "bg-cyan-50 text-cyan-700" },
  { href: "/admin/media", label: "Media Library", description: "Upload & manage images", icon: FolderOpen, color: "bg-violet-50 text-violet-700" },
];

export default function AdminDashboardPage() {
  return (
    <div className="min-h-full">
      {/* Header */}
      <div className="border-b border-slate-200 bg-white px-8 py-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-semibold text-[#0F172A]">Dashboard</h1>
            <p className="mt-0.5 text-sm text-slate-500">Manage all website content from one place</p>
          </div>
          <Link
            href="/"
            target="_blank"
            className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
          >
            <Plane className="h-4 w-4" />
            View Website
          </Link>
        </div>
      </div>

      {/* Stats bar */}
      <div className="border-b border-slate-200 bg-slate-50 px-8 py-4">
        <div className="flex items-center gap-8 text-sm">
          <div>
            <span className="font-semibold text-[#0F172A]">13</span>
            <span className="ml-1.5 text-slate-500">Editable sections</span>
          </div>
          <div>
            <span className="font-semibold text-[#0F172A]">Live</span>
            <span className="ml-1.5 text-slate-500">Content status</span>
          </div>
          <div>
            <span className="font-semibold text-[#0F172A]">JSON</span>
            <span className="ml-1.5 text-slate-500">Storage type</span>
          </div>
        </div>
      </div>

      {/* Content grid */}
      <div className="p-8">
        <h2 className="mb-5 text-sm font-semibold uppercase tracking-wider text-slate-400">
          Content Sections
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {sections.map((s) => {
            const Icon = s.icon;
            return (
              <Link
                key={s.href}
                href={s.href}
                className="group flex flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className={`inline-flex h-10 w-10 items-center justify-center rounded-lg ${s.color}`}>
                  <Icon className="h-5 w-5" />
                </div>
                <div className="mt-4 flex-1">
                  <div className="text-sm font-semibold text-[#0F172A]">{s.label}</div>
                  <p className="mt-1 text-xs text-slate-500">{s.description}</p>
                </div>
                <div className="mt-4 flex items-center gap-1 text-xs font-medium text-slate-400 transition-colors group-hover:text-[#0F172A]">
                  Edit <ArrowRight className="h-3 w-3" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
