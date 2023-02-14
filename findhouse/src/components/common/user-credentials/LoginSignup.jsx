import Link from "next/link";
import { useEffect, useState } from "react";
const axios = require("axios");

const LoginSignup = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [usernameLogin, setUsernameLogin] = useState("");
  const [passwordLogin, setPasswordLogin] = useState("");
  const [messageLogin, setMessageLogin] = useState("");
  const [messageSignup, setMessageSignup] = useState("");
  const [statusLogin, setStatusLogin] = useState();
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
      //   const response = await axios.post(
      //     "https://makanmitra.dthree.in/api/users/register",
      //     { data }
      //   );
      axios
        .post(
          "https://makanmitra.dthree.in/api/users/register",

          data,

          { headers: { "Content-Type": "application/json" } }
        )
        .then((res) => {
          console.log(res);
          //   console.log(res.data.message);
          setMessageSignup(res.data.message)
        })
        .catch((error) => {
          console.log(error);
          setMessageSignup(error.response.data.message)
          setStatusSignup(error.response.status)
        });

      console.log("!!!");
      //   console.log(response.data);
    } catch (error) {
      console.log(error);
      setMessageSignup(error.response.data.message)
      setStatusSignup(error.response.status)
    }
  };
  const handleLogIn = async (e) => {
    try {
      console.log(usernameLogin, passwordLogin);
      const data = {
        username: usernameLogin,
        password: passwordLogin,
      };
      // const response = await axios.post(
      //     "https://makanmitra.dthree.in/api/users/login",
      //     data
      // );
      axios
        .post(
          "https://makanmitra.dthree.in/api/users/login",

          data,

          { headers: { "Content-Type": "application/json" } }
        )
        .then((res) => {
          console.log(res);
          setMessageLogin(res.data.message)
          localStorage.setItem("token", res.data.token.split(" ")[1]);
          window.location.reload(false)
        })
        .catch((error) => {
            console.log(error);
            setMessageLogin(error.response.data.message)
            setStatusLogin(error.response.status)
        });
        
    } catch (error) {
        console.log(error);
        setMessageLogin(error.response.data.message)
        setStatusLogin(error.response.status)
    }
    e.preventDefault();
  };

//   useEffect(() => {
//     const timeout = setTimeout(() => {
//       setMessageLogin("")
//       setMessageSignup("")
//       setStatusLogin()
//       setStatusSignup()
//     }, 500)

//     return () => clearTimeout(timeout)

