import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const NavItems = () => {
    const { user } = useAuth()
    const dashboardOptions = <>
        <li><NavLink to="/add-service">Add Service</NavLink></li>
        <li><NavLink to='/manage-services'>Manage Service</NavLink></li>
        <li><NavLink to="/booked-services">Booked-Servicese</NavLink></li>
        <li><NavLink to="/services-todo">Service-To-Do</NavLink></li>
    </>
    return (
        <>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/services">Services</NavLink></li>
            {user &&
                <>
                    <li className="hidden lg:block dropdown dropdown-hover">
                        <div tabIndex={0} role="button" className="">Dashboard</div>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow-md bg-base-100 rounded-md w-52">
                            {dashboardOptions}
                        </ul>
                    </li>
                    <li className='lg:hidden'>
                        <details>
                            <summary>Dashboard</summary>
                            <ul className="p-2 bg-base-100 rounded-t-none shadow-md">
                                {dashboardOptions}
                            </ul>
                        </details>
                    </li>
                </>
            }
        </>
    );
};

export default NavItems;