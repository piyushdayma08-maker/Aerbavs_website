"use client";

import { useAdminContent, AdminPage, Field, TextInput, TextArea, Card, SectionGrid, ArrayItem, AddButton } from "@/components/admin/form-helpers";

type Hub = { city: string; code: string; region: string };
type GlobalOpsContent = { eyebrow: string; title: string; description: string; coverageStat: string; coverageLabel: string; hubs: Hub[]; countries: string[] };

const DEFAULT: GlobalOpsContent = { eyebrow: "", title: "", description: "", coverageStat: "40+", coverageLabel: "Countries served", hubs: [], countries: [] };

export default function GlobalOperationsAdminPage() {
  const { data, setData, save, status, errorMsg } = useAdminContent<GlobalOpsContent>("globalOperations", DEFAULT);

  function updateHub(i: number, key: keyof Hub, val: string) {
    const hubs = [...data.hubs];
    hubs[i] = { ...hubs[i], [key]: val };
    setData({ ...data, hubs });
  }

  return (
    <AdminPage title="Global Operations" description="Manage hub locations and coverage statistics" status={status} errorMsg={errorMsg} onSave={() => save(data)}>
      <div className="space-y-6">
        <Card title="Section Header">
          <div className="space-y-4">
            <Field label="Eyebrow"><TextInput value={data.eyebrow} onChange={(v) => setData({ ...data, eyebrow: v })} /></Field>
            <Field label="Title"><TextArea value={data.title} onChange={(v) => setData({ ...data, title: v })} rows={2} /></Field>
            <Field label="Description"><TextArea value={data.description} onChange={(v) => setData({ ...data, description: v })} rows={3} /></Field>
          </div>
        </Card>

        <Card title="Coverage Statistics">
          <SectionGrid>
            <Field label="Coverage Number (e.g. 40+)"><TextInput value={data.coverageStat} onChange={(v) => setData({ ...data, coverageStat: v })} /></Field>
            <Field label="Coverage Label"><TextInput value={data.coverageLabel} onChange={(v) => setData({ ...data, coverageLabel: v })} /></Field>
          </SectionGrid>
        </Card>

        <Card title="Hub Locations">
          <div className="space-y-3">
            {data.hubs.map((hub, i) => (
              <ArrayItem key={i} index={i} title={`${hub.city} (${hub.code})`} onRemove={() => setData({ ...data, hubs: data.hubs.filter((_, idx) => idx !== i) })}>
                <div className="grid gap-4 sm:grid-cols-3">
                  <Field label="City"><TextInput value={hub.city} onChange={(v) => updateHub(i, "city", v)} /></Field>
                  <Field label="IATA Code"><TextInput value={hub.code} onChange={(v) => updateHub(i, "code", v)} placeholder="DXB" /></Field>
                  <Field label="Region"><TextInput value={hub.region} onChange={(v) => updateHub(i, "region", v)} placeholder="Middle East" /></Field>
                </div>
              </ArrayItem>
            ))}
            <AddButton onClick={() => setData({ ...data, hubs: [...data.hubs, { city: "", code: "", region: "" }] })} label="Add Hub" />
          </div>
        </Card>

        <Card title="Countries Coverage">
          <Field label="Countries (one per line)">
            <textarea
              value={data.countries.join("\n")}
              onChange={(e) => setData({ ...data, countries: e.target.value.split("\n").map(s => s.trim()).filter(Boolean) })}
              rows={6}
              className="w-full resize-none rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:border-[#0F172A] focus:outline-none focus:ring-1 focus:ring-[#0F172A]"
              placeholder="United States&#10;United Kingdom&#10;UAE"
            />
          </Field>
        </Card>
      </div>
    </AdminPage>
  );
}
