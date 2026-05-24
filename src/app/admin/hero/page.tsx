"use client";

import { useAdminContent, AdminPage, Field, TextInput, TextArea, Card, ArrayItem, AddButton } from "@/components/admin/form-helpers";

type Slide = { id: string; src: string; alt: string; eyebrow: string; headline: string; subheading: string };
type HeroContent = { slides: Slide[] };

const DEFAULT: HeroContent = { slides: [] };

export default function HeroAdminPage() {
  const { data, setData, save, status, errorMsg } = useAdminContent<HeroContent>("hero", DEFAULT);

  function updateSlide(i: number, key: keyof Slide, val: string) {
    setData((prev) => {
      const slides = [...prev.slides];
      slides[i] = { ...slides[i], [key]: val };
      return { ...prev, slides };
    });
  }

  function removeSlide(i: number) {
    setData((prev) => ({ ...prev, slides: prev.slides.filter((_, idx) => idx !== i) }));
  }

  function addSlide() {
    const newSlide: Slide = {
      id: Date.now().toString(),
      src: "",
      alt: "",
      eyebrow: "New Slide",
      headline: "Headline Text",
      subheading: "Subheading text goes here.",
    };
    setData((prev) => ({ ...prev, slides: [...prev.slides, newSlide] }));
  }

  return (
    <AdminPage
      title="Hero Slider"
      description="Manage the full-width cinematic hero slides (1730×490)"
      status={status}
      errorMsg={errorMsg}
      onSave={() => save(data)}
    >
      <div className="space-y-4">
        <p className="text-xs text-slate-500">
          Use aviation photography URLs (Unsplash, licensed imagery, or uploaded files from Media Library). Recommended size: 2400×700+.
        </p>

        {data.slides.map((slide, i) => (
          <ArrayItem
            key={slide.id}
            index={i}
            title={`Slide ${i + 1}: ${slide.eyebrow || "Untitled"}`}
            onRemove={() => removeSlide(i)}
          >
            <Field label="Image URL" hint="Full URL to the aviation photo">
              <TextInput value={slide.src} onChange={(v) => updateSlide(i, "src", v)} placeholder="https://images.unsplash.com/…" />
            </Field>
            {slide.src && (
              <div className="overflow-hidden rounded-lg border border-slate-200">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={slide.src} alt={slide.alt || "Preview"} className="h-32 w-full object-cover" />
              </div>
            )}
            <Field label="Image Alt Text">
              <TextInput value={slide.alt} onChange={(v) => updateSlide(i, "alt", v)} placeholder="Descriptive alt text for accessibility" />
            </Field>
            <Field label="Eyebrow Label" hint="Small uppercase label above headline">
              <TextInput value={slide.eyebrow} onChange={(v) => updateSlide(i, "eyebrow", v)} placeholder="e.g. Global Trading" />
            </Field>
            <Field label="Headline">
              <TextArea value={slide.headline} onChange={(v) => updateSlide(i, "headline", v)} placeholder="Main slide headline" rows={2} />
            </Field>
            <Field label="Subheading">
              <TextArea value={slide.subheading} onChange={(v) => updateSlide(i, "subheading", v)} placeholder="Supporting text beneath the headline" rows={3} />
            </Field>
          </ArrayItem>
        ))}

        <AddButton onClick={addSlide} label="Add Slide" />
      </div>
    </AdminPage>
  );
}
