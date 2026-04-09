import "./header.css";

export default function Header() {
  return (
    <header className="header">
      {/* ── Announcement Bar ── */}
      <div className="announcement-bar" role="banner">
        <p>
          Lorem ipsum dolor sit amet consectetur. Amet est posuere.&nbsp;
          <a href="#" className="announcement-link">
            Learnmore
          </a>
        </p>
      </div>

      {/* ── Main Header Row ── */}
      <div className="header-main">
        {/* Left: hamburger (mobile) + lang selector */}
        <div className="header-left">
          {/* Hamburger — mobile only */}
          <button
            className="hamburger"
            aria-label="Open navigation menu"
            aria-expanded="false"
          >
            <span className="hamburger-line" />
            <span className="hamburger-line" />
            <span className="hamburger-line" />
          </button>

          {/* Language selector — desktop */}
          <div className="lang-selector" aria-label="Language selector">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
            <span>ENG</span>
            <svg
              className="chevron"
              width="12"
              height="12"
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

        {/* Centre: Logo */}
        <div className="header-logo">
          <a href="/" aria-label="metta muse home">
            LOGO
          </a>
        </div>

        {/* Right: action icons */}
        <nav className="header-icons" aria-label="User actions">
          <button className="icon-btn" aria-label="Search products">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-hidden="true"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </button>

          <button className="icon-btn" aria-label="Wishlist">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-hidden="true"
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          </button>

          <button className="icon-btn" aria-label="Shopping cart">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-hidden="true"
            >
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
          </button>

          <button className="icon-btn" aria-label="Account">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-hidden="true"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </button>
        </nav>
      </div>

      {/* ── Navigation Menu ── */}
      <nav className="main-nav" aria-label="Main navigation">
        <ul className="nav-list" role="list">
          <li><a href="#" className="nav-link">SHOP</a></li>
          <li><a href="#" className="nav-link">SKILLS</a></li>
          <li><a href="#" className="nav-link">STORIES</a></li>
          <li><a href="#" className="nav-link">ABOUT</a></li>
          <li><a href="#" className="nav-link nav-link--contact">CONTACT US</a></li>
        </ul>
      </nav>
    </header>
  );
}