"use client";

import { useAdminContent, AdminPage, Field, TextInput, TextArea, NumberInput, Card, SectionGrid, ArrayItem, AddButton } from "@/components/admin/form-helpers";

type Reason = { title: string; description: string; icon: string };
type Stat = { value: number; label: string; suffix: string };
type WhyContent = { eyebrow: string; title: string; description: string; stats: Stat[]; reasons: Reason[] };

const DEFAULT: WhyContent = { eyebrow: "", title: "", description: "", stats: [], reasons: [] };
const ICON_OPTIONS = ["Shield", "Globe2", "Headset", "Timer", "Handshake", "Sparkles", "CheckCircle", "Star", "Award"];

export default function WhyChooseUsAdminPage() {
  const { data, setData, save, status, errorMsg } = useAdminContent<WhyContent>("whyChooseUs", DEFAULT);

  function updateStat(i: number, key: keyof Stat, val: string | number) {
    const stats = [...data.stats];
    stats[i] = { ...stats[i], [key]: val };
    setData({ ...data, stats });
  }

  function updateReason(i: number, key: keyof Reason, val: string) {
    const reasons = [...data.reasons];
    reasons[i] = { ...reasons[i], [key]: val };
    setData({ ...data, reasons });
  }

  return (
    <AdminPage title="Why Choose Us" description="Edit differentiators and performance stats" status={status} errorMsg={errorMsg} onSave={() => save(data)}>
      <div className="space-y-6">
        <Card title="Section Header">
          <div className="space-y-4">
            <Field label="Eyebrow"><TextInput value={data.eyebrow} onChange={(v) => setData({ ...data, eyebrow: v })} /></Field>
            <Field label="Title"><TextArea value={data.title} onChange={(v) => setData({ ...data, title: v })} rows={2} /></Field>
            <Field label="Description"><TextArea value={data.description} onChange={(v) => setData({ ...data, description: v })} rows={3} /></Field>
          </div>
        </Card>

        <Card title="Performance Statistics">
          <div className="space-y-3">
            {data.stats.map((stat, i) => (
              <ArrayItem key={i} index={i} title={`${stat.value}${stat.suffix} — ${stat.label}`} onRemove={() => setData({ ...data, stats: data.stats.filter((_, idx) => idx !== i) })}>
                <SectionGrid>
                  <Field label="Label"><TextInput value={stat.label} onChange={(v) => updateStat(i, "label", v)} /></Field>
                  <Field label="Suffix"><TextInput value={stat.suffix} onChange={(v) => updateStat(i, "suffix", v)} placeholder="+" /></Field>
                </SectionGrid>
                <Field label="Value"><NumberInput value={stat.value} onChange={(v) => updateStat(i, "value", v)} /></Field>
              </ArrayItem>
            ))}
            <AddButton onClick={() => setData({ ...data, stats: [...data.stats, { value: 0, label: "New metric", suffix: "+" }] })} label="Add Stat" />
          </div>
        </Card>

        <Card title="Reason Cards">
          <div className="space-y-3">
            {data.reasons.map((reason, i) => (
              <ArrayItem key={i} index={i} title={reason.title} onRemove={() => setData({ ...data, reasons: data.reasons.filter((_, idx) => idx !== i) })}>
                <Field label="Title"><TextInput value={reason.title} onChange={(v) => updateReason(i, "title", v)} /></Field>
                <Field label="Description"><TextArea value={reason.description} onChange={(v) => updateReason(i, "description", v)} rows={2} /></Field>
                <Field label="Icon">
                  <select value={reason.icon} onChange={(e) => updateReason(i, "icon", e.target.value)} className="w-full rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-sm focus:border-[#0F172A] focus:outline-none">
                    {ICON_OPTIONS.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
                  </select>
                </Field>
              </ArrayItem>
            ))}
            <AddButton onClick={() => setData({ ...data, reasons: [...data.reasons, { title: "New Reason", description: "", icon: "Shield" }] })} label="Add Reason" />
          </div>
        </Card>
      </div>
    </AdminPage>
  );
}
