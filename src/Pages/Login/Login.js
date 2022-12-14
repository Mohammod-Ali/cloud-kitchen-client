import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import useTitle from "../../hooks/useTitile";

const Login = () => {
    const {login} = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
  useTitle('Login')
  const from = location.state?.from?.pathname || '/'

    const handleLogin = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        login(email, password)
        .then(result => {
            const user = result.user
            console.log(user)
            navigate(from, {replace: true})
        })
        .catch(err => console.error(err))
        form.reset()
    }

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content grid md:grid-cols-2 flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          
          
           <img className="rounded mt-5 w-96" src="https://media.istockphoto.com/id/1299730469/photo/fingerprint-biometric-authentication-button-digital-security-concept.jpg?b=1&s=170667a&w=0&k=20&c=rV_58TI5CwLLQXFzj29H7X_aySxNGbBSqpRSFWNhxuQ=" alt="" />
         
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ">
        <h1 className="text-5xl font-bold m-4">Login now!</h1>
          <form onSubmit={handleLogin} className="card-body">
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
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
                <input className="btn btn-primary" type="submit" value='Login' />
              
            </div>
          </form>
          <p className="my-5 mx-auto">New to Cloud Kitchen <Link className="text-blue-600 font-bold" to='/signup'>Sign Up</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
