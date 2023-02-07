import './homeLanding.css';

const Landing = ({landingTitle}) => {
  return (
    <div className="landing home-landing d-flex justify-content-center align-items-center">
      <div className="container">
        <div className="text-center intro-text">
          <h1 className="big-text text-white">{landingTitle}</h1>
          <p className="text-white mt-5">
            THE WORLD IS A BOOK AND THOSE WHO DO NOT TRAVEL READ ONLY A PAGE”
            SAINT AUGUSTINE
          </p>
        </div>
      </div>
    </div>
  );
};

export default Landing;
