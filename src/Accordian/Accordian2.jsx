import React, { useState } from "react";
import "./Accordian2.css";

function ModuleCard({data}) {
//   console.log('title',title,'open',open,'toggle',toggle,'children',children)
  return (
    <div className="timeline-container">
      {/* Timeline Dot & Line */}
      <div
        className="timeline-dot-line"
        style={{ height: open ? 'auto' : 80 }} // dynamic height kept inline here only
      >
        <div className="timeline-dot" />
        <div
          className="timeline-line"
          style={{ height: open ? data.height : 60 }} // dynamic height here only
        />
      </div>

      {/* Accordion Card */}
      <div className="accordion-card" onClick={data.toggle}>
        <div className="accordion-header">
          <span className="accordion-title">{data.title}</span>
          <span
            className="chevron-icon"
            style={{ transform: data.open ? "rotate(180deg)" : "rotate(0deg)" }}
          >
            ▼
          </span>
        </div>
        {data.open && <div className="accordion-content">{data.content}</div>}
      </div>
    </div>
  );
}

export default function VerticalTimelineAccordion2() {
  const [active, setActive] = useState(null);

  const modules = [
    { title: "Module 1", content: 'tjfjgghhgfg',
        height:90 },
    { title: "Module 2", content: "Module 2 Contents go here.",height:90 },
    { title: "Module 3", content: "Module 3 Contents go here.",height:90 },
    { title: "Module 4", content: "Module 4 Contents go here.",height:90 },
    { title: "Module 5", content: "Module 5 Contents go here.",height:90 },
  ];

  return (
    <div className="container">
      {modules.map((m, idx) => {
        
      
        console.log("idx",idx)
        const data = {key : m.idx,title : m.title,
            open : active === idx,
            toggle : (() => setActive(active === idx ? null : idx)),
            content : m.content,
            height : m.height
        }
        
        
        return <ModuleCard

                data = {data}
        //   key={m.title}
        //   title={m.title}
        //   open={active === idx}
        //   toggle={() => setActive(active === idx ? null : idx)}
        //   children = {m.content}
        />
        
    
    
      })}
    </div>
  );
}
