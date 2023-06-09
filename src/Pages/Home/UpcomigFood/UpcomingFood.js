import React from 'react';

const UpComingFoodCard = () => {
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl mt-24 mx-8">
  <figure><img src="https://images.unsplash.com/photo-1505253758473-96b7015fcd40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bXV0dG9uJTIwYmlyeWFuaXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60" alt="Album"/></figure>
  <div className="card-body">
    <h2 className="card-title font-bold text-4xl mb-4">Up-coming Food Items!</h2>
    <p>We have many items of food, which are different from the others restaurant in front of us. And The many food items are lunching in our kitchen very soon.</p>
    <div className="card-actions justify-end">
    <label htmlFor="bike-modal" className="btn btn-secondary">Show More</label>

    {/* CArd modal */}
    <input type="checkbox" id="bike-modal" className="modal-toggle" />
<label htmlFor="bike-modal" className="modal cursor-pointer">
  <label className="modal-box relative" htmlFor="">
    <h3 className="text-lg font-bold">Thank You!</h3>
    <p className="py-4">Our new food items are coming soon. Please stay with us.</p>
  </label>
</label>
    </div>
  </div>
</div>
    );
};

export default UpComingFoodCard;