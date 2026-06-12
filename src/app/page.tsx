"use client";

import { useState } from "react";
import SiteHeader from "@/components/SiteHeader";
import SearchBar from "@/components/SearchBar";
import MenuSidebar, { MENU_ITEMS } from "@/components/MenuSidebar";
import SoftwareAccordion from "@/components/SoftwareAccordion";
import SiteFooter from "@/components/SiteFooter";

export default function Home() {
  const [activeMenuIndex, setActiveMenuIndex] = useState(0); // First menu item is active by default
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="container flex-y" style={{ minHeight: "100%", position: "relative", width: "100%", maxWidth: "1000px", margin: "0 auto", padding: "0 8px" }}>
      {/* Mobile menu toggle button */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        style={{
          display: "none",
          position: "fixed",
          top: "12px",
          left: "12px",
          zIndex: 100,
          background: "#409eff",
          color: "#fff",
          border: "none",
          borderRadius: "6px",
          padding: "8px 14px",
          fontSize: "14px",
          fontWeight: 500,
          cursor: "pointer",
          boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
        }}
        className="mobile-menu-btn"
        aria-label="切换分类"
      >
        ☰ {MENU_ITEMS[activeMenuIndex]?.name || "菜单"}
      </button>

      {/* Mobile sidebar overlay */}
      {mobileMenuOpen && (
        <div
          onClick={() => setMobileMenuOpen(false)}
          style={{
            display: "none",
            position: "fixed",
            top: 0, left: 0, right: 0, bottom: 0,
            background: "rgba(0,0,0,0.4)",
            zIndex: 49,
          }}
          className="mobile-overlay"
        />
      )}

      {/* Mobile sidebar panel — rendered only when open */}
      {mobileMenuOpen && (
        <div
          className="mobile-menu-panel"
          style={{
            position: "fixed",
            top: 0, left: 0, right: 0, bottom: 0,
            background: "#fff",
            zIndex: 50,
            flexDirection: "column",
            alignItems: "stretch",
            padding: "56px 0 16px 0",
            overflowY: "auto",
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={() => setMobileMenuOpen(false)}
            style={{
              position: "absolute",
              top: 12, right: 12,
              width: 36, height: 36,
              border: "none",
              borderRadius: 6,
              background: "#f0f0f0",
              color: "#333",
              fontSize: 20,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              zIndex: 51,
            }}
          >
            ✕
          </button>
          <div className="menu-wrap" style={{ overflow: "hidden", position: "relative", marginBottom: 0 }}>
            <div className="menu-nav" style={{ position: "relative", transition: "transform .3s", zIndex: 2, display: "flex", flexDirection: "column" }}>
              {MENU_ITEMS.map((item, index) => (
                <div
                  key={item.id}
                  id={item.id}
                  className={`menu-item${index === activeMenuIndex ? " menu-active" : ""}`}
                  onClick={() => {
                    setActiveMenuIndex(index);
                    setMobileMenuOpen(false);
                  }}
                  style={{
                    padding: "0 20px",
                    height: "44px",
                    boxSizing: "border-box",
                    lineHeight: "44px",
                    display: "block",
                    listStyle: "none",
                    fontSize: "15px",
                    fontWeight: 500,
                    color: index === activeMenuIndex ? "#409eff" : "#303133",
                    position: "relative",
                    cursor: "pointer",
                    marginBottom: 0,
                    borderBottom: "1px solid #f0f0f0",
                    WebkitTapHighlightColor: "transparent",
                  }}
                >
                  <span>{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <SiteHeader />

      {/* Main Content */}
      <div className="main" style={{ flex: 1, background: "#fff", borderRadius: "6px" }}>
        {/* Search */}
        <SearchBar />

        {/* Content Area: Menu + Software List */}
        <div className="content" style={{ overflow: "hidden", width: "100%" }}>
          {/* Menu Sidebar */}
          <MenuSidebar
            activeIndex={activeMenuIndex}
            onActivate={(index) => {
              setActiveMenuIndex(index);
              setMobileMenuOpen(false);
            }}
          />

          {/* Software Accordion Panel */}
          <SoftwareAccordion panelIndex={activeMenuIndex} />
        </div>
      </div>

      {/* Footer */}
      <SiteFooter />
    </div>
  );
}
