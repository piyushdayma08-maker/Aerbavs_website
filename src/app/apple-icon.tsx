import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#1C3872",
          borderRadius: 40,
        }}
      >
        {/* AERBAVS A-mark */}
        <div style={{ position: "relative", display: "flex", width: 110, height: 120 }}>
          {/* Left leg */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              width: 34,
              height: 120,
              background: "white",
              clipPath: "polygon(28% 0%, 72% 0%, 100% 100%, 0% 100%)",
            }}
          />
          {/* Right leg */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              right: 0,
              width: 34,
              height: 120,
              background: "white",
              clipPath: "polygon(28% 0%, 72% 0%, 100% 100%, 0% 100%)",
            }}
          />
          {/* Crossbar */}
          <div
            style={{
              position: "absolute",
              top: "44%",
              left: "16%",
              right: "16%",
              height: 14,
              background: "white",
              borderRadius: 4,
            }}
          />
          {/* Small gear dot at base — represents the cog in the logo */}
          <div
            style={{
              position: "absolute",
              bottom: -6,
              left: "50%",
              transform: "translateX(-50%)",
              width: 16,
              height: 16,
              background: "#6B7280",
              borderRadius: "50%",
            }}
          />
        </div>
      </div>
    ),
    size
  );
}
