import React, { useEffect, useState } from 'react';

const ReviewRow = ({review, handleDelete, handleUpdate}) => {
    const {foodName, name, image, message, status, _id } = review;
    console.log(review)

    return (
        <tr>
        <th>
          
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={image} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{name}</div>
              <div className="text-sm opacity-50">Food Name: {foodName}</div>
            </div>
          </div>
        </td>
        <td>
         {message}
          
          
        </td>
        <td>
          <button onClick={() => handleUpdate(_id)} className='btn btn-outline'>Update</button>
          <button onClick={() => handleDelete(_id)} className='btn'>X</button>
        </td>
        
      </tr>
    );
};

export default ReviewRow;