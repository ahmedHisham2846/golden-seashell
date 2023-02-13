import "./feedback.css";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";
// Components
import Navigationbar from "../components/Navigationbar/Navigationbar";
import Landing from "../components/Landing/Landing";
import Footer from "../components/Footer/Footer";
import Partners from "../components/Partners/Partners";
import StartsRate from "../components/StartsRate/StartsRate";

const Feedback = () => {
  return (
    <>
      <Helmet>
        <title>Feedback</title>
      </Helmet>
      <ScrollToTop />
      <Navigationbar />
      <Landing landingTitle="feedback" />
      <div className="feedback mt-5">
        <div className="container">
          <div className="feedback-order mb-3 d-flex justify-content-end">
            <select className="text-center" name="order" id="order">
              <option value="Newest">Newest first</option>
              <option value="Oldest">Oldest first</option>
            </select>
          </div>
          <div className="all-feedbacks d-flex flex-wrap justify-content-between">
            
            <div className="feedback-card p-4  mb-4">
              <div className="rate-section rate-stars mb-4 d-flex justify-content-between">
                <h2>Maldives</h2>
                <StartsRate ratedStart5='yellow-class' />
              </div>
              <div className="rate-section">
                <p className="rate-comment pb-4 text-white">
                  أحلى ترتيب عشته من طرف الشركة وتعامل راقي من الشركة وسهولة في
                  التواصل تقييمي للشركة أكثر من خمس نجوم
                </p>
              </div>
              <h2 className="rate-person">Khalid Alhosani</h2>
            </div>

            <div className="feedback-card p-4 mb-4">
              <div className="rate-section rate-stars mb-4 d-flex justify-content-between">
                <h2>Maldives</h2>
                <StartsRate ratedStart4='yellow-class' />
              </div>
              <div className="rate-section">
                <p className="rate-comment pb-4 text-white">
                  رحله جدا جميله و بو عوض انسان جدا محترم و اسلوبه راقي بالكلام
                  و يعطيك كل شي عن الحجز بالتفصيل و للامانه الباكيج الي سواه لي
                  جدا جبار و ما حصلت مثل هالعرض باي مكان و انصح اي واحد ينوي
                  يسافر للمالديف ان يحجز عن طريقه انسان جدا راقي بالتعامل و
                  يعطيك ابديت مستمر عن الحجوزات و الرحله
                </p>
              </div>
              <h2 className="rate-person">khaled shamsaldeen</h2>
            </div>
            
            <div className="feedback-card p-4  mb-4">
              <div className="rate-section rate-stars mb-4 d-flex justify-content-between">
                <h2>Maldives</h2>
                <StartsRate ratedStart5='yellow-class' />
              </div>
              <div className="rate-section">
                <p className="rate-comment pb-4 text-white">
                  أحلى ترتيب عشته من طرف الشركة وتعامل راقي من الشركة وسهولة في
                  التواصل تقييمي للشركة أكثر من خمس نجوم
                </p>
              </div>
              <h2 className="rate-person">Khalid Alhosani</h2>
            </div>

            <div className="feedback-card p-4 mb-4">
              <div className="rate-section rate-stars mb-4 d-flex justify-content-between">
                <h2>Maldives</h2>
                <StartsRate ratedStart4='yellow-class' />
              </div>
              <div className="rate-section">
                <p className="rate-comment pb-4 text-white">
                  رحله جدا جميله و بو عوض انسان جدا محترم و اسلوبه راقي بالكلام
                  و يعطيك كل شي عن الحجز بالتفصيل و للامانه الباكيج الي سواه لي
                  جدا جبار و ما حصلت مثل هالعرض باي مكان و انصح اي واحد ينوي
                  يسافر للمالديف ان يحجز عن طريقه انسان جدا راقي بالتعامل و
                  يعطيك ابديت مستمر عن الحجوزات و الرحله
                </p>
              </div>
              <h2 className="rate-person">khaled shamsaldeen</h2>
            </div>

          </div>

          <div className="buttons d-flex flex-lg-row flex-column justify-content-cecnter justify-content-lg-between justify-content-xl-between ps-5 pe-5 mt-3 mb-5">
            <Link className="button mb-5 m-lg-0 text-center" to="/contact">
              Contact Us
            </Link>
            <Link className="button text-center" to="/giveFeedback">
              Give Feedback
            </Link>
          </div>
        </div>
      </div>
      <Partners />
      <Footer />
    </>
  );
};

export default Feedback;
