import React from "react";



const ServiceCard = ({ service}) => {
  const { img, title, price, description } = service;
  console.log(service)
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
          
          <button className="btn btn-outline btn-error">Details</button>

          
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
