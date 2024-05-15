import React, { useContext, useEffect, useState } from 'react';
import { ServerContext } from '../../../providers/ServerLinkProveder';
import axios from 'axios';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';

const ServicesMarquee = () => {
    const { serverLink } = useContext(ServerContext)
    const [services, setServices] = useState([])
    const [dataLoading, setDataLoading] = useState(false)
    useEffect(() => {
        setDataLoading(true)
        async function fetchData() {
            try {
                const response = await axios.get(`${serverLink}/services/marquee`)
                setServices(response.data)
                // console.log(response.data);
            } catch (error) {
                console.error(error);
            } finally {
                setDataLoading(false)
            }
        }
        fetchData()
    }, [])

    return (
        <div className='mt-28'>
            <h3 className='text-3xl mb-4 text-center font-semibold'>You can find all kinds of home repair services here</h3>
            <div>
                <Marquee className='' pauseOnHover={true}>
                    {
                        services.map(service => <MarqueeCard key={service._id} service={service}></MarqueeCard>)
                    }
                </Marquee>
            </div>
        </div>
    );
};

export default ServicesMarquee;


function MarqueeCard({ service }) {
    const { serviceType, image, description } = service
    return (
        <Link>
            <div className="h-60 w-96 rounded-md shadow-xl m-6 bg-cover relative" style={{ backgroundImage: `url(${image})` }}>
                <div className="absolute inset-0 flex justify-center rounded-md">
                    <div className="absolute inset-0 bg-gradient-to-b from-black to-[#0000001e] opacity-90 rounded-md"></div>
                    {/* Your text content */}
                    <div className="z-10 p-4 mb-0 rounded-md">
                        <span className="text-slate-50"><span className="text-2xl font-semibold">{serviceType} </span><br />{description}</span>
                    </div>
                </div>
            </div>
        </Link>
    )
}
{/* <div className="p-4 mt-auto absolute bg-gradient-to-b from-[#000000d0]  h-full w-full bg-opacity-50 rounded-md">
    <h2 className="card-title text-slate-50">{serviceType}</h2>
    <p className='text-slate-50'>{description}</p>
</div> */}