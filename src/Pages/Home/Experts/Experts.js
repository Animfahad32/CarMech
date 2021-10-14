import React, { useEffect, useState } from 'react';
import Expert from '../Expert/Expert';

const Experts = () => {
    const [experts, setExperts] = useState([]);
    useEffect(()=> { 
        fetch('experts.json')
        .then(result => result.json())
        .then(data => setExperts(data))
    },[])
    return (
        <div className="container mt-5" id="experts">
            <h1 className="headings">Our Experts</h1>
            <div className="row row-cols-1 row-cols-lg-3 g-4">
                {
                    experts.map(expert => <Expert
                    key={expert.id}
                    expert={expert}
                    ></Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;