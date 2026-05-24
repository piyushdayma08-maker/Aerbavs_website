"use client";

import { useAdminContent, AdminPage, Field, TextInput, TextArea, Card, ArrayItem, AddButton } from "@/components/admin/form-helpers";

type WwdItem = { title: string; body: string; image?: string; imageAlt?: string };
type WwdContent = {
  eyebrow: string;
  title: string;
  description: string;
  items: WwdItem[];
  // Legacy fields kept for backward compat
  image?: string;
  imageAlt?: string;
  imageCaptionTitle?: string;
  imageCaptionBody?: string;
};

const DEFAULT: WwdContent = {
  eyebrow: "",
  title: "",
  description: "",
  items: [],
};

export default function WhatWeDoAdminPage() {
  const { data, setData, save, status, errorMsg } = useAdminContent<WwdContent>("whatWeDo", DEFAULT);

  function updateItem(i: number, key: keyof WwdItem, val: string) {
    const items = [...data.items];
    items[i] = { ...items[i], [key]: val };
    setData({ ...data, items });
  }

  return (
    <AdminPage
      title="What We Supply"
      description="Manage the 12 product category showcase grid"
      status={status}
      errorMsg={errorMsg}
      onSave={() => save(data)}
    >
      <div className="space-y-6">
        <Card title="Section Header">
          <div className="space-y-4">
            <Field label="Eyebrow"><TextInput value={data.eyebrow} onChange={(v) => setData({ ...data, eyebrow: v })} /></Field>
            <Field label="Title"><TextArea value={data.title} onChange={(v) => setData({ ...data, title: v })} rows={2} /></Field>
            <Field label="Description"><TextArea value={data.description} onChange={(v) => setData({ ...data, description: v })} rows={3} /></Field>
          </div>
        </Card>

        <Card title="Product Category Cards">
          <div className="space-y-3">
            {data.items.map((item, i) => (
              <ArrayItem
                key={i}
                index={i}
                title={item.title}
                onRemove={() => setData({ ...data, items: data.items.filter((_, idx) => idx !== i) })}
              >
                <Field label="Category Title">
                  <TextInput value={item.title} onChange={(v) => updateItem(i, "title", v)} />
                </Field>
                <Field label="Short Description (2 lines max)">
                  <TextArea value={item.body} onChange={(v) => updateItem(i, "body", v)} rows={2} />
                </Field>
                <Field
                  label="Category Image URL"
                  hint="Upload via Media Manager, then paste the URL here. Recommended: 800×600px product photo."
                >
                  <TextInput
                    value={item.image ?? ""}
                    onChange={(v) => updateItem(i, "image", v)}
                    placeholder="https://www.aerbavs.com/uploads/your-image.jpg"
                  />
                </Field>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                {item.image && (
                  <img
                    src={item.image}
                    alt={item.imageAlt ?? item.title}
                    className="h-28 w-full rounded-lg object-cover border border-slate-200"
                  />
                )}
                <Field label="Image Alt Text">
                  <TextInput
                    value={item.imageAlt ?? ""}
                    onChange={(v) => updateItem(i, "imageAlt", v)}
                    placeholder={item.title}
                  />
                </Field>
              </ArrayItem>
            ))}
            <AddButton
              onClick={() =>
                setData({
                  ...data,
                  items: [
                    ...data.items,
                    { title: "New Category", body: "", image: "", imageAlt: "" },
                  ],
                })
              }
              label="Add Product Category"
            />
          </div>
        </Card>
      </div>
    </AdminPage>
  );
}
