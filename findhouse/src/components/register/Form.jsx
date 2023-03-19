import Link from "next/link";
import { useEffect, useState } from "react";
const axios = require("axios");

const Form = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [messageSignup, setMessageSignup] = useState("");
  const [statusSignup, setStatusSignup] = useState();

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      console.log(name, username, email, password);
      const data = {
        name: name,
        username: username,
        email: email,
        password: password,
      };
      console.log("dta: ",data);
      axios
        .post(
          "https://makanmitra.dthree.in/api/users/register-broker",

          data,

          { headers: { "Content-Type": "application/json" } }
        )
        .then((res) => {
          console.log(res);
          //   console.log(res.data.message);
          setMessageSignup(res.data.message);
        })
        .catch((error) => {
          console.log(error);
          setMessageSignup(error.response.data.message);
          setStatusSignup(error.response.status);
        });

      console.log("!!!");
      //   console.log(response.data);
    } catch (error) {
      console.log(error);
      setMessageSignup(error.response.data.message);
      setStatusSignup(error.response.status);
    }
  };
  return (
    <form action="#">
      <div className="heading text-center" style={{ marginTop: "5rem" }}>
        <h3>Register as Broker</h3>
        {/* <p className="text-center">
          Already have an account?{" "}
          <Link href="/login">
            <a className="text-thm">Login</a>
          </Link>
        </p> */}
      </div>
      {/* End .heading */}

      <div className="form-group input-group ">
        <input
          type="text"
          className="form-control"
          required
          name="name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <div className="input-group-prepend">
          <div className="input-group-text">
            <i className="flaticon-user"></i>
          </div>
        </div>
      </div>
      <div className="form-group input-group ">
        <input
          type="text"
          className="form-control"
          required
          name="username"
          placeholder="User Name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <div className="input-group-prepend">
          <div className="input-group-text">
            <i className="flaticon-user"></i>
          </div>
        </div>
      </div>
      {/* End .form-group */}

      <div className="form-group input-group  ">
        <input
          type="email"
          className="form-control"
          required
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className="input-group-prepend">
          <div className="input-group-text">
            <i className="fa fa-envelope-o"></i>
          </div>
        </div>
      </div>
      {/* End .form-group */}

      <div className="form-group input-group  ">
        <input
          type="password"
          className="form-control"
          required
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="input-group-prepend">
          <div className="input-group-text">
            <i className="flaticon-password"></i>
          </div>
        </div>
      </div>
      {/* End .form-group */}

      {/* <div className="form-group input-group  ">
        <input
          type="password"
          className="form-control"
          required
          placeholder="Re-enter password"
        />
        <div className="input-group-prepend">
          <div className="input-group-text">
            <i className="flaticon-password"></i>
          </div>
        </div>
      </div> */}
      {/* End .form-group */}

      <div className="form-group form-check custom-checkbox mb-3">
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          required
          id="terms"
        />
        <label className="form-check-label form-check-label" htmlFor="terms">
          I have read and accept the Terms and Privacy Policy?
        </label>
      </div>
      {/* End .form-group */}

      <button
        type="submit"
        className="btn btn-log w-100 btn-thm"
        onClick={handleSignUp}
      >
        Register
      </button>
      {messageSignup && (
        <div className="form-group">
          <div
            className={
              !statusSignup ? "alert alert-success" : "alert alert-danger"
            }
            role="alert"
          >
            {messageSignup}
          </div>
        </div>
      )}
      {/* login button */}

      {/* <div className="divide">
        <span className="lf_divider">Or</span>
        <hr />
      </div> */}
      {/* devider */}

      {/* <div className="row mt25">
        <div className="col-lg-6">
          <button
            type="submit"
            className="btn btn-block color-white bgc-fb mb0 w-100"
          >
            <i className="fa fa-facebook float-start mt5"></i> Facebook
          </button>
        </div>
        {/* End .col */}

      {/* <div className="col-lg-6">
          <button
            type="submit"
            className="btn btn-block color-white bgc-gogle mb0 w-100"
          >
            <i className="fa fa-google float-start mt5"></i> Google
          </button>
        </div> */}
      {/* End .col */}
      {/* </div>  */}
      {/* more signin options */}
    </form>
  );
};

export default Form;
