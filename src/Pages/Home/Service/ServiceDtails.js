import React, { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";

const ServiceDetails = () => {
    const { img, title, price, description, _id } = useLoaderData()
    const { user } = useContext(AuthContext)

    const handleReview = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const image = form.image.value;
        const message = form.message.value;

        const review = {
            food: _id,
            foodName: title,
            name,
            image,
            message
        }



    }

  return (
    <div>
          <div className="hero min-h-screen bg-base-200 mb-20">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img alt="" src={img} className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">{title}</h1>
      <p className="py-6">{description}</p>
      <br />
      <p className="font-bold text-3xl">Price: ${price}</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
{/* review input section */}
<div>
    {
        user?<div>
        <h2 className="text-4xl font-semibold m-4">Add a Review about {title}</h2>
        <form onSubmit={handleReview}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3  lg:my-5 lg:mx-5">
        <input defaultValue={user?.name} name="name" type="text" placeholder="Name" className="input input-bordered w-full" />
        <input name="email" type="email" defaultValue={user?.email} placeholder="Email" className="input input-bordered w-full" />
        <input name="image" type="text" placeholder="Your Image link" className="input input-bordered w-full" />
        <input name="message" type="text" placeholder="Your Review about this Food" className="input input-bordered w-full" />
        </div>
        <input className="btn btn-accent m-5" type="submit" value='place your review' />
        </form>
        </div>  
         :
        <>
        <Link className="text-4xl font-semibold m-4" to='/login'>Please Login.</Link>
        </>
    }
    
</div>

    </div>
  );
};

export default ServiceDetails;
