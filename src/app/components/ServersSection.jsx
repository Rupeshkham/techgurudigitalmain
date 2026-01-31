"use client";
import { useState } from "react";

export default function ServersSection() {
  const [activeTab, setActiveTab] = useState("asia");

  const content = {
    asia: {
      title: "Asia Server Network",
      text: "This is demo content for Asia servers. We provide fast, secure and reliable hosting solutions across major Asian regions with 24/7 support."
    },
    europe: {
      title: "Europe Server Network",
      text: "This is demo content for Europe servers. Our European data centers ensure high performance, low latency and maximum uptime."
    },
    us: {
      title: "United States Server Network",
      text: "This is demo content for US servers. Our servers in the United States deliver enterprise-grade infrastructure and speed."
    },
    middleEast: {
      title: "Middle East Server Network",
      text: "This is demo content for Middle East servers. We offer secure and scalable hosting solutions across the Middle East region."
    }
  };

  return (
    <section className="map-location-main-con w-100 float-left padding-top padding-bottom light-bg">
      <div className="container">

        {/* TITLE */}
        <div className="generic-title text-center">
          <span className="d-block small-txt">Our Servers</span>
          <h2>
            Huge Global Network of Fast <br />
            Host Servers
          </h2>
        </div>

        <div className="map-location-inner-con">
          <div className="row">

            {/* LEFT TABS */}
            <div className="col-lg-3 col-md-4">
              <div className="nav flex-column nav-pills">
                <button
                  className={`nav-link ${activeTab === "asia" ? "active" : ""}`}
                  onClick={() => setActiveTab("asia")}
                >
                  Asia <i className="fas fa-angle-right"></i>
                </button>

                <button
                  className={`nav-link ${activeTab === "europe" ? "active" : ""}`}
                  onClick={() => setActiveTab("europe")}
                >
                  Europe <i className="fas fa-angle-right"></i>
                </button>

                <button
                  className={`nav-link ${activeTab === "us" ? "active" : ""}`}
                  onClick={() => setActiveTab("us")}
                >
                  United States <i className="fas fa-angle-right"></i>
                </button>

                <button
                  className={`nav-link ${activeTab === "middleEast" ? "active" : ""}`}
                  onClick={() => setActiveTab("middleEast")}
                >
                  Middle East <i className="fas fa-angle-right"></i>
                </button>
              </div>
            </div>

            {/* RIGHT SINGLE COLUMN CONTENT */}
            <div className="col-lg-9 col-md-8">
              <div className="map-and-content-con">
                {/* <div className="map-content-details-con"> */}

                  <div className="country-details">
                    <h6>{content[activeTab].title}</h6>
                    <p>{content[activeTab].text}</p>
                  </div>

                {/* </div> */}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
