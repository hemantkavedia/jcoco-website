import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Jain Center of Central Ohio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#d4711a",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "60px",
        }}
      >
        <div
          style={{
            color: "white",
            fontSize: 64,
            fontWeight: "bold",
            textAlign: "center",
            lineHeight: 1.2,
            marginBottom: 20,
          }}
        >
          Jain Center of Central Ohio
        </div>
        <div
          style={{
            color: "rgba(255,255,255,0.85)",
            fontSize: 28,
            textAlign: "center",
          }}
        >
          JCOCO · Lewis Center, OH · Founded 1991
        </div>
      </div>
    ),
    size
  );
}
