"use client";

import { useState } from "react";
import Image from "next/image";
import { SoftwareCategory, SoftwareVersion, PanLink } from "@/types/software";
import PANEL_DATA from "@/data/panel-data";

// Demo mode — when true, all cloud drive links redirect to "#" (placeholder).
// Set to false to use real links stored in src/data/panel-data.ts (private debugging only).
const DEMO_MODE = false;

// Banner link data
const BANNER_LINK = DEMO_MODE ? "#" : "https://www.pansou.xin/#ruanku";
const BANNER_TEXT = DEMO_MODE
  ? "🔒 Demo Mode — 网盘链接已替换为占位符，仅供学习 Next.js 静态站点架构"
  : "💾 私人调试站点 — 所有网盘链接仅供个人学习使用";

// Cloud drive config
const PAN_CONFIG: Record<string, { label: string; icon: string; color: string }> = {
  baidu: { label: "百度网盘", icon: "/assets/img/baidu.png", color: "#2980ef" },
  quark: { label: "夸克网盘", icon: "/assets/img/quark.png", color: "#00b894" },
  "123": { label: "123网盘", icon: "/assets/img/123.png", color: "#e55039" },
  unknown: { label: "备用链接", icon: "", color: "#999999" },
};

/**
 * Build the real download URL from pan type, code, and key.
 * In demo mode, returns placeholder links so no real CDN traffic occurs.
 * Matches the original site's app.min.js logic:
 *   pan1 (baidu):  https://pan.baidu.com/s/${code}?pwd=${key}
 *   pan2 (quark):  https://pan.quark.cn/s/${code}
 *   pan3 (123):    https://www.123912.com/s/${code}
 *   pan5 (course): /course/install/${code}
 */
function getPanUrl(link: PanLink): string {
  if (DEMO_MODE) {
    return "#demo";
  }
  if (link.pan === "baidu") {
    return `https://pan.baidu.com/s/${link.code}?pwd=${link.key || "0000"}`;
  }
  if (link.pan === "quark") {
    return `https://pan.quark.cn/s/${link.code}`;
  }
  if (link.pan === "123") {
    return `https://www.123912.com/s/${link.code}`;
  }
  // "unknown" is from a third source — try the code as-is
  if (link.pan === "unknown") {
    // Some unknown links are numeric — could be tutorial IDs
    return `https://pan.baidu.com/s/${link.code}?pwd=0000`;
  }
  return "#";
}

