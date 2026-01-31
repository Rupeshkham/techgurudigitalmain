import Footer from "../components/Footer";
import Header from "../components/Header";
import SubBanner from "../components/SubBanner";

export default function AboutPage() {
  return (
    <>
    <Header/>
    <SubBanner
            title="About Us"
            subtitle="We Guarantee"
            description="We Guarantee your site will run Quicker on our Cloud than normal hosting, or your Money back."
            image="/assets/images/contact-banner-img.png"
            breadcrumbs={[
              { label: "Home", href: "/about" },
              { label: "About", active: true }
            ]}
          />
      {/* HOSTIKO TEAM SECTION */}
      <section className="banner-generic-main-con w-100 float-left">
      <div className="container">
        <div className="banner-generic-outer-con">
          <div className="mission-and-vison-inner-con">

            {/* MISSION */}
            <div className="mission-vision-box light-bg">
              <figure>
                <img
                  src="/assets/images/mission-img.png"
                  alt="mission-img"
                />
              </figure>
              <h3>Our Mission</h3>
              <p>
                Duis aute irure dolor in reprehenderit in voluta esse
                cillum dolore eu fugiat nulla pariatur exceteu occaecat
                cupidatat non proident.
              </p>
              <div className="primary-btn">
                <a href="/contact">Get Started</a>
              </div>
            </div>

            {/* VISION */}
            <div className="mission-vision-box light-bg">
              <figure>
                <img
                  src="/assets/images/vision-img.png"
                  alt="vision-img"
                />
              </figure>
              <h3>Our Vision</h3>
              <p>
                Ruis aute irure dolor in reprehenderit in voluta esse
                cillum dolore eu fugiat nulla pariatur exceteu occaecat
                cupidatat non proident.
              </p>
              <div className="primary-btn">
                <a href="/contact">Get Started</a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
      <section className="hostiko-team-con w-100 float-left padding-top padding-bottom">
        <div className="container">
          <div className="generic-title text-center">
            <span className="d-block">Hostiko Team</span>
            <h2>Our Team Members</h2>
          </div>

          <div className="hostiko-team-inner-con">
            {[
              {
                img: "hostiko-team-img1.jpg",
                name: "Rohn Doe",
                role: "Assistant Manager",
              },
              {
                img: "hostiko-team-img2.jpg",
                name: "Alina Jenith",
                role: "Hr Manager",
              },
              {
                img: "hostiko-team-img3.jpg",
                name: "Kevin Zelino",
                role: "Manager Director",
              },
            ].map((member, index) => (
              <div className="hostiko-team-member-con" key={index}>
                <figure>
                  <img
                    src={`/assets/images/${member.img}`}
                    alt={member.name}
                  />
                </figure>
                <h6 className="d-block">{member.name}</h6>
                <span className="d-block">{member.role}</span>
                <ul className="list-unstyled mb-0">
                  <li>
                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                  </li>
                  <li>
                    <a href="#"><i className="fab fa-x-twitter"></i></a>
                  </li>
                  <li>
                    <a href="#"><i className="fab fa-linkedin-in"></i></a>
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOSTIKO BENEFITS */}
      <section className="home-hostiko-benefits-main-con w-100 float-left padding-top padding-bottom bg-style1">
        <div className="container">
          <div className="home-hostiko-benefits-inner-con">
            <div className="home-hostiko-benefits-img-con">
              <figure className="mb-0">
                <img
                  src="/assets/images/home-hostiko-benefit-img.png"
                  alt="benefits"
                />
              </figure>
            </div>

            <div className="home-hostiko-benefits-content-con">
              <span className="d-block">Hostiko Benefits</span>
              <h2>
                Level Up Your Web <br /> Hosting With Us
              </h2>

              {[
                "Never Pay for Hosting Migration",
                "Go Live in Minutes",
                "Professional Email & more",
              ].map((title, i) => (
                <div className="home-hostiko-benefit-box" key={i}>
                  <i className="fas fa-check"></i>
                  <div className="home-hostiko-benefit-txt-con">
                    <h6>{title}</h6>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ADVANCED FEATURES */}
      <section className="home-advance-features-main-con w-100 float-left padding-top padding-bottom light-bg">
        <div className="container">
          <div className="generic-title text-center">
            <span className="d-block">Our Features</span>
            <h2>Our Advanced Web Hosting Features</h2>
          </div>

          <div className="home-advance-features-inner-con">
            <div className="home-advance-features-row">
              {[
                "home-advance-feature-img1.png",
                "home-advance-feature-img2.png",
                "home-advance-feature-img3.png",
                "home-advance-feature-img4.png",
                "home-advance-feature-img5.png",
                "home-advance-feature-img6.png",
              ].map((img, index) => (
                <div className="home-advance-feature-box" key={index}>
                  <figure>
                    <img src={`/assets/images/${img}`} alt="feature" />
                  </figure>
                  <h6>Premium Feature</h6>
                  <p>
                    Quis autem vel eum iure reprehenderit qui in ea voluptate.
                  </p>
                  <a href="/blog">Read more</a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SPONSORS */}
      <Footer/>
    </>
  );
}
