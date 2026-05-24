import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(135deg, #0A1833 0%, #1C3872 60%, #0E2455 100%)",
          color: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          fontFamily: "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto",
          position: "relative",
        }}
      >
        {/* Subtle accent overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: 400,
            height: 400,
            background: "radial-gradient(circle at center, rgba(255,255,255,0.06), transparent 70%)",
            borderRadius: "50%",
          }}
        />

        {/* Top: Brand name */}
        <div style={{ display: "flex", flexDirection: "row", gap: 16, alignItems: "center" }}>
          <div
            style={{
              padding: "6px 20px",
              borderRadius: 8,
              border: "1px solid rgba(255,255,255,0.25)",
              background: "rgba(255,255,255,0.10)",
              fontSize: 15,
              fontWeight: 600,
              letterSpacing: 4,
            }}
          >
            AERBAVS
          </div>
          <div style={{ fontSize: 14, opacity: 0.65, letterSpacing: 1 }}>
            MRO PARTS &amp; LEASING FZCO
          </div>
        </div>

        {/* Center: Main headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div
            style={{
              fontSize: 58,
              fontWeight: 800,
              letterSpacing: -1.5,
              lineHeight: 1.08,
              maxWidth: 800,
            }}
          >
            Aviation Parts Supplier &amp; Aircraft Leasing — Dubai UAE
          </div>
          <div
            style={{
              fontSize: 24,
              opacity: 0.78,
              maxWidth: 780,
              lineHeight: 1.4,
              fontWeight: 400,
            }}
          >
            Supplying the skies since 2020 — certified parts, aviation consumables, tools &amp; leasing from Dubai Silicon Oasis.
          </div>
        </div>

        {/* Bottom: Tagline + URL */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-end",
            fontSize: 16,
            opacity: 0.72,
          }}
        >
          <div style={{ display: "flex", gap: 32 }}>
            <span>Certified Components</span>
            <span>·</span>
            <span>24/7 AOG Support</span>
            <span>·</span>
            <span>Global Logistics</span>
          </div>
          <div style={{ letterSpacing: 0.5 }}>
            {siteConfig.url.replace(/^https?:\/\//, "")}
          </div>
        </div>
      </div>
    ),
    size
  );
}
