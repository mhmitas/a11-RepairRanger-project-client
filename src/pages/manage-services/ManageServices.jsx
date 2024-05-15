import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { ServerContext } from '../../providers/ServerLinkProveder';
import useAuth from '../../hooks/useAuth';
import ManageservicesCard from './ManageservicesCard';
import Swal from 'sweetalert2';
import toast from 'react-hot-toast';
import ReactHelmet from '../../components/helmet/ReactHelmet';

const ManageServices = () => {
    const { user } = useAuth()
    const { serverLink } = useContext(ServerContext)
    const [services, setServices] = useState([])
    useEffect(() => {
        axios.get(`${serverLink}/manage-services/${user.uid}`)
            .then(res => {
                // console.log(res.data);
                setServices(res.data)
            })
            .catch(error => {
                console.error(error);
            })
    }, [])

    function handleDelete(id) {
        // console.log(id);
        Swal.fire({
            title: "Are you sure you want to delete this item?",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            color: '#fff',
            cancelButtonColor: "#d33",
            background: '#0f172a',
            confirmButtonText: "Delete",
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`${serverLink}/services/delete/${id}`)
                    .then(res => {
                        // console.log(res.data);
                        if (res.data.deletedCount) {
                            const updateServices = services.filter(service => service._id !== id)
                            setServices(updateServices)
                        }
                        res.data.deletedCount > 0 ? toast.success('Deleted this service') : toast.error('somethig went wrong')
                    })
                    .catch(err => console.error(err))
            }
        });
        return
    }

    return (
        <div>
            <h3 className='text-2xl py-6 font-bold'>Manage Services</h3>
            <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 lg:grid-cols-4 gap-6'>
                {
                    services.map(service => <ManageservicesCard key={service._id} service={service} handleDelete={handleDelete}></ManageservicesCard>)
                }
            </div>
            <ReactHelmet title="Manage Services"></ReactHelmet>
        </div>
    );
};

export default ManageServices;