function VersionItem({ ver }: { ver: SoftwareVersion }): React.JSX.Element {
  if (ver.shixiao) {
    return (
      <span
        style={{
          display: "inline-block",
          fontSize: "13px",
          color: "#c0c4cc",
          lineHeight: "1.769230769230769",
          margin: "0 8px 5px 0",
          fontStyle: "italic",
        }}
      >
        {ver.shixiao}
      </span>
    );
  }

  if (ver.links && ver.links.length > 0) {
    return (
      <span
        style={{
          display: "inline-flex",
          alignItems: "center",
          fontSize: "13px",
          color: "#303133",
          lineHeight: "1.769230769230769",
          margin: "0 8px 5px 0",
          flexWrap: "wrap",
        }}
      >
        <span style={{ marginRight: "2px", color: "#909399" }}>{ver.name}</span>
        {ver.links.map((link, li) => (
          <a
            key={li}
            href={getPanUrl(link)}
            title={DEMO_MODE ? "[Demo] 此为示例数据" : `${PAN_CONFIG[link.pan]?.label || link.pan} — 提取码: ${link.code}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              fontSize: "12px",
              color: PAN_CONFIG[link.pan]?.color || "#409eff",
              textDecoration: "none",
              background: (PAN_CONFIG[link.pan]?.color || "#409eff") + "15",
              borderRadius: "3px",
              padding: "1px 6px",
              marginRight: "4px",
              whiteSpace: "nowrap",
              transition: "opacity .2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            {PAN_CONFIG[link.pan]?.icon && (
              <Image
                src={PAN_CONFIG[link.pan].icon}
                alt={PAN_CONFIG[link.pan]?.label || link.pan}
                width={14}
                height={14}
                style={{ height: "14px", marginRight: "3px" }}
                unoptimized
              />
            )}
            {PAN_CONFIG[link.pan]?.label || link.pan}
          </a>
        ))}
      </span>
    );
  }

  return (
    <span style={{ display: "inline-block", fontSize: "13px", margin: "0 8px 5px 0" }}>
      {ver.name}
    </span>
  );
}

export default function SoftwareAccordion({ panelIndex = 1 }: { panelIndex?: number }) {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());

  const panel = PANEL_DATA[panelIndex];
  if (!panel) return null;

  const toggleItem = (catIndex: number) => {
    setOpenItems((prev) => {
      const next = new Set(prev);
      if (next.has(catIndex)) next.delete(catIndex);
      else next.add(catIndex);
      return next;
    });
  };

  return (
    <div className="down" style={{ overflow: "hidden", position: "relative", marginLeft: "10px", paddingLeft: "10px", borderLeft: "1px solid #ebeef5" }}>
      <div className="down-wrap" style={{ padding: "0 20px" }}>
        <div className="down-box" style={{ border: 0, paddingBottom: "8px" }}>
          {/* Banner */}
          <div className="down-pan" style={{ textAlign: "center", background: "#333", borderRadius: "5px", padding: "10px", marginBottom: "5px", fontSize: "14px", fontWeight: "bold" }}>
            <a href={BANNER_LINK} target="_blank" rel="noopener noreferrer" style={{ color: "#f8ff00" }}>
              {BANNER_TEXT}
            </a>
          </div>

          {/* Software categories */}
          {panel.categories.map((cat, catIndex) => {
            const isOpen = openItems.has(catIndex);
            return (
              <div key={catIndex} className="down-item" style={{ borderBottom: "1px solid #ebeef5", paddingBottom: "8px" }}>
                <a
                  className="down-head"
                  onClick={() => toggleItem(catIndex)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    height: "48px",
                    lineHeight: "48px",
                    backgroundColor: "#fff",
                    color: "#303133",
                    cursor: "pointer",
                    borderBottom: "1px solid #ebeef5",
                    fontSize: "13px",
                    fontWeight: 500,
                    transition: "border-bottom-color .3s",
                    outline: "0",
                    WebkitTapHighlightColor: "transparent",
                  }}
                >
                  <div className="down-img" style={{ width: "25px", height: "25px", marginRight: "10px", background: "#eee", borderRadius: "3px", position: "relative", display: "inline-block", overflow: "hidden" }}>
                    <Image src={cat.icon || "/assets/img/ruan.png"} alt="" width={25} height={25} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  </div>
                  <span className="down-name" style={{ fontSize: "13px", fontWeight: 500, color: "#303133" }}>
                    + {cat.name}
                  </span>
                  <i className="down-arrow" style={{ margin: "0 8px 0 auto", transition: "transform .3s", fontWeight: 300, fontSize: "16px", color: "#666", transform: isOpen ? "rotate(180deg)" : "none" }}>
                    {isOpen ? "-" : "+"}
                  </i>
                </a>

                {/* Version list */}
                {isOpen && (
                  <div className="down-list" style={{ display: "block", willChange: "height", backgroundColor: "#fff", overflow: "hidden", boxSizing: "border-box", borderBottom: "1px solid #ebeef5" }}>
                    <div className="down-body version" style={{ fontSize: "13px", color: "#303133", lineHeight: "1.769230769230769", display: "flex", flexWrap: "wrap", padding: "20px 15px 10px 15px" }}>
                      {cat.versions.map((ver, verIndex) => (
                        <VersionItem key={verIndex} ver={ver} />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
