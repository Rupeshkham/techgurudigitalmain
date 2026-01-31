"use client";

import React from "react";
import Link from "next/link";

export default function HomeAdvanceFeatures() {
  const features = [
    {
      img: "/assets/images/home-advance-feature-img1.png",
      title: "Full Weekly Backup",
      desc: "Quis autem vel eum iure repreaer uea voluotate velit esse.",
      link: "/about",
    },
    {
      img: "/assets/images/home-advance-feature-img2.png",
      title: "Fast Website Migration",
      desc: "Ruis autem vel eum iure repreaer uea voluotate velit esse.",
      link: "/about",
    },
    {
      img: "/assets/images/home-advance-feature-img3.png",
      title: "Top-Notch Security",
      desc: "Ruis autem vel eum iure repreaer uea voluotate velit esse.",
      link: "/about",
    },
    {
      img: "/assets/images/home-advance-feature-img4.png",
      title: "Multiple Servers",
      desc: "Quis autem vel eum iure repreaer uea voluotate velit esse.",
      link: "/about",
    },
    {
      img: "/assets/images/home-advance-feature-img5.png",
      title: "Best Cloud Storage",
      desc: "Ruis autem vel eum iure repreaer uea voluotate velit esse.",
      link: "/about",
    },
    {
      img: "/assets/images/home-advance-feature-img6.png",
      title: "24/7/365 Live Chat",
      desc: "Ruis autem vel eum iure repreaer uea voluotate velit esse.",
      link: "/about",
    },
  ];

  // split features into 2 rows of 3
  const rows = [features.slice(0, 3), features.slice(3, 6)];

  return (
    <section className="home-advance-features-main-con w-100 float-left padding-top padding-bottom light-bg">
      <div className="container">
        <div
          className="generic-title text-center wow fadeInUp"
          data-wow-duration="1s"
          data-wow-delay="0.3s"
        >
          <span className="d-block">Our Features</span>
          <h2>Our Advanced Web Hosting Features</h2>
        </div>

        <div
          className="home-advance-features-inner-con wow fadeInUp"
          data-wow-duration="1s"
          data-wow-delay="0.3s"
        >
          {rows.map((row, rowIndex) => (
            <div className="home-advance-features-row" key={rowIndex}>
              {row.map((feature, index) => (
                <div className="home-advance-feature-box" key={index}>
                  <figure>
                    <img src={feature.img} alt={feature.title} />
                  </figure>
                  <h6>{feature.title}</h6>
                  <p>{feature.desc}</p>
                  <div className="home-advance-feature-btn">
                    <Link href={feature.link}>Read more</Link>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
