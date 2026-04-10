"use client";
import { useState, useRef, useEffect } from "react";
import "./toolbar.css";

interface ToolbarProps {
  isFilterVisible: boolean;
  toggleFilter: () => void;
}

const sortOptions = [
  { id: "recommended", label: "RECOMMENDED" },
  { id: "newest", label: "NEWEST FIRST" },
  { id: "popular", label: "POPULAR" },
  { id: "price-desc", label: "PRICE : HIGH TO LOW" },
  { id: "price-asc", label: "PRICE : LOW TO HIGH" },
];

export default function Toolbar({ isFilterVisible, toggleFilter }: ToolbarProps) {
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState("recommended");
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsSortOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectedLabel = sortOptions.find(opt => opt.id === selectedSort)?.label;

  return (
    <div className="toolbar" aria-label="Product toolbar">
      <div className="toolbar-inner">
        {/* Desktop Left section */}
        <div className="toolbar-left desktop-only">
          <span className="toolbar-count">3425 ITEMS</span>

          <button
            className="toolbar-filter-btn"
            aria-label={isFilterVisible ? "Hide filter sidebar" : "Show filter sidebar"}
            aria-expanded={isFilterVisible}
            aria-controls="filters-sidebar"
            onClick={toggleFilter}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {isFilterVisible ? (
                <polyline points="15 18 9 12 15 6" />
              ) : (
                <polyline points="9 18 15 12 9 6" />
              )}
            </svg>
            <span className="toolbar-filter-text">
              {isFilterVisible ? "HIDE FILTER" : "SHOW FILTER"}
            </span>
          </button>
        </div>

        {/* Mobile Left Section */}
        <div className="toolbar-left-mobile mobile-only">
          <button
            className="toolbar-filter-btn"
            onClick={toggleFilter}
          >
            FILTER
          </button>
        </div>

        {/* Right section — Custom sort dropdown */}
        <div className="toolbar-right" ref={dropdownRef}>
          <button 
            className="sort-toggle-btn" 
            onClick={() => setIsSortOpen(!isSortOpen)}
            aria-haspopup="listbox"
            aria-expanded={isSortOpen}
          >
            {selectedLabel}
            <svg
              className={`select-chevron ${isSortOpen ? "open" : ""}`}
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>

          {isSortOpen && (
            <ul className="sort-dropdown" role="listbox" aria-activedescendant={selectedSort}>
              {sortOptions.map((opt) => (
                <li 
                  key={opt.id} 
                  role="option"
                  aria-selected={selectedSort === opt.id}
                  className={selectedSort === opt.id ? "selected" : ""}
                  onClick={() => {
                    setSelectedSort(opt.id);
                    setIsSortOpen(false);
                  }}
                >
                  {selectedSort === opt.id && (
                    <span className="check-icon">✓</span>
                  )}
                  {opt.label}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}