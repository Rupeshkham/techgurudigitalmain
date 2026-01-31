
import Banner from "./components/Banner";
import DomainSearch from "./components/DomainSearch";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeAdvanceFeatures from "./components/HomeAdvanceFeatures";
import HostikoBenefits from "./components/HostikoBenefits";
import HostingPlans from "./components/HostingPlans";
import ServersSection from "./components/ServersSection";

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <DomainSearch />
      <HostingPlans />
      <HomeAdvanceFeatures/>
      <HostikoBenefits />
      <ServersSection />
      <Footer/>
    </>
  );
}
