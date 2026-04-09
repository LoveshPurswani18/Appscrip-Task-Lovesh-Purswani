import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      {/* ── Top section ── */}
      <div className="footer-top">
        {/* Newsletter */}
        <div className="footer-newsletter">
          <h2 className="footer-heading">BE THE FIRST TO KNOW</h2>
          <p className="footer-subtext">
            Sign up for updates from metta muse.
          </p>
          <form className="newsletter-form" aria-label="Newsletter signup">
            <label htmlFor="newsletter-email" className="sr-only">
              Enter your email
            </label>
            <input
              id="newsletter-email"
              type="email"
              className="newsletter-input"
              placeholder="Enter your e-mail..."
              autoComplete="email"
              required
            />
            <button type="submit" className="newsletter-btn">
              SUBSCRIBE
            </button>
          </form>
        </div>

        {/* Contact Us */}
        <div className="footer-contact">
          <h2 className="footer-heading">CONTACT US</h2>
          <address className="footer-address">
            <p>+44 221 133 5360</p>
            <a href="mailto:customercare@lattermuse.com" className="footer-email">
              customercare@lattermuse.com
            </a>
          </address>

          <div className="footer-currency">
            <h3 className="footer-subheading">CURRENCY</h3>
            <div className="currency-selector">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
              <span>$ &nbsp;USD</span>
            </div>
            <p className="currency-note">
              Transactions will be completed in Euros and a currency reference is
              available on hover.
            </p>
          </div>
        </div>
      </div>

      {/* ── Mid section — links ── */}
      <div className="footer-mid">
        {/* metta muse menu */}
        <nav className="footer-nav" aria-label="metta muse links">
          <h3 className="footer-nav-heading">metta muse</h3>
          <ul role="list">
            <li><a href="#" className="footer-link">About Us</a></li>
            <li><a href="#" className="footer-link">Stories</a></li>
            <li><a href="#" className="footer-link">Artisans</a></li>
            <li><a href="#" className="footer-link">Boutiques</a></li>
            <li><a href="#" className="footer-link">Contact Us</a></li>
            <li><a href="#" className="footer-link">EU Compliances Docs</a></li>
          </ul>
        </nav>

        {/* Quick Links */}
        <nav className="footer-nav" aria-label="Quick links">
          <h3 className="footer-nav-heading">QUICK LINKS</h3>
          <ul role="list">
            <li><a href="#" className="footer-link">Orders & Shipping</a></li>
            <li><a href="#" className="footer-link">Join/Login as a Seller</a></li>
            <li><a href="#" className="footer-link">Payment & Pricing</a></li>
            <li><a href="#" className="footer-link">Return & Refunds</a></li>
            <li><a href="#" className="footer-link">FAQs</a></li>
            <li><a href="#" className="footer-link">Privacy Policy</a></li>
            <li><a href="#" className="footer-link">Terms & Conditions</a></li>
          </ul>
        </nav>

        {/* Follow Us */}
        <div className="footer-social">
          <h3 className="footer-nav-heading">FOLLOW US</h3>
          <div className="social-icons">
            {/* Instagram */}
            <a href="#" className="social-link" aria-label="Follow on Instagram">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-hidden="true"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            {/* LinkedIn */}
            <a href="#" className="social-link" aria-label="Follow on LinkedIn">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-hidden="true"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
          </div>

          {/* Payment accepts */}
          <div className="footer-accepts">
            <h3 className="footer-nav-heading">metta muse ACCEPTS</h3>
            <div className="payment-icons" aria-label="Accepted payment methods">
              {/* GPay */}
              <span className="payment-badge" aria-label="Google Pay">G Pay</span>
              <span className="payment-badge" aria-label="Mastercard">MC</span>
              <span className="payment-badge" aria-label="PayPal">PP</span>
              <span className="payment-badge" aria-label="Amex">Amex</span>
              <span className="payment-badge" aria-label="Apple Pay">⌘Pay</span>
              <span className="payment-badge" aria-label="Shop Pay">Shop</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="footer-bottom">
        <p>Copyright © 2023 mettamuse. All rights reserved.</p>
      </div>
    </footer>
  );
}