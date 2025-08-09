export default function StandWithUkraine() {
  return (
    <div style={{ textAlign: "flex", display: "flex",  backgroundColor: "#1f2937", justifyContent: "center", alignItems: "center", padding: "0.5rem 0" }}>
      <a
        href="https://standwithukraine.org"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.5rem", // gap-2 ~ 8px
          fontSize: "0.875rem", // text-sm
          color: "white",
          padding: "0.25rem 0.75rem",
          textAlign: "center",
          textDecoration: "none",
          // transition: "background-color 0.3s",
          cursor: "pointer",
        }}
        // onMouseEnter={e => e.currentTarget.style.backgroundColor = "#374151"} // hover:bg-gray-700
        // onMouseLeave={e => e.currentTarget.style.backgroundColor = "#1f2937"}
      >
        <span style={{ fontWeight: 600 /* font-semibold */ }}>
          Support Ukraine
        </span>
        <span
          style={{
            width: "1.25rem", // w-5 ~ 20px
            height: "0.75rem", // h-3 ~ 12px
            flexShrink: 0,
            overflow: "hidden",
            borderRadius: "0.125rem", // rounded-sm
            border: "1px solid white",
            display: "inline-block",
          }}
        >
          <span
            style={{
              display: "block",
              width: "100%",
              height: "50%",
              backgroundColor: "#0057b7",
            }}
          />
          <span
            style={{
              display: "block",
              width: "100%",
              height: "50%",
              backgroundColor: "#ffd500",
            }}
          />
        </span>
        <span style={{ marginLeft: "0.5rem" }}>
          Help Provide Humanitarian Aid to Ukraine.
        </span>
      </a>
    </div>
  );
}
