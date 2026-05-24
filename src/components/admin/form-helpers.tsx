"use client";

import { useState, useEffect, useCallback } from "react";
import { Check, AlertCircle, Loader2, ChevronDown, ChevronUp, Trash2, Plus } from "lucide-react";

/* ── Hook for loading & saving section content ── */
export function useAdminContent<T>(sectionKey: string, defaultValue: T) {
  const [data, setData] = useState<T>(defaultValue);
  const [status, setStatus] = useState<"idle" | "loading" | "saving" | "saved" | "error">("loading");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    fetch("/api/content")
      .then((r) => r.json())
      .then((all) => {
        if (all[sectionKey]) setData(all[sectionKey] as T);
        setStatus("idle");
      })
      .catch(() => {
        setStatus("error");
        setErrorMsg("Failed to load content.");
      });
  }, [sectionKey]);

  const save = useCallback(async (payload: T) => {
    setStatus("saving");
    try {
      const res = await fetch("/api/content", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ [sectionKey]: payload }),
        credentials: "include",
      });
      if (res.ok) {
        setStatus("saved");
        setTimeout(() => setStatus("idle"), 2500);
      } else {
        setStatus("error");
        setErrorMsg("Save failed. Please try again.");
        setTimeout(() => setStatus("idle"), 3000);
      }
    } catch {
      setStatus("error");
      setErrorMsg("Network error.");
      setTimeout(() => setStatus("idle"), 3000);
    }
  }, [sectionKey]);

  return { data, setData, save, status, errorMsg };
}

/* ── Page shell ── */
export function AdminPage({
  title, description, status, errorMsg, onSave, children,
}: {
  title: string;
  description: string;
  status: string;
  errorMsg?: string;
  onSave: () => void;
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-full">
      <div className="border-b border-slate-200 bg-white px-8 py-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-xl font-semibold text-[#0F172A]">{title}</h1>
            <p className="mt-0.5 text-sm text-slate-500">{description}</p>
          </div>
          <button
            onClick={onSave}
            disabled={status === "saving" || status === "loading"}
            className="inline-flex items-center gap-2 rounded-lg bg-[#0F172A] px-5 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90 disabled:opacity-50"
          >
            {status === "saving" && <Loader2 className="h-4 w-4 animate-spin" />}
            {status === "saved" && <Check className="h-4 w-4" />}
            {status === "saving" ? "Saving…" : status === "saved" ? "Saved!" : "Save Changes"}
          </button>
        </div>
        {status === "error" && (
          <div className="mt-3 flex items-center gap-2 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">
            <AlertCircle className="h-4 w-4 shrink-0" />
            {errorMsg || "An error occurred."}
          </div>
        )}
      </div>
      <div className="p-8">
        {status === "loading" ? (
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <Loader2 className="h-4 w-4 animate-spin" /> Loading content…
          </div>
        ) : (
          children
        )}
      </div>
    </div>
  );
}

/* ── Field components ── */
export function Field({
  label, hint, children,
}: { label: string; hint?: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-slate-700">{label}</label>
      {hint && <p className="mb-2 text-xs text-slate-400">{hint}</p>}
      {children}
    </div>
  );
}

export function TextInput({
  value, onChange, placeholder,
}: { value: string; onChange: (v: string) => void; placeholder?: string }) {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:border-[#0F172A] focus:outline-none focus:ring-1 focus:ring-[#0F172A]"
    />
  );
}

export function TextArea({
  value, onChange, placeholder, rows = 3,
}: { value: string; onChange: (v: string) => void; placeholder?: string; rows?: number }) {
  return (
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      rows={rows}
      className="w-full resize-none rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:border-[#0F172A] focus:outline-none focus:ring-1 focus:ring-[#0F172A]"
    />
  );
}

export function NumberInput({
  value, onChange,
}: { value: number; onChange: (v: number) => void }) {
  return (
    <input
      type="number"
      value={value}
      onChange={(e) => onChange(Number(e.target.value))}
      className="w-full rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-900 focus:border-[#0F172A] focus:outline-none focus:ring-1 focus:ring-[#0F172A]"
    />
  );
}

export function Card({ title, children, className = "" }: { title?: string; children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-6 ${className}`}>
      {title && <h3 className="mb-5 text-sm font-semibold text-[#0F172A]">{title}</h3>}
      {children}
    </div>
  );
}

/* ── Collapsible array item ── */
export function ArrayItem({
  index, title, onRemove, children,
}: {
  index: number;
  title: string;
  onRemove: () => void;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(index === 0);
  return (
    <div className="rounded-lg border border-slate-200 bg-slate-50 overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between px-4 py-3 text-left text-sm font-medium text-slate-700 hover:bg-slate-100"
      >
        <span>{title}</span>
        <div className="flex items-center gap-2">
          <span
            onClick={(e) => { e.stopPropagation(); onRemove(); }}
            className="inline-flex h-6 w-6 items-center justify-center rounded text-slate-400 hover:bg-red-50 hover:text-red-600"
          >
            <Trash2 className="h-3.5 w-3.5" />
          </span>
          {open ? <ChevronUp className="h-4 w-4 text-slate-400" /> : <ChevronDown className="h-4 w-4 text-slate-400" />}
        </div>
      </button>
      {open && <div className="border-t border-slate-200 bg-white p-4 space-y-4">{children}</div>}
    </div>
  );
}

export function AddButton({ onClick, label = "Add Item" }: { onClick: () => void; label?: string }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex items-center gap-2 rounded-lg border border-dashed border-slate-300 px-4 py-2.5 text-sm text-slate-500 hover:border-[#0F172A] hover:text-[#0F172A] transition-colors"
    >
      <Plus className="h-4 w-4" />
      {label}
    </button>
  );
}

export function SectionGrid({ children }: { children: React.ReactNode }) {
  return <div className="grid gap-6 lg:grid-cols-2">{children}</div>;
}
