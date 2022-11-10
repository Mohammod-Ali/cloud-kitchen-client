import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import ReviewRow from './ReviewRow';


const Review = () => {
    const {user} = useContext(AuthContext)
    const [reviews, setReviews] = useState([])

     
    useEffect( () => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
        .then(res => res.json())
        .then(data => setReviews(data))
    },[user?.email])

    const handleDelete = id => {
        fetch(`http://localhost:5000/reviews/${id}`, {
            method: 'DELETE'
        })
        .then(data => {
            console.log(data)
            if(data.deletedCount > 0){
                alert('deleted successfully')
                const remaining = reviews.filter(rvs => rvs._id !== id)
                setReviews(remaining)
            }
        })
    }
    return (
        <div>
            <h2 className='font-bold text-4xl m-3'>{reviews.length} Review about this food.</h2>
            <div className="overflow-x-auto w-full">
  <table className="table w-full mb-5">
    <thead>
      <tr>
        <th>
          
        </th>
        <th>Name</th>
        <th>Review:</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      { 
        reviews.map(review => <ReviewRow
        key={review._id}
        review={review}
        handleDelete={handleDelete}
        ></ReviewRow>)
      }
    </tbody>
 
    
  </table>
</div>
        </div>
    );
};

export default Review;