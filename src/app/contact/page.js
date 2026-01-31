import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import SubBanner from "../components/SubBanner";

export default function ContactPage() {
  return (
    <>
      {/* CONTACT INFO SECTION */}
      <Header/>
      <SubBanner
        title="Contact Us"
        subtitle="Have any Query?"
        description="Have a question? Send us a note using the form below and someone from the Hostiko team will be in touch soon."
        image="/assets/images/contact-banner-img.png"
        breadcrumbs={[
          { label: "Home", href: "/contact" },
          { label: "Contact", active: true }
        ]}
      />
      <section className="banner-generic-main-con w-100 float-left">
        <div className="container">
          <div className="banner-generic-outer-con">
            <div
              className="contact-inner-con wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.3s"
            >
              {/* Location */}
              <div className="contact-box light-bg">
                <figure>
                  <Image
                    src="/assets/images/contact-img1.png"
                    alt="location"
                    width={80}
                    height={80}
                  />
                </figure>
                <h6>Our Location</h6>
                <ul className="list-unstyled">
                  <li>
                    <a
                      href="https://maps.app.goo.gl/C288MmZTQDghyudZ7"
                      target="_blank"
                    >
                      121 King Street, Melbourne Victoria 3000 Australia.
                    </a>
                  </li>
                </ul>
                <div className="contact-box-btn">
                  <Link href="/about">Get Directions</Link>
                </div>
              </div>

              {/* Phone */}
              <div className="contact-box light-bg">
                <figure>
                  <Image
                    src="/assets/images/contact-img2.png"
                    alt="phone"
                    width={80}
                    height={80}
                  />
                </figure>
                <h6>Phone Number</h6>
                <ul className="list-unstyled">
                  <li>
                    <a href="tel:+61383766284">+61 3 8376 6284</a>
                  </li>
                  <li>
                    <a href="tel:+80023456789">+800 2345 6789</a>
                  </li>
                </ul>
                <div className="contact-box-btn">
                  <Link href="/about">Call us Now</Link>
                </div>
              </div>

              {/* Email */}
              <div className="contact-box light-bg">
                <figure>
                  <Image
                    src="/assets/images/contact-img3.png"
                    alt="email"
                    width={80}
                    height={80}
                  />
                </figure>
                <h6>Email us at</h6>
                <ul className="list-unstyled">
                  <li>
                    <a href="mailto:info@hostiko.com">info@hostiko.com</a>
                  </li>
                  <li>
                    <a href="mailto:sales@hostiko.com">sales@hostiko.com</a>
                  </li>
                </ul>
                <div className="contact-box-btn">
                  <Link href="/about">Email Now</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="contact-form-main-con w-100 float-left padding-top padding-bottom">
        <div className="container">
          <div
            className="generic-title text-center wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay="0.3s"
          >
            <span className="d-block small-txt">Get in touch</span>
            <h2>Send us a Message</h2>
          </div>

          <div
            className="contact-form-inner-con wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay="0.3s"
          >
            <form className="form-box">
              <ul className="list-unstyled">
                <li>
                  <input type="text" placeholder="Your Name" />
                </li>
                <li>
                  <input type="email" placeholder="Your Email" />
                </li>
                <li>
                  <input type="tel" placeholder="Phone Number" />
                </li>
                <li>
                  <textarea placeholder="Type Your Message" />
                </li>
              </ul>
              <div className="submit-btn generic-btn text-center">
                <button type="submit">Submit Now</button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* GOOGLE MAP */}
      
      <Footer/>
    </>
  );
}
