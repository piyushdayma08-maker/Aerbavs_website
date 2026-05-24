"use client";

import { useAdminContent, AdminPage, Field, TextInput, TextArea, Card, SectionGrid, ArrayItem } from "@/components/admin/form-helpers";

type AboutCard = { title: string; description: string; image: string; alt: string };
type AboutContent = { eyebrow: string; title: string; description: string; ctaLabel: string; ctaHref: string; cards: AboutCard[] };

const DEFAULT: AboutContent = { eyebrow: "", title: "", description: "", ctaLabel: "", ctaHref: "", cards: [] };

export default function AboutAdminPage() {
  const { data, setData, save, status, errorMsg } = useAdminContent<AboutContent>("about", DEFAULT);

  function updateCard(i: number, key: keyof AboutCard, val: string) {
    setData((prev) => {
      const cards = [...prev.cards];
      cards[i] = { ...cards[i], [key]: val };
      return { ...prev, cards };
    });
  }

  return (
    <AdminPage title="About Section" description="Edit the company overview section" status={status} errorMsg={errorMsg} onSave={() => save(data)}>
      <div className="space-y-6">
        <Card title="Section Text">
          <div className="space-y-4">
            <Field label="Eyebrow Label">
              <TextInput value={data.eyebrow} onChange={(v) => setData({ ...data, eyebrow: v })} placeholder="About Us" />
            </Field>
            <Field label="Title">
              <TextArea value={data.title} onChange={(v) => setData({ ...data, title: v })} rows={2} />
            </Field>
            <Field label="Description">
              <TextArea value={data.description} onChange={(v) => setData({ ...data, description: v })} rows={4} />
            </Field>
          </div>
        </Card>

        <Card title="CTA Button">
          <SectionGrid>
            <Field label="Button Label">
              <TextInput value={data.ctaLabel} onChange={(v) => setData({ ...data, ctaLabel: v })} placeholder="Learn More About Us" />
            </Field>
            <Field label="Button URL">
              <TextInput value={data.ctaHref} onChange={(v) => setData({ ...data, ctaHref: v })} placeholder="/about" />
            </Field>
          </SectionGrid>
        </Card>

        <Card title="Feature Cards">
          <div className="space-y-3">
            {data.cards.map((card, i) => (
              <ArrayItem key={i} index={i} title={card.title || `Card ${i + 1}`} onRemove={() => setData({ ...data, cards: data.cards.filter((_, idx) => idx !== i) })}>
                <Field label="Title"><TextInput value={card.title} onChange={(v) => updateCard(i, "title", v)} /></Field>
                <Field label="Description"><TextArea value={card.description} onChange={(v) => updateCard(i, "description", v)} rows={2} /></Field>
                <Field label="Image URL"><TextInput value={card.image} onChange={(v) => updateCard(i, "image", v)} placeholder="https://…" /></Field>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                {card.image && <img src={card.image} alt={card.alt} className="h-24 w-full rounded-lg object-cover border border-slate-200" />}
                <Field label="Image Alt Text"><TextInput value={card.alt} onChange={(v) => updateCard(i, "alt", v)} /></Field>
              </ArrayItem>
            ))}
          </div>
        </Card>
      </div>
    </AdminPage>
  );
}
