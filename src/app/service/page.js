import Footer from "../components/Footer";
import Header from "../components/Header";
import SubBanner from "../components/SubBanner";

export default function ServicePage() {
  return (
    <>
    <Header/>
    <SubBanner
            title="Services"
            subtitle="We Guarantee"
            description="We Guarantee your site will run Quicker on our Cloud than normal hosting, or your Money back."
            image="/assets/images/contact-banner-img.png"
            breadcrumbs={[
              { label: "Home", href: "/service" },
              { label: "Services", active: true }
            ]}
          />
      {/* HOSTIKO TEAM SECTION */}
   <section className="domain-main-con w-100 float-left">
  <div className="container">
    <div className="domain-inner-con light-bg">

      {/* TITLE */}
      <div className="generic-title text-center">
        <span>About Services</span>
        <h2>Choose Your Services Today!</h2>
      </div>

      {/* CONTENT (REPLACED SEARCH) */}
      <div className="text-center mt-4">
        <h4>Powerful & Reliable Hosting Solutions</h4>
        <p className="mt-2">
          We provide fast, secure, and scalable hosting services designed to
          meet your business needs. From startups to enterprises, our solutions
          ensure high performance, maximum uptime, and complete peace of mind.
        </p>
        <p>
          Choose from a wide range of hosting plans backed by expert support and
          advanced infrastructure.
        </p>
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
