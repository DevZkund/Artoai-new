import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import api from '../api/api';

function Pricing() {
    // ✅ Fetch and directly return the raw array
    const fetchPlans = async () => {
        const data = await api.get('api/plan/get-plans');
        console.log('Fetched plans:', data); // Should show array
        return data; // because response.data is the array
    };

    const { data = [], isLoading, error } = useQuery({
        queryKey: ['plans'],
        queryFn: fetchPlans,
    });

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <section className="section-eight pt-0" id="pricing">
            <div className="container">
                <h2 className="xplore">Get a plan and <span>Start Creating</span></h2>4444
                <h3 className="stunnii">
                    Est libero volutpat morbi massa. Lorem sodales adipiscing eu maecenas lectus faucibus pharetra.
                    Vivamus sed sit elementum eu. Venenatis euismod egestas metus enim et sed mauris lectus.
                </h3>

                <div className="row pricing-rows">
                    {data?.map((item, index) => (
                        <div key={index} className="col-xxl-5 col-xl-5 col-lg-6 col-md-9">
                            <div className="price-box-main">
                                <p className="freeplan">{item.name}</p>
                                <h3 className="plan-price">
                                    ₹{item.price}<sub>/{item.duration}</sub>
                                </h3>
                                <Link to="#" className="price-plan-btn">Choose Plan</Link>
                                <ul className="plan-body">
                                    {item.features.map((feature, idx) => (
                                        <li key={idx}>{feature}</li>
                                    ))}
                                </ul>
                                {item.badge && <span className="badge">{item.badge}</span>}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Pricing;
