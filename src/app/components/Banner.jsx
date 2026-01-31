export default function Banner() {
  return (
    <section className="banner-main-con w-100 float-left">
      <div className="container">
        <div className="banner-inner-con">
          <div className="banner-text-con">
            <span>No.1 Hosting Platform of 2022</span>
            <h1>Premium Web Hosting For Every Website.</h1>
            <p>
              We make sure your website is fast, secure & always up.
            </p>
            <div className="banner-btns">
              <div className="primary-btn">
                <a href="#">Get Started</a>
              </div>
              <div className="secondary-btn">
                <a href="#">Learn More</a>
              </div>
            </div>
          </div>

          <div className="banner-img-con">
            <img src="/assets/images/banner-main-img.png" alt="banner" />
          </div>
        </div>
      </div>
    </section>
  );
}
