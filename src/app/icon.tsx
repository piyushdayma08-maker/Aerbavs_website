import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
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
          borderRadius: 14,
        }}
      >
        {/* Stylised "A" mark — two legs + crossbar */}
        <div style={{ position: "relative", display: "flex", width: 40, height: 44 }}>
          {/* Left leg */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              width: 12,
              height: 44,
              background: "white",
              clipPath: "polygon(30% 0%, 70% 0%, 100% 100%, 0% 100%)",
            }}
          />
          {/* Right leg */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              right: 0,
              width: 12,
              height: 44,
              background: "white",
              clipPath: "polygon(30% 0%, 70% 0%, 100% 100%, 0% 100%)",
            }}
          />
          {/* Crossbar */}
          <div
            style={{
              position: "absolute",
              top: "42%",
              left: "18%",
              right: "18%",
              height: 5,
              background: "white",
              borderRadius: 2,
            }}
          />
        </div>
      </div>
    ),
    size
  );
}
