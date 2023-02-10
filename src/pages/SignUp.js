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
      <title>Sign Up</title>
    </Helmet>
      <Navigationbar/>
      <Landing landingTitle="Sign Up" />
      <div className="signp-up-in mt-5 mb-5">
        <div className="container">
          <div className="d-flex justify-content-center align-items-center flex-column gap-5">
            <form className="sign-card text-black d-flex flex-column gap-4">
              <h1 className="text-center">Sign up</h1>
              <div className="field">
                <label className="field-title" htmlFor="txtName">
                  Name
                </label>
                <input type="text" name="txtName" id="txtName" />
              </div>

              <div className="field">
                <label className="field-title" htmlFor="txtEmail">
                  Email
                </label>
                <input type="email" name="txtEmail" id="txtEmail" />
              </div>

              <div className="field">
                <label className="field-title" htmlFor="txtPhone">
                  Phone
                </label>
                <input type="text" name="txtPhone" id="txtPhone" />
              </div>

              <div className="field">
                <label className="field-title" htmlFor="txtPassword">
                  Password
                </label>
                <input type="text" name="txtPassword" id="txtPassword" />
              </div>

              <div className="field">
                <label className="field-title" htmlFor="txtCPassword">
                  Confirm Password
                </label>
                <input type="text" name="txtCPassword" id="txtCPassword" />
              </div>

              <div className="field">
                <input type="checkbox" name="agree" id="agree" />
                <label className="ms-2 agree" htmlFor="agree">
                  I agree the terms and conditions
                </label>
              </div>
              <input
                className="text-black main-btn"
                type="submit"
                value="CREAT AN ACCOUNT"
              />
            </form>
            <h4 className="text-center">
              Already have an account please
              <Link className="text-decoration-none ps-2" to="/login">
                Login
              </Link>
            </h4>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default SignUp;
