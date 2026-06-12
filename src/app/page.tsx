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

      {/* Overlay for mobile sidebar */}
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
