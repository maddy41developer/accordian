import React, { useState } from "react";

// Custom Accordion Card
function ModuleCard({ title, open, toggle, children, position }) {
  return (
    <div style={{ display: "flex", alignItems: "flex-start" }}>
      {/* Timeline Dot & Line */}
      <div style={{ position: "relative", width: 40, height: open ? 110 : 80, minWidth: 40 }}>
        {/* Timeline dot */}
        <div
          style={{
            width: 20,
            height: 20,
            background: "#B7F162",
            borderRadius: "50%",
            position: "absolute",
            left: 10,
            top: 0,
            zIndex: 2,
          }}
        />
        {/* Timeline line (dashed) */}
        <div
          style={{
            position: "absolute",
            left: 19,
            top: 20,
            width: 2,
            height: open ? 90 : 60, // taller when open
            borderLeft: "2px dashed #B7F162",
            transition: "height 0.3s",
            zIndex: 1,
          }}
        />
      </div>

      {/* Accordion Card */}
      <div
        style={{
          flex: 1,
          marginBottom: 16,
          background: "#fff",
          borderRadius: 8,
          boxShadow: "0 2px 6px #00000011",
          padding: 18,
          cursor: "pointer",
          transition: "box-shadow 0.2s",
        }}
        onClick={toggle}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <span
            style={{
              fontWeight: 600,
              fontSize: 22,
              color: "#2B2B2B",
              letterSpacing: 0.5
            }}
          >
            {title}
          </span>
          {/* Chevron Icon */}
          <span
            style={{
              marginLeft: "auto",
              transition: "transform 0.25s",
              transform: open ? "rotate(180deg)" : "rotate(0deg)",
            }}
          >
            ▼
          </span>
        </div>
        {/* Accordion Content */}
        {open && (
          <div style={{ marginTop: 20, fontSize: 19, color: "#444" }}>
            {children}
          </div>
        )}
      </div>
    </div>
  );
}

// Main Module Timeline Accordion Component
export default function VerticalTimelineAccordion() {
  const [active, setActive] = useState(null);

  // Sample module content
  const modules = [
    { title: "Module 1", content: "Module 1 Contents go here." },
    { title: "Module 2", content: "Module 2 Contents go here." },
    { title: "Module 3", content: "Module 3 Contents go here." },
    { title: "Module 4", content: "Module 4 Contents go here." },
    { title: "Module 5", content: "Module 5 Contents go here." },
  ];

  return (
    <div style={{
      background: "#FCFCFC",
      padding: 32,
      maxWidth: 750,
      margin: "60px auto"
    }}>
      {modules.map((m, idx) => (
        <ModuleCard
          title={m.title}
          open={active === idx}
          toggle={() => setActive(active === idx ? null : idx)}
          key={m.title}
          position={idx}
        >
          {m.content}
        </ModuleCard>
      ))}
    </div>
  );
}

