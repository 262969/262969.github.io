"use client";

import { useState } from "react";

export interface MenuCategory {
  id: string;
  name: string;
}

export const MENU_ITEMS: MenuCategory[] = [
  { id: "menu-10", name: "常用软件" },
  { id: "menu-11", name: "Adobe" },
  { id: "menu-12", name: "AutoCAD" },
  { id: "menu-13", name: "平面设计" },
  { id: "menu-14", name: "三维设计" },
  { id: "menu-15", name: "影视动画" },
  { id: "menu-16", name: "建筑设计" },
  { id: "menu-17", name: "机械设计" },
  { id: "menu-18", name: "电子电路" },
  { id: "menu-19", name: "数据分析" },
];

export default function MenuSidebar({ activeIndex, onActivate }: {
  activeIndex: number;
  onActivate: (index: number) => void;
}) {
  return (
    <div className="menu" style={{ float: "left", padding: "0", position: "relative", margin: "0 0 15px", marginRight: "10px" }}>
      <div className="menu-wrap" style={{ overflow: "hidden", position: "relative", marginBottom: "0" }}>
        {/* Vertical active bar */}
        <div
          className="menu-active-bar"
          style={{
            position: "absolute",
            backgroundColor: "#409eff",
            zIndex: 2,
            width: "2px",
            right: "0",
            top: "0",
            bottom: "auto",
            height: "40px",
            transform: `translateY(${activeIndex * 40}px)`,
            transition: "transform .3s cubic-bezier(.645,.045,.355,1)",
            listStyle: "none",
          }}
        />
        <div className="menu-nav" style={{ position: "relative", transition: "transform .3s", zIndex: 2, display: "flex", flexDirection: "column" }}>
          {MENU_ITEMS.map((item, index) => (
            <div
              key={item.id}
              id={item.id}
              className={`menu-item${index === activeIndex ? " menu-active" : ""}`}
              onClick={() => onActivate(index)}
              style={{
                padding: "0 20px",
                height: "40px",
                boxSizing: "border-box",
                lineHeight: "40px",
                display: "block",
                listStyle: "none",
                fontSize: "14px",
                fontWeight: 500,
                color: index === activeIndex ? "#409eff" : "#303133",
                position: "relative",
                textAlign: "right",
                cursor: "pointer",
                marginBottom: "0",
                WebkitTapHighlightColor: "transparent",
              }}
            >
              <span>{item.name}</span>
            </div>
          ))}
        </div>
        {/* Right border */}
        <div
          style={{
            content: '""',
            position: "absolute",
            backgroundColor: "#e4e7ed",
            zIndex: 1,
            height: "100%",
            width: "2px",
            bottom: "auto",
            top: "0",
            right: "0",
            left: "auto",
          }}
        />
      </div>
    </div>
  );
}
