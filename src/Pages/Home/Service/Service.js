import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from './ServiceCard';



const Service = () => {
    const [services, setServices] = useState([])

    useEffect( () => {
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])

    return (
        <div className='mb-10'>
            <div className='text-center mt-16'>
            <h2 className='text-5xl font-bold mb-3'>Our Services</h2>
            <p>We provide best food quality. The food is so much healthy. <br /> I follow the best hygienic rule while preparing this food. </p>
            </div>
            
          
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 my-10'>
                {
                    services.slice(0, 3).map(service=> 
        
                        <ServiceCard
                    key={service._id}
                    service={service}
                    
                    ></ServiceCard>
                    )
                }
            </div>
            <div className='text-center'>
            <button className="btn btn-secondary"><Link to='/services'>See all</Link></button>

            </div>
            
        </div>
    );
};

export default Service;