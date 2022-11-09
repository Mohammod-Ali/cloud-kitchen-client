import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Review = () => {
    const {user} = useContext(AuthContext)
    const [review, setReview] = useState({})

    const url = 
    useEffect( () => {
        fetch(`http://localhost:5000/reviews?email=${user.email}`)
        .then(res => res.json())
        .then(data => setReview(data))
    },[user?.email])

    return (
        <div>
            <h2>You have {review.length}</h2>
        </div>
    );
};

export default Review;