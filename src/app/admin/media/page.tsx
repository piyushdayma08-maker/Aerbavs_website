"use client";

import { useState, useEffect, useRef } from "react";
import { Upload, Copy, Trash2, Check, AlertCircle, Loader2 } from "lucide-react";

type MediaFile = { name: string; url: string };

export default function MediaAdminPage() {
  const [files, setFiles] = useState<MediaFile[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  async function loadFiles() {
    try {
      const res = await fetch("/api/media");
      const data = await res.json();
      setFiles(data.files ?? []);
    } catch {
      setError("Failed to load files.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => { loadFiles(); }, []);

  async function handleUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    setError("");
    const fd = new FormData();
    fd.append("file", file);
    try {
      const res = await fetch("/api/media", { method: "POST", body: fd });
      if (res.ok) {
        await loadFiles();
      } else {
        const d = await res.json();
        setError(d.error ?? "Upload failed.");
      }
    } catch {
      setError("Upload failed.");
    } finally {
      setUploading(false);
      if (inputRef.current) inputRef.current.value = "";
    }
  }

  async function handleDelete(name: string) {
    if (!confirm(`Delete ${name}?`)) return;
    try {
      await fetch("/api/media", { method: "DELETE", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ name }) });
      setFiles((prev) => prev.filter((f) => f.name !== name));
    } catch {
      setError("Delete failed.");
    }
  }

  function copyUrl(url: string) {
    navigator.clipboard.writeText(window.location.origin + url);
    setCopied(url);
    setTimeout(() => setCopied(""), 2000);
  }

  return (
    <div className="min-h-full">
      <div className="border-b border-slate-200 bg-white px-8 py-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-xl font-semibold text-[#0F172A]">Media Library</h1>
            <p className="mt-0.5 text-sm text-slate-500">Upload and manage website images (max 10MB per file)</p>
          </div>
          <div>
            <input ref={inputRef} type="file" accept="image/*" onChange={handleUpload} className="hidden" />
            <button
              onClick={() => inputRef.current?.click()}
              disabled={uploading}
              className="inline-flex items-center gap-2 rounded-lg bg-[#0F172A] px-5 py-2.5 text-sm font-medium text-white hover:opacity-90 disabled:opacity-50"
            >
              {uploading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Upload className="h-4 w-4" />}
              {uploading ? "Uploading…" : "Upload Image"}
            </button>
          </div>
        </div>
        {error && (
          <div className="mt-3 flex items-center gap-2 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">
            <AlertCircle className="h-4 w-4 shrink-0" /> {error}
          </div>
        )}
      </div>

      <div className="p-8">
        {loading ? (
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <Loader2 className="h-4 w-4 animate-spin" /> Loading media…
          </div>
        ) : files.length === 0 ? (
          <div className="flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-slate-200 bg-white py-20">
            <svg className="h-10 w-10 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2" strokeWidth="1.5"/><circle cx="8.5" cy="8.5" r="1.5" strokeWidth="1.5"/><path d="m21 15-5-5L5 21" strokeWidth="1.5"/></svg>
            <p className="mt-3 text-sm text-slate-500">No uploads yet</p>
            <p className="text-xs text-slate-400">Click Upload Image to get started</p>
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {files.map((file) => (
              <div key={file.name} className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={file.url} alt={file.name} className="aspect-video w-full object-cover" />
                <div className="p-3">
                  <p className="truncate text-xs text-slate-600" title={file.name}>{file.name}</p>
                  <div className="mt-2 flex items-center gap-1.5">
                    <button
                      onClick={() => copyUrl(file.url)}
                      className="flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-slate-100 py-1.5 text-xs font-medium text-slate-600 hover:bg-slate-200"
                    >
                      {copied === file.url ? <Check className="h-3 w-3 text-green-600" /> : <Copy className="h-3 w-3" />}
                      {copied === file.url ? "Copied!" : "Copy URL"}
                    </button>
                    <button
                      onClick={() => handleDelete(file.name)}
                      className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-red-50 text-red-500 hover:bg-red-100"
                    >
                      <Trash2 className="h-3 w-3" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
