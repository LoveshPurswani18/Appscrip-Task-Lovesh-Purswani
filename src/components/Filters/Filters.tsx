import "./filters.css";

interface FiltersProps {
  isVisible: boolean;
  onClose?: () => void;
}

const filterGroups = [
  {
    label: "CUSTOMIZBLE",
    type: "checkbox",
    options: [],
  },
  {
    label: "IDEAL FOR",
    type: "accordion",
    options: ["Men", "Women", "Baby & Kids"],
  },
  {
    label: "OCCASION",
    type: "accordion",
    options: ["Casual", "Formal", "Party", "Wedding"],
  },
  {
    label: "WORK",
    type: "accordion",
    options: ["Office", "Outdoor", "Smart Casual"],
  },
  {
    label: "FABRIC",
    type: "accordion",
    options: ["Cotton", "Linen", "Silk", "Polyester"],
  },
  {
    label: "SEGMENT",
    type: "accordion",
    options: ["Indian", "Western", "Fusion"],
  },
  {
    label: "SUITABLE FOR",
    type: "accordion",
    options: ["Spring", "Summer", "Autumn", "Winter"],
  },
  {
    label: "RAW MATERIALS",
    type: "accordion",
    options: ["Organic", "Recycled", "Upcycled"],
  },
  {
    label: "PATTERN",
    type: "accordion",
    options: ["Solid", "Stripes", "Floral", "Checks"],
  },
];

export default function Filters({ isVisible, onClose }: FiltersProps) {
  if (!isVisible) return null;

  return (
    <aside
      className="filters"
      id="filters-sidebar"
      aria-label="Product filters"
    >
      {/* Mobile close button overlay top area */}
      <button 
        className="filters-close-btn mobile-only" 
        onClick={onClose} 
        aria-label="Close filters"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>

      <div className="filters-inner">
        {filterGroups.map((group) => (
          <details 
            key={group.label} 
            className={`filter-group ${group.type === "checkbox" ? "checkbox-group" : ""}`} 
            open={group.label === "IDEAL FOR"}
          >
            <summary className="filter-group-header">
              <div className="filter-group-title-container">
                {group.type === "checkbox" && (
                  <input
                    type="checkbox"
                    className="filter-checkbox"
                    id={`check-${group.label}`}
                    aria-label={`Toggle ${group.label}`}
                  />
                )}
                <div className="label-stack">
                  <span className="filter-group-label">{group.label}</span>
                  {group.type === "accordion" && (
                    <span className="filter-sublabel">All</span>
                  )}
                </div>
              </div>
              
              {group.type === "accordion" && (
                <svg
                  className="filter-chevron"
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
              )}
            </summary>

            {group.type === "accordion" && group.options.length > 0 && (
              <div className="filter-content">
                <button type="button" className="unselect-all">Unselect all</button>
                <ul className="filter-options" role="list">
                  {group.options.map((opt) => (
                    <li key={opt}>
                      <label className="filter-option">
                        <input
                          type="checkbox"
                          className="filter-option-check"
                          name={group.label}
                          value={opt}
                        />
                        <span>{opt}</span>
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </details>
        ))}
      </div>
    </aside>
  );
}