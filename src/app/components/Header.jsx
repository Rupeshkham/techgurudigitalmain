"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false); // mobile menu toggle
  const [hostingOpen, setHostingOpen] = useState(false); // Hosting dropdown
  const [pagesOpen, setPagesOpen] = useState(false); // Pages dropdown

  const pathname = usePathname();
  const isActive = (path) => pathname === path;

  return (
    <div className="header-main-con w-100">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light p-0">
          {/* Logo */}
          <Link href="/" className="navbar-brand p-0">
            <figure className="mb-0">
              <img
                src="/assets/images/header-logo.png"
                alt="header-logo"
                loading="lazy"
              />
            </figure>
          </Link>

          {/* Mobile Toggler */}
          <button
            className="navbar-toggler collapsed"
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="navbar-toggler-icon"></span>
            <span className="navbar-toggler-icon"></span>
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navbar Links */}
          <div
            className={`navbar-collapse ${menuOpen ? "d-block" : "d-none"} d-lg-flex `} id="navbarSupportedContent"
          >
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link
                  href="/"
                  className={`nav-link p-0 ${isActive("/") ? "active" : ""}`}
                >
                  Home
                </Link>
              </li>

              

              <li className="nav-item">
                <Link
                  href="/about"
                  className={`nav-link p-0 ${isActive("/about") ? "active" : ""}`}
                >
                  About
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  href="/service"
                  className={`nav-link p-0 ${isActive("/service") ? "active" : ""}`}
                >
                  Services
                </Link>
              </li>

              

              <li className="nav-item">
                <Link
                  href="/contact"
                  className={`nav-link p-0 ${isActive("/contact") ? "active" : ""}`}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Live Chat */}
          <div className="nav-btns d-flex align-items-center">
            <div className="primary-btn">
              <a href="https://designingmedia.com/help-center">Live Chat</a>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
