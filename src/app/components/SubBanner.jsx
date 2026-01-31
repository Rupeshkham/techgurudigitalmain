"use client";
import Link from "next/link";

export default function SubBanner({
  title,
  subtitle,
  description,
  breadcrumbs = [],
  image
}) {
  return (
    <section className="contact-banner-main-con sub-banner-main-con w-100 float-left">
      <div className="container">
        <div className="sub-banner-inner-con">
          
          {/* LEFT CONTENT */}
          <div className="sub-banner-text-con">
            {subtitle && <span className="d-block">{subtitle}</span>}
            <h1>{title}</h1>
            {description && <p>{description}</p>}

            {/* BREADCRUMB */}
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                {breadcrumbs.map((item, index) => (
                  <li
                    key={index}
                    className={`breadcrumb-item ${
                      item.active ? "active" : ""
                    }`}
                    aria-current={item.active ? "page" : undefined}
                  >
                    {item.active ? (
                      item.label
                    ) : (
                      <Link href={item.href}>{item.label}</Link>
                    )}
                  </li>
                ))}
              </ol>
            </nav>
          </div>

          {/* RIGHT IMAGE */}
          {image && (
            <div className="sub-banner-img-con">
              <figure className="mb-0">
                <img src={image} alt={title} />
              </figure>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
