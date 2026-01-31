"use client";

import React from "react";

export default function HostikoBenefits() {
  const benefits = [
    {
      title: "Never Pay for Hosting Migration",
      desc: "Qorem ipsum dolor sit amet, consectetur adieis recing elit, sed do eiusmod tempor.",
    },
    {
      title: "Go Live in Minutes",
      desc: "Gorem ipsum dolor sit amet, consectetur adieis recing elit, sed do eiusmod tempor.",
    },
    {
      title: "Professional Email & more",
      desc: "Norem ipsum dolor sit amet, consectetur adieis recing elit, sed do eiusmod tempor.",
    },
  ];

  return (
    <section className="home-hostiko-benefits-main-con w-100 float-left padding-top padding-bottom bg-style1">
      <div className="container">
        <div
          className="home-hostiko-benefits-inner-con wow fadeInUp"
          data-wow-duration="1s"
          data-wow-delay="0.3s"
        >
          {/* Image */}
          <div className="home-hostiko-benefits-img-con">
            <figure className="mb-0">
              <img
                src="/assets/images/home-hostiko-benefit-img.png"
                alt="home-hostiko-benefit-img"
              />
            </figure>
          </div>

          {/* Content */}
          <div className="home-hostiko-benefits-content-con">
            <span className="d-block">Hostiko Benefits</span>
            <h2>
              Level Up Your Web
              <br />
              Hosting With Us
            </h2>

            {/* Benefits list */}
            {benefits.map((benefit, index) => (
              <div className="home-hostiko-benefit-box" key={index}>
                <i className="fas fa-check"></i>
                <div className="home-hostiko-benefit-txt-con">
                  <h6>{benefit.title}</h6>
                  <p>{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
