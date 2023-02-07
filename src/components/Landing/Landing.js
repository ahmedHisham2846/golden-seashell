import './landing.css';

const Landing = ({landingTitle}) => {
  return (
    <div className="landing d-flex justify-content-center align-items-center">
      <div className="container">
        <div className="text-center intro-text">
          <h1 className="big-text text-white">{landingTitle}</h1>
        </div>
      </div>
    </div>
  );
};

export default Landing;
