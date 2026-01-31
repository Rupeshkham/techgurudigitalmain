export default function HostingPlans() {
  return (
    <section className="hosting-types-main-con padding-top padding-bottom">
      <div className="container">
        <div className="generic-title text-center">
          <span>Pricing Plan</span>
          <h2>Best Pricing Plans</h2>
        </div>

        <div className="hosting-types-inner-con">
          <div className="hosting-type-box">
            <img src="/assets/images/plan-img1.png" />
            <h4>Shared Hosting</h4>
            <p>Fast SSD Hosting</p>
            <div className="primary-btn">
              <a href="#">Select Plan</a>
            </div>
          </div>

          <div className="hosting-type-box">
            <img src="/assets/images/plan-img2.png" />
            <h4>Dedicated Hosting</h4>
            <p>High Performance</p>
            <div className="primary-btn">
              <a href="#">Select Plan</a>
            </div>
          </div>

          <div className="hosting-type-box">
            <img src="/assets/images/plan-img3.png" />
            <h4>VPS Hosting</h4>
            <p>Powerful VPS</p>
            <div className="primary-btn">
              <a href="#">Select Plan</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
