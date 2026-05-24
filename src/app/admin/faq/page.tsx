"use client";

import { useAdminContent, AdminPage, Field, TextInput, TextArea, Card, ArrayItem, AddButton } from "@/components/admin/form-helpers";

type FaqItem = { q: string; a: string };
type FaqContent = { eyebrow: string; title: string; description: string; items: FaqItem[] };

const DEFAULT: FaqContent = { eyebrow: "", title: "", description: "", items: [] };

export default function FaqAdminPage() {
  const { data, setData, save, status, errorMsg } = useAdminContent<FaqContent>("faq", DEFAULT);

  function updateItem(i: number, key: keyof FaqItem, val: string) {
    const items = [...data.items];
    items[i] = { ...items[i], [key]: val };
    setData({ ...data, items });
  }

  function addItem() {
    setData({ ...data, items: [...data.items, { q: "New Question?", a: "Answer goes here." }] });
  }

  return (
    <AdminPage title="FAQ Section" description="Manage frequently asked questions" status={status} errorMsg={errorMsg} onSave={() => save(data)}>
      <div className="space-y-6">
        <Card title="Section Header">
          <div className="space-y-4">
            <Field label="Eyebrow"><TextInput value={data.eyebrow} onChange={(v) => setData({ ...data, eyebrow: v })} /></Field>
            <Field label="Title"><TextArea value={data.title} onChange={(v) => setData({ ...data, title: v })} rows={2} /></Field>
            <Field label="Description"><TextArea value={data.description} onChange={(v) => setData({ ...data, description: v })} rows={3} /></Field>
          </div>
        </Card>

        <Card title="FAQ Items">
          <div className="space-y-3">
            {data.items.map((item, i) => (
              <ArrayItem key={i} index={i} title={item.q || `Question ${i + 1}`} onRemove={() => setData({ ...data, items: data.items.filter((_, idx) => idx !== i) })}>
                <Field label="Question"><TextInput value={item.q} onChange={(v) => updateItem(i, "q", v)} /></Field>
                <Field label="Answer"><TextArea value={item.a} onChange={(v) => updateItem(i, "a", v)} rows={4} /></Field>
              </ArrayItem>
            ))}
            <AddButton onClick={addItem} label="Add FAQ Item" />
          </div>
        </Card>
      </div>
    </AdminPage>
  );
}
