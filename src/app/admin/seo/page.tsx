"use client";

import { useAdminContent, AdminPage, Field, TextInput, TextArea, Card, SectionGrid } from "@/components/admin/form-helpers";

type SeoContent = { siteName: string; legalName: string; title: string; description: string; url: string; ogImage: string };

const DEFAULT: SeoContent = { siteName: "", legalName: "", title: "", description: "", url: "", ogImage: "" };

export default function SeoAdminPage() {
  const { data, setData, save, status, errorMsg } = useAdminContent<SeoContent>("seo", DEFAULT);

  return (
    <AdminPage title="SEO & Metadata" description="Manage site-wide SEO settings and metadata" status={status} errorMsg={errorMsg} onSave={() => save(data)}>
      <div className="space-y-6">
        <Card title="Site Identity">
          <div className="space-y-4">
            <SectionGrid>
              <Field label="Site Name"><TextInput value={data.siteName} onChange={(v) => setData({ ...data, siteName: v })} placeholder="AeroTrade Global" /></Field>
              <Field label="Legal Name"><TextInput value={data.legalName} onChange={(v) => setData({ ...data, legalName: v })} placeholder="AeroTrade Global Aviation Trading Co." /></Field>
            </SectionGrid>
            <Field label="Website URL"><TextInput value={data.url} onChange={(v) => setData({ ...data, url: v })} placeholder="https://yourdomain.com" /></Field>
          </div>
        </Card>

        <Card title="Default Metadata">
          <div className="space-y-4">
            <Field label="Default Page Title" hint="Shown in browser tab and search results">
              <TextInput value={data.title} onChange={(v) => setData({ ...data, title: v })} placeholder="AeroTrade Global | Aviation Trading" />
            </Field>
            <Field label="Meta Description" hint="Used in search result snippets (150–160 characters recommended)">
              <TextArea value={data.description} onChange={(v) => setData({ ...data, description: v })} rows={3} placeholder="Premium aviation trading and aerospace procurement solutions…" />
              <p className="mt-1 text-xs text-slate-400">{data.description.length} characters</p>
            </Field>
            <Field label="OG Image URL" hint="Social media share image (1200×630px recommended)">
              <TextInput value={data.ogImage} onChange={(v) => setData({ ...data, ogImage: v })} placeholder="/opengraph-image" />
            </Field>
          </div>
        </Card>

        <div className="rounded-xl border border-amber-200 bg-amber-50 p-5">
          <p className="text-sm font-medium text-amber-800">Note on SEO changes</p>
          <p className="mt-1 text-sm text-amber-700">
            After saving SEO metadata, rebuild or restart the Next.js server for changes to take effect in page{" "}
            <code className="rounded bg-amber-100 px-1 text-xs">{"<head>"}</code> tags.
          </p>
        </div>
      </div>
    </AdminPage>
  );
}
