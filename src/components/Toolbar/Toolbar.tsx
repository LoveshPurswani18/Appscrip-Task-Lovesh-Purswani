import "./toolbar.css";

export default function Toolbar() {
  return (
    <div className="toolbar" aria-label="Product toolbar">
      <div className="toolbar-inner">
        {/* Left section */}
        <div className="toolbar-left">
          <span className="toolbar-count">3425 ITEMS</span>

          <button
            className="toolbar-filter-btn"
            aria-label="Hide filter sidebar"
            aria-expanded="true"
            aria-controls="filters-sidebar"
          >
            {/* Funnel / filter icon */}
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              aria-hidden="true"
            >
              <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
            </svg>
            <span>HIDE FILTER</span>
          </button>
        </div>

        {/* Right section — sort dropdown */}
        <div className="toolbar-right">
          <label htmlFor="sort-select" className="sr-only">
            Sort products
          </label>
          <div className="select-wrapper">
            <select id="sort-select" className="sort-select">
              <option value="recommended">RECOMMENDED</option>
              <option value="newest">NEWEST FIRST</option>
              <option value="popular">POPULAR</option>
              <option value="price-asc">PRICE: LOW TO HIGH</option>
              <option value="price-desc">PRICE: HIGH TO LOW</option>
            </select>
            <svg
              className="select-chevron"
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
          </div>
        </div>
      </div>
    </div>
  );
}