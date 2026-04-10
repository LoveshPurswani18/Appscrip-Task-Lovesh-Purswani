import Image from "next/image";
import "./header.css";
import Link from "next/link";

export default function Header() {
  return (
    <header className="header">

      {/* Announcement Bar */}
      <div className="announcement-bar">
        <div className="announcement-inner">
          <div className="announcement-item">
            <Image
              src="/icons/header-icon.svg"
              alt=""
              width={16}
              height={16}
              aria-hidden="true"
            />
            <span>Lorem ipsum dolor</span>
          </div>
          <div className="announcement-item">
            <Image
              src="/icons/header-icon.svg"
              alt=""
              width={16}
              height={16}
              aria-hidden="true"
            />
            <span>Lorem ipsum dolor</span>
          </div>
          <div className="announcement-item">
            <Image
              src="/icons/header-icon.svg"
              alt=""
              width={16}
              height={16}
              aria-hidden="true"
            />
            <span>Lorem ipsum dolor</span>
          </div>
        </div>
      </div>

      {/* Main Header Row */}
      <div className="header-main">

        {/* left side */}
        <div className="header-left">
          {/* Hamburger menu */}
          <button
            className="hamburger-btn"
            aria-label="Open navigation menu"
            aria-expanded="false"
            aria-controls="main-nav"
          >
            <Image
              src="/icons/hamburger-icon.svg"
              alt=""
              width={18}
              height={15}
              aria-hidden="true"
            />
          </button>

          {/* Logo mark icon */}
          <Link href="/" aria-label="metta muse home" className="logo-icon-link">
            <Image
              src="/icons/logo.svg"
              alt="metta muse logo mark"
              width={36}
              height={36}
              priority
            />
          </Link>
        </div>

        {/* center side */}
        <div className="header-center">
          <Link href="/" className="logo-wordmark" aria-label="metta muse">
            LOGO
          </Link>
        </div>

        {/* right side */}
        <div className="header-right">
          <nav className="header-icons" aria-label="User actions">
            <button className="icon-btn" aria-label="Search products">
              <Image
                src="/icons/search-icon.svg"
                alt=""
                width={24}
                height={24}
                aria-hidden="true"
              />
            </button>

            <button className="icon-btn" aria-label="Wishlist">
              <Image
                src="/icons/heart-icon.svg"
                alt=""
                width={24}
                height={24}
                aria-hidden="true"
              />
            </button>

            <button className="icon-btn" aria-label="Shopping bag">
              <Image
                src="/icons/shopping-bag-icon.svg"
                alt=""
                width={24}
                height={24}
                aria-hidden="true"
              />
            </button>

            {/* Profile — desktop only */}
            <button className="icon-btn icon-btn--desktop" aria-label="Account">
              <Image
                src="/icons/profile-icon.svg"
                alt=""
                width={24}
                height={24}
                aria-hidden="true"
              />
            </button>
          </nav>

          {/* Language selector — desktop only */}
          <div className="lang-selector lang-selector--desktop" role="button" tabIndex={0} aria-label="Language: English">
            <span>ENG</span>
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              aria-hidden="true"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </div>
        </div>

      </div>

      {/* Navigation Menu */}
      <nav className="main-nav" id="main-nav" aria-label="Main navigation">
        <ul className="nav-list" role="list">
          <li><a href="#" className="nav-link">SHOP</a></li>
          <li><a href="#" className="nav-link">SKILLS</a></li>
          <li><a href="#" className="nav-link">STORIES</a></li>
          <li><a href="#" className="nav-link">ABOUT</a></li>
          <li><a href="#" className="nav-link">CONTACT US</a></li>
        </ul>
      </nav>

    </header>
  );
}