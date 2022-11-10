import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitile';
import Service from './Service';

const Services = () => {
    const services = useLoaderData()
    useTitle('Services')
    
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 my-10'>
            {
                services.map(service => <Service
                key={service._id}
                service={service}
                ></Service>)
            }
        </div>
    );
};

export default Services;