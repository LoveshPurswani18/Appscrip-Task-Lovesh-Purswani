import Image from "next/image";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        {/* Newsletter Section */}
        <div className="footer-newsletter">
          <h2 className="footer-heading">BE THE FIRST TO KNOW</h2>
          <p className="footer-subtext desktop-only">
            Sign up for updates from mettä muse.
          </p>
          <p className="footer-subtext mobile-only text-dummy">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. this is simply dummy text.
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

        {/* Contact Us Section */}
        <div className="footer-contact-block">
          <div className="footer-contact">
            <h2 className="footer-heading desktop-only">CONTACT US</h2>
            <h2 className="footer-heading mobile-only">CALL US</h2>
            
            <address className="footer-address">
              <span className="contact-phone">+44 221 133 5360</span>
              <span className="contact-separator mobile-only">♦</span>
              <a href="mailto:customercare@mettamuse.com" className="footer-email">
                customercare@mettamuse.com
              </a>
            </address>
          </div>

          <div className="mobile-divider mobile-only"></div>

          <div className="footer-currency">
            <h3 className="footer-subheading">CURRENCY</h3>
            <div className="currency-selector">
              <svg
                width="24"
                height="24"
                viewBox="0 0 36 36"
                fill="none"
                className="currency-flag"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="18" cy="18" r="18" fill="#F0F0F0"/>
                <mask id="flag-mask" maskUnits="userSpaceOnUse" x="0" y="0" width="36" height="36">
                  <circle cx="18" cy="18" r="18" fill="white"/>
                </mask>
                <g mask="url(#flag-mask)">
                  <rect width="36" height="36" fill="#D80027"/>
                  <path d="M0 4.5H36M0 13.5H36M0 22.5H36M0 31.5H36" stroke="#EEEEEE" strokeWidth="4.5"/>
                  <rect width="18" height="19.5" fill="#0052B4"/>
                  <g fill="#EEEEEE">
                    <circle cx="3" cy="3" r="1"/><circle cx="9" cy="3" r="1"/><circle cx="15" cy="3" r="1"/>
                    <circle cx="6" cy="6" r="1"/><circle cx="12" cy="6" r="1"/>
                    <circle cx="3" cy="9" r="1"/><circle cx="9" cy="9" r="1"/><circle cx="15" cy="9" r="1"/>
                    <circle cx="6" cy="12" r="1"/><circle cx="12" cy="12" r="1"/>
                    <circle cx="3" cy="15" r="1"/><circle cx="9" cy="15" r="1"/><circle cx="15" cy="15" r="1"/>
                  </g>
                </g>
              </svg>
              <span>• USD</span>
            </div>
            <p className="currency-note desktop-only">
              Transactions will be completed in Euros and a currency reference is
              available on hover.
            </p>
          </div>
        </div>
      </div>

      <div className="mobile-divider mobile-only divider-full"></div>

      {/* ── Mid section — links ── */}
      <div className="footer-mid">
        {/* mettä muse menu */}
        <div className="footer-accordion">
          <input type="checkbox" id="accordion-metta" className="accordion-toggle sr-only" />
          <label htmlFor="accordion-metta" className="footer-accordion-summary">
            <h3 className="footer-nav-heading">mettä muse</h3>
            <svg className="accordion-chevron mobile-only" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 9l6 6 6-6" />
            </svg>
          </label>
          <div className="accordion-content">
            <ul role="list">
              <li><a href="#" className="footer-link">About Us</a></li>
              <li><a href="#" className="footer-link">Stories</a></li>
              <li><a href="#" className="footer-link">Artisans</a></li>
              <li><a href="#" className="footer-link">Boutiques</a></li>
              <li><a href="#" className="footer-link">Contact Us</a></li>
              <li><a href="#" className="footer-link">EU Compliances Docs</a></li>
            </ul>
          </div>
        </div>

        <div className="mobile-divider mobile-only divider-full"></div>

        {/* Quick Links */}
        <div className="footer-accordion">
          <input type="checkbox" id="accordion-quicklinks" className="accordion-toggle sr-only" />
          <label htmlFor="accordion-quicklinks" className="footer-accordion-summary">
            <h3 className="footer-nav-heading">QUICK LINKS</h3>
            <svg className="accordion-chevron mobile-only" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 9l6 6 6-6" />
            </svg>
          </label>
          <div className="accordion-content">
            <ul role="list">
              <li><a href="#" className="footer-link">Orders & Shipping</a></li>
              <li><a href="#" className="footer-link">Join/Login as a Seller</a></li>
              <li><a href="#" className="footer-link">Payment & Pricing</a></li>
              <li><a href="#" className="footer-link">Return & Refunds</a></li>
              <li><a href="#" className="footer-link">FAQs</a></li>
              <li><a href="#" className="footer-link">Privacy Policy</a></li>
              <li><a href="#" className="footer-link">Terms & Conditions</a></li>
            </ul>
          </div>
        </div>

        <div className="mobile-divider mobile-only divider-full"></div>

        {/* Follow Us & Accepts */}
        <div className="footer-social-wrapper">
          <div className="footer-accordion">
            <input type="checkbox" id="accordion-followus" className="accordion-toggle sr-only" />
            <label htmlFor="accordion-followus" className="footer-accordion-summary">
              <h3 className="footer-nav-heading">FOLLOW US</h3>
              <svg className="accordion-chevron mobile-only" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 9l6 6 6-6" />
              </svg>
            </label>
            <div className="accordion-content">
              <div className="social-icons">
                <a href="#" className="social-link" aria-label="Follow on Instagram">
                  <Image src="/icons/instagram-icon.svg" alt="" width={32} height={32} />
                </a>
                <a href="#" className="social-link" aria-label="Follow on LinkedIn">
                  <Image src="/icons/linkedin-icon.svg" alt="" width={32} height={32} />
                </a>
              </div>
            </div>
          </div>

          <div className="mobile-divider mobile-only divider-full"></div>

          <div className="footer-accepts">
            <h3 className="footer-nav-heading">mettä muse ACCEPTS</h3>
            <div className="payment-icons" aria-label="Accepted payment methods">
              <Image src="/icons/google-pay-icon.svg" alt="Google Pay" width={56} height={34} />
              <Image src="/icons/mastercard-icon.svg" alt="Mastercard" width={56} height={34} />
              <Image src="/icons/paypal-icon.svg" alt="PayPal" width={56} height={34} />
              <Image src="/icons/american-express-icon.svg" alt="Amex" width={56} height={34} />
              <Image src="/icons/apple-pay-icon.svg" alt="Apple Pay" width={56} height={34} />
              <Image src="/icons/shopify-pay-icon.svg" alt="Shop Pay" width={56} height={34} />
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