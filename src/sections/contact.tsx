"use client";

import { useState } from "react";
import { MapPin, Mail, Phone, Building2, Send, CheckCircle2 } from "lucide-react";
import { Section } from "@/components/section";
import { Reveal } from "@/components/reveal";

type Location = { city: string; address: string };
type ContactContent = {
  eyebrow: string;
  title: string;
  description: string;
  email: string;
  emailSales?: string;
  phone: string;
  locations: Location[];
};

const DEFAULT_LOCATIONS: Location[] = [
  { city: "Dubai", address: "IFZA Business Park, Dubai, UAE" },
  { city: "London", address: "Canary Wharf, London, UK" },
  { city: "Dallas", address: "Legacy West, Plano, TX, USA" },
];

export function ContactSection({
  variant = "home",
  content,
}: {
  variant?: "home" | "page";
  content?: ContactContent;
}) {
  const [submitted, setSubmitted] = useState(false);
  const eyebrow = content?.eyebrow ?? "Contact Us";
  const title = content?.title ?? "Fast RFQs. Clear communication. Global execution.";
  const description = content?.description ?? "Send an inquiry and our team will respond with sourcing options, lead times, and documentation requirements.";
  const email = content?.email ?? "info@aerbavs.com";
  const emailSales = content?.emailSales;
  const phone = content?.phone ?? "+971 54 176 1644";
  const locations = content?.locations?.length ? content.locations : DEFAULT_LOCATIONS;

  return (
    <Section id={variant === "home" ? "contact" : undefined} className="bg-white">
      <div className="container">

        {/* Header */}
        <Reveal className="max-w-2xl">
          <span className="eyebrow">{eyebrow}</span>
          <h2 className="mt-5 text-balance text-3xl font-semibold leading-[1.15] tracking-tight text-[#0F172A] sm:text-[38px]">
            {title}
          </h2>
          <div className="accent-line mt-5" />
          <p className="mt-5 text-pretty text-[15px] leading-relaxed text-slate-600">
            {description}
          </p>
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">

          {/* Form */}
          <Reveal>
            <div className="aviation-card overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white shadow-card">
              {/* Card header */}
              <div className="border-b border-[#E2E8F0] px-8 py-5">
                <h3 className="text-sm font-semibold text-[#0F172A]">Submit an Inquiry</h3>
                <p className="mt-0.5 text-xs text-slate-500">We respond within 36 hours with sourcing options and lead times.</p>
              </div>

              <div className="px-8 py-7">
                {submitted ? (
                  <div className="flex flex-col items-center py-10 text-center">
                    <CheckCircle2 className="h-12 w-12 text-green-500" />
                    <p className="mt-4 text-base font-semibold text-[#0F172A]">Inquiry Received</p>
                    <p className="mt-1.5 text-sm text-slate-500">Our team will respond within 36 hours.</p>
                    <button onClick={() => setSubmitted(false)} className="mt-6 text-sm text-slate-400 underline hover:text-slate-700">Send another</button>
                  </div>
                ) : (
                  <form
                    className="space-y-5"
                    onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                  >
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label className="mb-1.5 block text-xs font-medium text-slate-700">Full Name *</label>
                        <input required placeholder="Your name" className="w-full rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:border-[#0F172A] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#0F172A]" />
                      </div>
                      <div>
                        <label className="mb-1.5 block text-xs font-medium text-slate-700">Company</label>
                        <input placeholder="Company name" className="w-full rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:border-[#0F172A] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#0F172A]" />
                      </div>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label className="mb-1.5 block text-xs font-medium text-slate-700">Email *</label>
                        <input required type="email" placeholder="Work email" className="w-full rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:border-[#0F172A] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#0F172A]" />
                      </div>
                      <div>
                        <label className="mb-1.5 block text-xs font-medium text-slate-700">Phone</label>
                        <input type="tel" placeholder="+1 (555) 000-0000" className="w-full rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:border-[#0F172A] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#0F172A]" />
                      </div>
                    </div>

                    <div>
                      <label className="mb-1.5 block text-xs font-medium text-slate-700">Inquiry *</label>
                      <textarea
                        required
                        rows={5}
                        placeholder="Part numbers, quantities, condition requirements, timeline, destination…"
                        className="w-full resize-none rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:border-[#0F172A] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#0F172A]"
                      />
                    </div>

                    <div className="flex flex-wrap items-center gap-3">
                      <button
                        type="submit"
                        className="inline-flex items-center gap-2 rounded-full bg-[#0F172A] px-6 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                      >
                        <Send className="h-4 w-4" /> Send Inquiry
                      </button>
                      <a
                        href={`mailto:${email}`}
                        className="inline-flex items-center gap-2 rounded-full border border-[#E2E8F0] px-6 py-2.5 text-sm font-medium text-slate-600 transition-colors hover:border-slate-300 hover:text-slate-900"
                      >
                        <Mail className="h-4 w-4" /> Email Directly
                      </a>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </Reveal>

          {/* Right panel */}
          <div className="space-y-5">

            {/* Contact info */}
            <Reveal>
              <div className="aviation-card rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-sm">
                <h3 className="text-sm font-semibold text-[#0F172A]">Direct Contact</h3>
                <div className="mt-4 space-y-3">
                  <a href={`mailto:${email}`} className="flex items-center gap-3 rounded-xl bg-[#F8FAFC] px-4 py-3 text-sm text-slate-600 transition-colors hover:bg-[#EAF6FF] hover:text-[#1D4ED8]">
                    <Mail className="h-4 w-4 shrink-0" /> {email}
                  </a>
                  {emailSales && (
                    <a href={`mailto:${emailSales}`} className="flex items-center gap-3 rounded-xl bg-[#F8FAFC] px-4 py-3 text-sm text-slate-600 transition-colors hover:bg-[#EAF6FF] hover:text-[#1D4ED8]">
                      <Mail className="h-4 w-4 shrink-0" /> {emailSales}
                    </a>
                  )}
                  <a href={`tel:${phone.replace(/\s/g, "")}`} className="flex items-center gap-3 rounded-xl bg-[#F8FAFC] px-4 py-3 text-sm text-slate-600 transition-colors hover:bg-[#FFF4EE] hover:text-[#FF7A3D]">
                    <Phone className="h-4 w-4 shrink-0" /> {phone}
                  </a>
                </div>
              </div>
            </Reveal>

            {/* Offices */}
            <Reveal>
              <div className="aviation-card rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-sm">
                <h3 className="text-sm font-semibold text-[#0F172A]">Global Offices</h3>
                <div className="mt-4 space-y-3">
                  {locations.map((loc) => (
                    <div key={loc.city} className="flex items-start gap-3 rounded-xl border border-[#E2E8F0] p-3.5">
                      <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#EAF6FF]">
                        <MapPin className="h-3.5 w-3.5 text-[#1D4ED8]" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-[#0F172A]">{loc.city}</p>
                        <p className="mt-0.5 text-xs text-slate-500">{loc.address}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Map placeholder */}
            <Reveal>
              <div className="aviation-card overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white shadow-sm">
                <div className="flex items-center justify-between px-5 py-4">
                  <span className="text-sm font-semibold text-[#0F172A]">Office Locations</span>
                  <div className="flex items-center gap-1.5 text-xs text-slate-400">
                    <Building2 className="h-3.5 w-3.5" /> {locations.length} {locations.length === 1 ? "office" : "offices"}
                  </div>
                </div>
                <div className="aspect-[16/9] bg-[#EAF6FF]">
                  <div className="flex h-full items-center justify-center">
                    <p className="text-xs text-slate-400">Embed your preferred map provider here</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </Section>
  );
}
