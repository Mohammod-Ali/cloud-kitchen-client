import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitile';
import ReviewRow from './ReviewRow';


const Review = () => {
    const {user} = useContext(AuthContext)
    const [reviews, setReviews] = useState([])
    useTitle('Review')

     
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

    const handleUpdate = id => {
        fetch(`http://localhost:5000/reviews/${id}`, {
            method: 'PATCH', 
            headers: {
                'content-type': 'application/json'
            }, 
            body: JSON.stringify({status: 'Approved'})
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount > 0){
                const remaining = reviews.filter(rvs => rvs._id !== id)
                const approving = reviews.find(rvs => rvs._id === id)
                approving.status = "Approved"

                const newReview = [ ...remaining, approving]
                setReviews(newReview)
            }
        })

    }

    return (
        <div>
            {
                reviews.length? <h2 className='font-bold text-4xl m-3'>{reviews.length} Review about this food.</h2>
                :
                <h2 className='font-bold text-4xl m-3'>No Reviews were added</h2>
            }
            
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
        handleUpdate={handleUpdate}
        ></ReviewRow>)
      }
    </tbody>
 
    
  </table>
</div>
        </div>
    );
};

export default Review;