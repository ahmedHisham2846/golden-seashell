import "./signUpIn.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
// Components
import Navigationbar from "../components/Navigationbar/Navigationbar";
import Landing from "../components/Landing/Landing";
import Footer from "../components/Footer/Footer";

const SignUp = () => {
  return (
    <>
    <Helmet>
      <title>Login</title>
    </Helmet>
      <Navigationbar />
      <Landing landingTitle="login" />
      <div className="signp-up-in mt-5 mb-5">
        <div className="container">
          <div className="d-flex justify-content-center align-items-center flex-column gap-5">
            <form className="sign-card text-black d-flex flex-column gap-4">
              <h1 className="text-center">Login</h1>

              <div className="field">
                <label className="field-title" htmlFor="txtEmail">
                  Email
                </label>
                <input type="email" name="txtEmail" id="txtEmail" />
              </div>

              <div className="field">
                <label className="field-title" htmlFor="txtPassword">
                  Password
                </label>
                <input type="text" name="txtPassword" id="txtPassword" />
              </div>
              <Link className="forget text-decoration-none text-black" to="#">
                Forget Password?
              </Link>
              <input
                className="text-black main-btn"
                type="submit"
                value="Login"
              />
            </form>
            <h4 className="text-center">
              Don’t have an account please
              <Link className="text-decoration-none ms-2" to="/signUp">
                Sign up
              </Link>
            </h4>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SignUp;
