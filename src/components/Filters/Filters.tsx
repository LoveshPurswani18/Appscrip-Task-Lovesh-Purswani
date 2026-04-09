import "./filters.css";

const filterGroups = [
  {
    label: "CUSTOMIZABLE",
    type: "checkbox",
    options: [],
  },
  {
    label: "IDEAL FOR",
    type: "accordion",
    options: ["All", "Men", "Women", "Baby & Kids"],
  },
  {
    label: "OCCASION",
    type: "accordion",
    options: ["All", "Casual", "Formal", "Party", "Wedding"],
  },
  {
    label: "WORK",
    type: "accordion",
    options: ["All", "Office", "Outdoor", "Smart Casual"],
  },
  {
    label: "FABRIC",
    type: "accordion",
    options: ["All", "Cotton", "Linen", "Silk", "Polyester"],
  },
  {
    label: "SEGMENT",
    type: "accordion",
    options: ["All", "Indian", "Western", "Fusion"],
  },
  {
    label: "SUITABLE FOR",
    type: "accordion",
    options: ["All", "Spring", "Summer", "Autumn", "Winter"],
  },
  {
    label: "RAW MATERIALS",
    type: "accordion",
    options: ["All", "Organic", "Recycled", "Upcycled"],
  },
  {
    label: "PATTERN",
    type: "accordion",
    options: ["All", "Solid", "Stripes", "Floral", "Checks"],
  },
];

export default function Filters() {
  return (
    <aside
      className="filters"
      id="filters-sidebar"
      aria-label="Product filters"
    >
      <div className="filters-inner">
        {filterGroups.map((group) => (
          <details key={group.label} className="filter-group" open={group.label === "IDEAL FOR"}>
            <summary className="filter-group-header">
              <span className="filter-group-label">{group.label}</span>
              {group.type === "checkbox" && (
                <input
                  type="checkbox"
                  className="filter-checkbox"
                  id={`check-${group.label}`}
                  aria-label={`Toggle ${group.label}`}
                />
              )}
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
            )}
          </details>
        ))}
      </div>
    </aside>
  );
}