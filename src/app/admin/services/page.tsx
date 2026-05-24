"use client";

import { useAdminContent, AdminPage, Field, TextInput, TextArea, Card, ArrayItem, AddButton } from "@/components/admin/form-helpers";

type ServiceItem = { title: string; description: string; icon: string; features: string[] };
type ServicesContent = { eyebrow: string; title: string; description: string; items: ServiceItem[] };

const DEFAULT: ServicesContent = { eyebrow: "", title: "", description: "", items: [] };

const ICON_OPTIONS = ["Plane", "Box", "ShieldCheck", "Truck", "Wrench", "Handshake", "Globe", "Briefcase", "Settings", "Package"];

export default function ServicesAdminPage() {
  const { data, setData, save, status, errorMsg } = useAdminContent<ServicesContent>("services", DEFAULT);

  function updateItem(i: number, key: keyof ServiceItem, val: string | string[]) {
    const items = [...data.items];
    items[i] = { ...items[i], [key]: val };
    setData({ ...data, items });
  }

  function updateFeature(itemIdx: number, featIdx: number, val: string) {
    const items = [...data.items];
    const features = [...items[itemIdx].features];
    features[featIdx] = val;
    items[itemIdx] = { ...items[itemIdx], features };
    setData({ ...data, items });
  }

  function addFeature(i: number) {
    const items = [...data.items];
    items[i] = { ...items[i], features: [...items[i].features, "New feature"] };
    setData({ ...data, items });
  }

  function removeFeature(itemIdx: number, featIdx: number) {
    const items = [...data.items];
    items[itemIdx] = { ...items[itemIdx], features: items[itemIdx].features.filter((_, fi) => fi !== featIdx) };
    setData({ ...data, items });
  }

  function addService() {
    setData({ ...data, items: [...data.items, { title: "New Service", description: "", icon: "Plane", features: ["Feature one", "Feature two"] }] });
  }

  return (
    <AdminPage title="Services Section" description="Manage enterprise service offerings" status={status} errorMsg={errorMsg} onSave={() => save(data)}>
      <div className="space-y-6">
        <Card title="Section Header">
          <div className="space-y-4">
            <Field label="Eyebrow"><TextInput value={data.eyebrow} onChange={(v) => setData({ ...data, eyebrow: v })} /></Field>
            <Field label="Title"><TextArea value={data.title} onChange={(v) => setData({ ...data, title: v })} rows={2} /></Field>
            <Field label="Description"><TextArea value={data.description} onChange={(v) => setData({ ...data, description: v })} rows={3} /></Field>
          </div>
        </Card>

        <Card title="Services">
          <div className="space-y-3">
            {data.items.map((item, i) => (
              <ArrayItem key={i} index={i} title={item.title} onRemove={() => setData({ ...data, items: data.items.filter((_, idx) => idx !== i) })}>
                <Field label="Service Title"><TextInput value={item.title} onChange={(v) => updateItem(i, "title", v)} /></Field>
                <Field label="Description"><TextArea value={item.description} onChange={(v) => updateItem(i, "description", v)} rows={3} /></Field>
                <Field label="Icon Name" hint={`Options: ${ICON_OPTIONS.join(", ")}`}>
                  <select
                    value={item.icon}
                    onChange={(e) => updateItem(i, "icon", e.target.value)}
                    className="w-full rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-sm focus:border-[#0F172A] focus:outline-none"
                  >
                    {ICON_OPTIONS.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
                  </select>
                </Field>
                <Field label="Feature Bullets">
                  <div className="space-y-2">
                    {item.features.map((feat, fi) => (
                      <div key={fi} className="flex items-center gap-2">
                        <input
                          type="text"
                          value={feat}
                          onChange={(e) => updateFeature(i, fi, e.target.value)}
                          className="flex-1 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm focus:border-[#0F172A] focus:outline-none"
                        />
                        <button onClick={() => removeFeature(i, fi)} className="text-slate-400 hover:text-red-500 text-xs px-2 py-1">✕</button>
                      </div>
                    ))}
                    <AddButton onClick={() => addFeature(i)} label="Add feature" />
                  </div>
                </Field>
              </ArrayItem>
            ))}
            <AddButton onClick={addService} label="Add Service" />
          </div>
        </Card>
      </div>
    </AdminPage>
  );
}