//   }, [messageLogin,messageSignup,statusLogin,statusSignup])

  return (
    <div className="modal-content">
      <div className="modal-header">
        <button
          type="button"
          data-bs-dismiss="modal"
          aria-label="Close"
          className="btn-close"
        ></button>
      </div>
      {/* End .modal-header */}

      <div className="modal-body container pb20">
        <div className="row">
          <div className="col-lg-12">
            <ul className="sign_up_tab nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  id="home-tab"
                  data-bs-toggle="tab"
                  href="#home"
                  role="tab"
                  aria-controls="home"
                  aria-selected="true"
                >
                  Login
                </a>
              </li>
              {/* End login tab */}

              <li className="nav-item">
                <a
                  className="nav-link"
                  id="profile-tab"
                  data-bs-toggle="tab"
                  href="#profile"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="false"
                >
                  Register
                </a>
              </li>
              {/* End Register tab */}
            </ul>
            {/* End .sign_up_tab */}
          </div>
        </div>
        {/* End .row */}

        <div className="tab-content container" id="myTabContent">
          <div
            className="row mt25 tab-pane fade show active"
            id="home"
            role="tabpanel"
            aria-labelledby="home-tab"
          >
            <div className="col-lg-6 col-xl-6">
              <div className="login_thumb">
                <img
                  className="img-fluid w100"
                  src="/assets/images/resource/login.jpg"
                  alt="login.jpg"
                />
              </div>
            </div>
            {/* End col */}

            <div className="col-lg-6 col-xl-6">
              <div className="login_form">
                <form action="#">
                  <div className="heading">
                    <h4>Login</h4>
                  </div>
                  {/* End heading */}

                  {/* <div className="row mt25">
                                        <div className="col-lg-12">
                                            <button
                                                type="submit"
                                                className="btn btn-fb w-100"
                                            >
                                                <i className="fa fa-facebook float-start mt5"></i>{" "}
                                                Login with Facebook
                                            </button>
                                        </div>
                                        <div className="col-lg-12">
                                            <button
                                                type="submit"
                                                className="btn btn-googl w-100"
                                            >
                                                <i className="fa fa-google float-start mt5"></i>{" "}
                                                Login with Google
                                            </button>
                                        </div>
                                    </div> */}
                  {/* End .row */}

                  <hr />

                  <div className="input-group mb-2 mr-sm-2">
                    <input
                      type="text"
                      className="form-control"
                      id="inlineFormInputGroupUsername2"
                      placeholder="User Name"
                      value={usernameLogin}
                      onChange={(e) => setUsernameLogin(e.target.value)}
                    />
                    <div className="input-group-prepend">
                      <div className="input-group-text">
                        <i className="flaticon-user"></i>
                      </div>
                    </div>
                  </div>
                  {/* End input-group */}

                  <div className="input-group form-group">
                    <input
                      type="password"
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="Password"
                      value={passwordLogin}
                      onChange={(e) => setPasswordLogin(e.target.value)}
                    />
                    <div className="input-group-prepend">
                      <div className="input-group-text">
                        <i className="flaticon-password"></i>
                      </div>
                    </div>
                  </div>
                  {/* End input-group */}

                  <div className="form-group form-check custom-checkbox mb-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="remeberMe"
                    />
                    <label
                      className="form-check-label form-check-label"
                      htmlFor="remeberMe"
                    >
                      Remember me
                    </label>

                    <a className="btn-fpswd float-end" href="#">
                      Lost your password?
                    </a>
                  </div>
                  {/* End remember me checkbox */}

                  <button
                    type="submit"
                    className="btn btn-log w-100 btn-thm"
                    onClick={handleLogIn}
                  >
                    Log In
                  </button>
                  {/* End submit button */}
                  {messageLogin && (
                    <div className="form-group">
                      <div
                        className={
                            !statusLogin ? "alert alert-success" : "alert alert-danger"
                        }
                        role="alert"
                      >
                        {messageLogin}
                      </div>
                    </div>
                  )}

                  <p className="text-center">
                    Dont have an account?{" "}
                    <a className="text-thm" href="#">
                      Register
                    </a>
                  </p>
                </form>
              </div>
              {/* End .col .login_form */}
            </div>
          </div>
          {/* End .tab-pane */}

          <div
            className="row mt25 tab-pane fade"
            id="profile"
            role="tabpanel"
            aria-labelledby="profile-tab"
          >
            <div className="col-lg-6 col-xl-6">
              <div className="regstr_thumb">
                <img
                  className="img-fluid w100"
                  src="/assets/images/resource/regstr.jpg"
                  alt="regstr.jpg"
                />
              </div>
            </div>
            {/* End . left side image for register */}

            <div className="col-lg-6 col-xl-6">
              <div className="sign_up_form">
                <div className="heading">
                  <h4>Register</h4>
                </div>
                {/* End .heading */}

                <form action="#">
                  {/* <div className="row ">
                                        <div className="col-lg-12">
                                            <button
                                                type="submit"
                                                className="btn btn-fb w-100"
                                            >
                                                <i className="fa fa-facebook float-start mt5"></i>{" "}
                                                Login with Facebook
                                            </button>
                                        </div>
                                        <div className="col-lg-12">
                                            <button
                                                type="submit"
                                                className="btn btn-googl w-100"
                                            >
                                                <i className="fa fa-google float-start mt5"></i>{" "}
                                                Login with Google
                                            </button>
                                        </div>
                                    </div> */}
                  {/* End .row */}

                  <hr />

                  <div className="form-group input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputName"
                      placeholder="Name"
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                    <div className="input-group-prepend">
                      <div className="input-group-text">
                        <i className="flaticon-user"></i>
                      </div>
                    </div>
                  </div>
                  <div className="form-group input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputUserName"
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
                  {/* End .row */}

                  <div className="form-group input-group  mb-3">
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail2"
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
                  {/* End .row */}

                  <div className="form-group input-group  mb-3">
                    <input
                      type="password"
                      className="form-control"
                      id="exampleInputPassword2"
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
                  {/* End .row */}

                  {/* <div className="form-group input-group  mb-3">
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="exampleInputPassword3"
                                            placeholder="Re-enter password"
                                        />
                                        <div className="input-group-prepend">
                                            <div className="input-group-text">
                                                <i className="flaticon-password"></i>
                                            </div>
                                        </div>
                                    </div> */}
                  {/* End .row */}

                  {/* <div className="form-group ui_kit_select_search mb-3">
                                        <select
                                            className="form-select"
                                            data-live-search="true"
                                            data-width="100%"
                                        >
                                            <option data-tokens="SelectRole">
                                                Single User
                                            </option>
                                            <option data-tokens="Agent/Agency">
                                                Agent
                                            </option>
                                            <option data-tokens="SingleUser">
                                                Multi User
                                            </option>
                                        </select>
                                    </div> */}
                  {/* End from-group */}

                  <div className="form-group form-check custom-checkbox mb-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="terms"
                    />
                    <label
                      className="form-check-label form-check-label"
                      htmlFor="terms"
                    >
                      I have accept the Terms and Privacy Policy.
                    </label>
                  </div>
                  {/* End from-group */}

                  <button
                    type="submit"
                    className="btn btn-log w-100 btn-thm"
                    onClick={handleSignUp}
                  >
                    Sign Up
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
                  {/* End btn */}

                  <p className="text-center">
                    Already have an account?{" "}
                    <a className="text-thm" href="#">
                      Log In
                    </a>
                  </p>
                </form>
                {/* End .form */}
              </div>
            </div>
            {/* End register content */}
          </div>
          {/* End .tab-pane */}
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
