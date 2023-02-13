import { Helmet } from "react-helmet-async";
import ScrollToTop from "../components/ScrollToTop";
import Navigationbar from "../components/Navigationbar/Navigationbar";
import HomeLanding from "../components/HomeLanding/HomeLanding";
import DestinationSlider from "../components/DestinationSlider/DestinationSlider";
import Partners from "../components/Partners/Partners";
import Footer from "../components/Footer/Footer";
import About from "../components/About/About";

// navbar
window.onscroll = function () {
  let navbar = document.querySelector("header");
  navbar.classList.toggle("my-stiky", window.scrollY > 5);
};

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <ScrollToTop />
      <Navigationbar />
      <HomeLanding landingTitle="GOLDEN SEASHELL" />
      <About />
      <DestinationSlider />
      <Partners />
      <Footer />
    </div>
  );
};

export default Home;
