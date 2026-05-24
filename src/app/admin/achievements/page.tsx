"use client";

import { useAdminContent, AdminPage, Field, TextInput, TextArea, NumberInput, Card, SectionGrid, ArrayItem, AddButton } from "@/components/admin/form-helpers";

type Stat = { label: string; value: number; suffix: string };
type AchievementsContent = { eyebrow: string; title: string; description: string; stats: Stat[] };

const DEFAULT: AchievementsContent = { eyebrow: "", title: "", description: "", stats: [] };

export default function AchievementsAdminPage() {
  const { data, setData, save, status, errorMsg } = useAdminContent<AchievementsContent>("achievements", DEFAULT);

  function updateStat(i: number, key: keyof Stat, val: string | number) {
    const stats = [...data.stats];
    stats[i] = { ...stats[i], [key]: val };
    setData({ ...data, stats });
  }

  return (
    <AdminPage title="Achievements Section" description="Manage statistics and milestone counters" status={status} errorMsg={errorMsg} onSave={() => save(data)}>
      <div className="space-y-6">
        <Card title="Section Header">
          <div className="space-y-4">
            <Field label="Eyebrow"><TextInput value={data.eyebrow} onChange={(v) => setData({ ...data, eyebrow: v })} /></Field>
            <Field label="Title"><TextArea value={data.title} onChange={(v) => setData({ ...data, title: v })} rows={2} /></Field>
            <Field label="Description"><TextArea value={data.description} onChange={(v) => setData({ ...data, description: v })} rows={3} /></Field>
          </div>
        </Card>

        <Card title="Statistics">
          <div className="space-y-3">
            {data.stats.map((stat, i) => (
              <ArrayItem key={i} index={i} title={`${stat.value}${stat.suffix} — ${stat.label}`} onRemove={() => setData({ ...data, stats: data.stats.filter((_, idx) => idx !== i) })}>
                <SectionGrid>
                  <Field label="Label"><TextInput value={stat.label} onChange={(v) => updateStat(i, "label", v)} placeholder="Years of experience" /></Field>
                  <Field label="Suffix (e.g. +, %)"><TextInput value={stat.suffix} onChange={(v) => updateStat(i, "suffix", v)} placeholder="+" /></Field>
                </SectionGrid>
                <Field label="Value (number)"><NumberInput value={stat.value} onChange={(v) => updateStat(i, "value", v)} /></Field>
              </ArrayItem>
            ))}
            <AddButton onClick={() => setData({ ...data, stats: [...data.stats, { label: "New metric", value: 0, suffix: "+" }] })} label="Add Statistic" />
          </div>
        </Card>
      </div>
    </AdminPage>
  );
}
