export default function DomainSearch() {
  return (
    <section className="domain-main-con w-100 float-left">
      <div className="container">
        <div className="domain-inner-con light-bg">
          <div className="generic-title text-center">
            <span>Search Domain</span>
            <h2>Choose Your Domain Today!</h2>
          </div>

          <div className="domain-serach-con">
            <input type="text" placeholder="Search your domain name" />
            <div className="domain-search-btns">
              <button className="search-btn">Search</button>
              <button className="transfer-btn">Transfer</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
