import React from "react";
import { Link } from "react-router-dom";



const ServiceCard = ({ service}) => {
  const { _id, img, title, price, description } = service;
  
  return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description.slice(0, 100)}{'...'}</p>
        <div className="card-actions justify-between">
        <h4 className="font-bold">Price: ${price}</h4>
          
        <Link to={`/services/${_id}`}>
        <button className="btn btn-outline btn-error">Details</button>
        </Link>
          
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
