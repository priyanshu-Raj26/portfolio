import { ImageResponse } from "next/og";

export const alt = "Abstract vermilion artwork on a warm charcoal background";
export const size = {
  width: 1200,
  height: 630
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        overflow: "hidden",
        position: "relative",
        backgroundColor: "#15130F",
        backgroundImage:
          "linear-gradient(rgba(239,232,218,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(239,232,218,0.035) 1px, transparent 1px)",
        backgroundSize: "32px 32px"
      }}
    >
      <div
        style={{
          position: "absolute",
          width: 520,
          height: 520,
          right: 110,
          top: 55,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(217,72,43,0.5), rgba(217,72,43,0.08) 58%, transparent 72%)"
        }}
      />
      <div
        style={{
          position: "absolute",
          width: 260,
          height: 390,
          right: 240,
          top: 120,
          border: "2px solid #D9482B",
          background: "rgba(30,27,22,0.72)"
        }}
      />
      <div
        style={{
          position: "absolute",
          width: 18,
          height: 18,
          right: 230,
          bottom: 105,
          backgroundColor: "#EE5A3C"
        }}
      />
    </div>,
    size
  );
}
