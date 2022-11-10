import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import { FaGoogle } from "react-icons/fa";

const SignUp = () => {
    const {createUser, loginProvider} = useContext(AuthContext)
  const handleSignUn = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
    .then(result => {
        const user = result.user
        console.log(user)
    })
    .catch(err => console.error(err))
    form.reset()
  };

  const provider = new GoogleAuthProvider()

  const handleGoogleLogin = () => {
    loginProvider(provider)
    .then(result => {
      const user = result.user;
      console.log(user)
    })
    .catch(err => console.error(err))
  }


  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content grid md:grid-cols-2 flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <img
            className="rounded mt-5 w-96"
            src="https://media.istockphoto.com/id/1322595946/photo/woman-using-access-window-to-log-in-entering-password-on-laptop-sign-up-username-password.jpg?b=1&s=170667a&w=0&k=20&c=I6LIWxgWzTrthrIIBPVXhK242i03_XovgeAcrYtAExo="
            alt=""
          />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ">
          <h1 className="text-5xl font-bold m-4">Sign Up here!</h1>
          <form onSubmit={handleSignUn} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              
            </div>
            <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="Sign Up" />
            </div>
            <button onClick={handleGoogleLogin} className="btn btn-outline "><FaGoogle className="m-2"></FaGoogle> Sign In with Google</button>
   
          </form>
          <p className="my-5 mx-auto">
            Already have an account, Please{" "}
            <Link className="text-blue-600 font-bold" to="/login">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
