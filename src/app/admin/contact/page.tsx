"use client";

import { useAdminContent, AdminPage, Field, TextInput, TextArea, Card, SectionGrid, ArrayItem, AddButton } from "@/components/admin/form-helpers";

type Location = { city: string; address: string };
type ContactContent = { eyebrow: string; title: string; description: string; email: string; phone: string; locations: Location[] };

const DEFAULT: ContactContent = { eyebrow: "", title: "", description: "", email: "", phone: "", locations: [] };

export default function ContactAdminPage() {
  const { data, setData, save, status, errorMsg } = useAdminContent<ContactContent>("contact", DEFAULT);

  function updateLocation(i: number, key: keyof Location, val: string) {
    const locations = [...data.locations];
    locations[i] = { ...locations[i], [key]: val };
    setData({ ...data, locations });
  }

  return (
    <AdminPage title="Contact Section" description="Manage contact information and office locations" status={status} errorMsg={errorMsg} onSave={() => save(data)}>
      <div className="space-y-6">
        <Card title="Section Header">
          <div className="space-y-4">
            <Field label="Eyebrow"><TextInput value={data.eyebrow} onChange={(v) => setData({ ...data, eyebrow: v })} /></Field>
            <Field label="Title"><TextArea value={data.title} onChange={(v) => setData({ ...data, title: v })} rows={2} /></Field>
            <Field label="Description"><TextArea value={data.description} onChange={(v) => setData({ ...data, description: v })} rows={3} /></Field>
          </div>
        </Card>

        <Card title="Contact Details">
          <SectionGrid>
            <Field label="Email Address"><TextInput value={data.email} onChange={(v) => setData({ ...data, email: v })} placeholder="sales@example.com" /></Field>
            <Field label="Phone Number"><TextInput value={data.phone} onChange={(v) => setData({ ...data, phone: v })} placeholder="+1 (000) 000-0000" /></Field>
          </SectionGrid>
        </Card>

        <Card title="Office Locations">
          <div className="space-y-3">
            {data.locations.map((loc, i) => (
              <ArrayItem key={i} index={i} title={loc.city || `Location ${i + 1}`} onRemove={() => setData({ ...data, locations: data.locations.filter((_, idx) => idx !== i) })}>
                <SectionGrid>
                  <Field label="City"><TextInput value={loc.city} onChange={(v) => updateLocation(i, "city", v)} /></Field>
                  <Field label="Address"><TextInput value={loc.address} onChange={(v) => updateLocation(i, "address", v)} /></Field>
                </SectionGrid>
              </ArrayItem>
            ))}
            <AddButton onClick={() => setData({ ...data, locations: [...data.locations, { city: "", address: "" }] })} label="Add Location" />
          </div>
        </Card>
      </div>
    </AdminPage>
  );
}
