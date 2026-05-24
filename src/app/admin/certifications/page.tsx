"use client";

import { useAdminContent, AdminPage, Field, TextInput, TextArea, Card, ArrayItem, AddButton } from "@/components/admin/form-helpers";

type CertItem = { title: string; description: string; icon: string };
type CertContent = { eyebrow: string; title: string; description: string; items: CertItem[] };

const DEFAULT: CertContent = { eyebrow: "", title: "", description: "", items: [] };
const ICON_OPTIONS = ["ShieldCheck", "FileCheck", "BadgeCheck", "Globe", "Award", "Star", "CheckCircle", "Lock"];

export default function CertificationsAdminPage() {
  const { data, setData, save, status, errorMsg } = useAdminContent<CertContent>("certifications", DEFAULT);

  function updateItem(i: number, key: keyof CertItem, val: string) {
    const items = [...data.items];
    items[i] = { ...items[i], [key]: val };
    setData({ ...data, items });
  }

  return (
    <AdminPage title="Certifications Section" description="Manage compliance certifications and standards" status={status} errorMsg={errorMsg} onSave={() => save(data)}>
      <div className="space-y-6">
        <Card title="Section Header">
          <div className="space-y-4">
            <Field label="Eyebrow"><TextInput value={data.eyebrow} onChange={(v) => setData({ ...data, eyebrow: v })} /></Field>
            <Field label="Title"><TextArea value={data.title} onChange={(v) => setData({ ...data, title: v })} rows={2} /></Field>
            <Field label="Description"><TextArea value={data.description} onChange={(v) => setData({ ...data, description: v })} rows={3} /></Field>
          </div>
        </Card>

        <Card title="Certification Items">
          <div className="space-y-3">
            {data.items.map((item, i) => (
              <ArrayItem key={i} index={i} title={item.title} onRemove={() => setData({ ...data, items: data.items.filter((_, idx) => idx !== i) })}>
                <Field label="Title"><TextInput value={item.title} onChange={(v) => updateItem(i, "title", v)} /></Field>
                <Field label="Description"><TextArea value={item.description} onChange={(v) => updateItem(i, "description", v)} rows={3} /></Field>
                <Field label="Icon">
                  <select value={item.icon} onChange={(e) => updateItem(i, "icon", e.target.value)} className="w-full rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-sm focus:border-[#0F172A] focus:outline-none">
                    {ICON_OPTIONS.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
                  </select>
                </Field>
              </ArrayItem>
            ))}
            <AddButton onClick={() => setData({ ...data, items: [...data.items, { title: "New Certification", description: "", icon: "ShieldCheck" }] })} label="Add Certification" />
          </div>
        </Card>
      </div>
    </AdminPage>
  );
}
