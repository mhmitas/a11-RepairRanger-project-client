import axios from 'axios';
import moment from 'moment';
import React, { useContext, useState } from 'react';
import { MdEmail, MdPhone } from 'react-icons/md';
import { ServerContext } from '../../providers/ServerLinkProveder';

const ServicetodoCard = ({ service }) => {
    const { serverLink } = useContext(ServerContext)
    const { userName, userEmail, userArea, userAddress, status, userPhone, serviceTakingDate, serviceData } = service
    const [loadedservice, setService] = useState({})
    const [currentStatus, setCurrentStatus] = useState(status)
    function handleStatus(e) {
        // console.log(e.target.innerText);
        const updateStatus = e.target.innerText.toLowerCase()
        setCurrentStatus(updateStatus)
        axios.patch(`${serverLink}/services-todo/${service._id}`, { status: updateStatus })
            .then(res => {
                // console.log(res);
                setService(res.data)
            })
            .catch(error => {
                console.log(error);
                setError(error)
            })
    }
    return (
        <>
            <tr>
                <td>
                    <span className='text-base'>{serviceData.service_name}</span>
                </td>
                <th>
                    <div className="">
                        <div className="text-xl font-semibold">{userName}</div>
                        <div className="font-normal flex items-center gap-3"><MdEmail />{userEmail}</div>
                        <div className="font-normal flex items-center gap-3"><MdPhone />{userPhone}</div>
                    </div>
                </th>
                <td>
                    <span>{userArea}</span><br /><span>{userAddress}</span>
                </td>
                <td>
                    <div className="flex items-center">
                        {moment(serviceTakingDate).format('Do MMMM')}
                    </div>
                </td>
                <td>
                    {/* {status} */}
                    <div className="dropdown dropdown-bottom">
                        <div tabIndex={0} role="button"
                            className={`btn m-1 ${currentStatus.toLowerCase() === 'conform' ? 'btn-success' :
                                currentStatus.toLowerCase() === 'completed' ? 'btn-info' :
                                    currentStatus.toLowerCase() === 'pending' ? 'btn-warning' : ''
                                }`}>{currentStatus}</div>
                        <ul tabIndex={0}
                            className={`dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box `}>
                            <li><button onClick={handleStatus}>Pending</button></li>
                            <li><button onClick={handleStatus}>Conform</button></li>
                            <li><button onClick={handleStatus}>Completed</button></li>
                        </ul>
                    </div>
                </td>
            </tr>
        </>
    );
};

export default ServicetodoCard;