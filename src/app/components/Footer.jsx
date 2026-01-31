"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <section className="footer-main-con w-100 float-left">
      <div className="container">

        {/* BUILDER SECTION */}
        <div className="builder-main-con">
          <div className="builder-content">
            <h2>Build Your Website With Hostiko</h2>
            <p>From professional business to enterprise, we’ve got you covered!</p>
          </div>
          <div className="builder-btns-con">
            <div className="primary-btn">
              <Link href="/contact">Get Started</Link>
            </div>
            <div className="secondary-btn">
              <Link href="/about">Learn more</Link>
            </div>
          </div>
        </div>

        {/* FOOTER CONTENT */}
        <div className="footer-inner-con">

          {/* LOGO + NEWSLETTER */}
          <div className="footer-box footer-logo-con">
            <Link href="/">
              <figure className="mb-0">
                <img
                  src="/assets/images/footer-logo.png"
                  alt="footer-logo"
                />
              </figure>
            </Link>

            <label htmlFor="mail">Sign Up For Newsletter</label>
            <div className="footer-mail-box">
              <figure className="mb-0">
                <img
                  src="/assets/images/mail-img.png"
                  alt="mail-img"
                />
              </figure>
              <input
                type="email"
                id="mail"
                placeholder="Enter Your Email:"
              />
              <button>
                <i className="fas fa-paper-plane"></i>
              </button>
            </div>
          </div>

          {/* SERVICES */}
          <div className="footer-box">
            <h6>Our Services</h6>
            <ul className="list-unstyled mb-0">
              <li><Link href="/shared-hosting">Shared Hosting</Link></li>
              <li><Link href="/reseller">Reseller Hosting</Link></li>
              <li><Link href="/vps">Virtual Private Servers</Link></li>
              <li><Link href="/dedicated">Dedicated Hosting</Link></li>
              <li><Link href="/domain">Domain Registration</Link></li>
            </ul>
          </div>

          {/* ABOUT */}
          <div className="footer-box">
            <h6>About Us</h6>
            <ul className="list-unstyled mb-0">
              <li><Link href="/blog">Blogs</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/pricing">Pricing</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* CONTACT */}
          <div className="footer-box footer-contact-info">
            <h6>Mailing Address</h6>
            <ul className="list-unstyled mb-0">
              <li>
                <a
                  href="https://maps.app.goo.gl/C288MmZTQDghyudZ7"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-map-marker-alt"></i>
                  121 King Street, Melbourne Victoria 3000 Australia
                </a>
              </li>
              <li>
                <a href="tel:+61383766284">
                  <i className="fas fa-phone-alt"></i>
                  +61 3 8376 6284
                </a>
              </li>
            </ul>

            {/* SOCIAL */}
            <div className="social-links-con">
              <ul className="list-unstyled mb-0">
                <li>
                  <a href="https://www.facebook.com/login/" target="_blank">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/i/flow/login" target="_blank">
                    <i className="fab fa-x-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/login" target="_blank">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="footer-copyright-con text-center">
        <div className="container">
          <p>Copyright ©2025 Hostiko.com All Rights Reserved</p>
        </div>
      </div>
    </section>
  );
}
