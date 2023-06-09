import React from "react";

const FoodCart = () => {
  return (
    <div className="grid gl:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
      <div className="hero m-5 min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://images.unsplash.com/photo-1608684363982-d2d470f0b4bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG11dHRvbiUyMGJpcnlhbml8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">Mutton Curry</h1>
            <p className="py-6">
            Mutton Curry is a one pot dish where mutton is marinated and cooked with plenty of spices, herbs, onions, tomatoes and yogurt. It is basically a curried dish popular in Indian Sub-continent. Indian Cuisine is diverse and every dish is made in a zillion ways.
            </p>
           
          </div>
        </div>
      </div>
      <div className="hero m-5 min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://images.unsplash.com/photo-1666190092689-e3968aa0c32c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG11dHRvbiUyMGJpcnlhbml8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">Special Rice</h1>
            <p className="py-6">
            Rice is a cereal crop belonging to the family Poecae. Rice being a tropical crop can be grown during the two distinct seasons (dry and wet) of the year provided...
            </p>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCart;
