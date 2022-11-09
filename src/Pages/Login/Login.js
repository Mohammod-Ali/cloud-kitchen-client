import React from "react";

const Login = () => {

    const handleLogin = event => {
        event.preventDefault()
    }

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content grid md:grid-cols-2 flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          
          
           <img className="rounded mt-5 w-96" src="https://media.istockphoto.com/id/1299730469/photo/fingerprint-biometric-authentication-button-digital-security-concept.jpg?b=1&s=170667a&w=0&k=20&c=rV_58TI5CwLLQXFzj29H7X_aySxNGbBSqpRSFWNhxuQ=" alt="" />
         
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
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
        </div>
      </div>
    </div>
  );
};

export default Login;
