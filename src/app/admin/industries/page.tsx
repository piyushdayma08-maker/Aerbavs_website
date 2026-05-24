"use client";

import { useAdminContent, AdminPage, Field, TextInput, TextArea, Card, ArrayItem, AddButton } from "@/components/admin/form-helpers";

type IndustryItem = { title: string; description: string; icon: string; image: string; alt: string };
type IndustriesContent = { eyebrow: string; title: string; description: string; items: IndustryItem[] };

const DEFAULT: IndustriesContent = { eyebrow: "", title: "", description: "", items: [] };

const ICON_OPTIONS = ["Building2", "Shield", "Package", "Crown", "Factory", "Plane", "Globe", "Truck"];

export default function IndustriesAdminPage() {
  const { data, setData, save, status, errorMsg } = useAdminContent<IndustriesContent>("industries", DEFAULT);

  function updateItem(i: number, key: keyof IndustryItem, val: string) {
    const items = [...data.items];
    items[i] = { ...items[i], [key]: val };
    setData({ ...data, items });
  }

  function addItem() {
    setData({ ...data, items: [...data.items, { title: "New Industry", description: "", icon: "Building2", image: "", alt: "" }] });
  }

  return (
    <AdminPage title="Industries Section" description="Manage served industry cards with aviation imagery" status={status} errorMsg={errorMsg} onSave={() => save(data)}>
      <div className="space-y-6">
        <Card title="Section Header">
          <div className="space-y-4">
            <Field label="Eyebrow"><TextInput value={data.eyebrow} onChange={(v) => setData({ ...data, eyebrow: v })} /></Field>
            <Field label="Title"><TextArea value={data.title} onChange={(v) => setData({ ...data, title: v })} rows={2} /></Field>
            <Field label="Description"><TextArea value={data.description} onChange={(v) => setData({ ...data, description: v })} rows={3} /></Field>
          </div>
        </Card>

        <Card title="Industry Cards">
          <div className="space-y-3">
            {data.items.map((item, i) => (
              <ArrayItem key={i} index={i} title={item.title} onRemove={() => setData({ ...data, items: data.items.filter((_, idx) => idx !== i) })}>
                <Field label="Industry Title"><TextInput value={item.title} onChange={(v) => updateItem(i, "title", v)} /></Field>
                <Field label="Description"><TextArea value={item.description} onChange={(v) => updateItem(i, "description", v)} rows={3} /></Field>
                <Field label="Background Image URL" hint="Aviation photo for the card background">
                  <TextInput value={item.image} onChange={(v) => updateItem(i, "image", v)} placeholder="https://images.unsplash.com/…" />
                </Field>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                {item.image && <img src={item.image} alt={item.alt} className="h-24 w-full rounded-lg object-cover border border-slate-200" />}
                <Field label="Image Alt Text"><TextInput value={item.alt} onChange={(v) => updateItem(i, "alt", v)} /></Field>
                <Field label="Icon">
                  <select value={item.icon} onChange={(e) => updateItem(i, "icon", e.target.value)} className="w-full rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-sm focus:border-[#0F172A] focus:outline-none">
                    {ICON_OPTIONS.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
                  </select>
                </Field>
              </ArrayItem>
            ))}
            <AddButton onClick={addItem} label="Add Industry" />
          </div>
        </Card>
      </div>
    </AdminPage>
  );
}
