import { useContext, useEffect, useState } from "react";
import { ServerContext } from "../../../providers/ServerLinkProveder";
import PopularServicesCard from "./PopularServicesCard";
import { useNavigate } from "react-router-dom";


const PopularServices = () => {
    const navigate = useNavigate()
    const { serverLink } = useContext(ServerContext)
    const [services, setServices] = useState([])
    const [dataLoading, setDataLoading] = useState(false)

    useEffect(() => {
        setDataLoading(true)
        fetch(`${serverLink}/services?limit=6`)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setServices(data)
                setDataLoading(false)
            })
    }, [])

    return (
        <div className='mt-16'>
            <h3 className='text-3xl mb-6 text-center font-semibold'>Popular Services</h3>
            {dataLoading ? <div className=' absolute left-1/2 top-1/2'><span className="loading loading-spinner text-primary loading-lg"></span></div> : ''}
            <div className='*:mx-auto'>
                {
                    services.map(service => <PopularServicesCard service={service} key={service._id}></PopularServicesCard>)
                }
            </div>
            <div className="text-center">
                <button onClick={() => navigate('/services')} className="btn btn-secondary ">Show More</button>
            </div>
        </div>
    );
};

export default PopularServices;