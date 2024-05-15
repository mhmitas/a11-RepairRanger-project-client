import moment from 'moment';
import React from 'react';
import { Link } from 'react-router-dom';

const BookedTableRow = ({ service }) => {
    const { service_name, providerName, serviceId, price, providerEmail } = service.serviceData; providerEmail
    const { serviceTakingDate, status } = service
    // console.log(service);
    return (
        <>
            <tr className="odd:bg-base-100 even:bg-base-100 border-b dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium">
                    <Link className='hover:link'>{service_name}</Link>
                </th>
                <td className="px-6 py-4">
                    <span className=' text-xl'>{providerName}</span> <br /> <span className="text-sm">{providerEmail}</span>
                </td>
                <td className="px-6 py-4">
                    {moment(serviceTakingDate).format('Do MMMM')}
                </td>
                <td className="px-6 py-4">
                    ${price}
                </td>
                <td className="px-6 py-4">
                    <span className={`badge 
                    ${status === 'conform' ? 'badge-success' :
                            status === 'completed' ? 'badge-info' :
                                status === 'pending' ? 'badge-warning' : ''
                        } p-3 font-semibold`}>{status}</span>
                </td>
            </tr>
        </>
    );
};

export default BookedTableRow;