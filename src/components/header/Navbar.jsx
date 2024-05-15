import React from 'react';
import { Link } from 'react-router-dom';
import NavItems from './NavItems';
import useAuth from '../../hooks/useAuth';
import ColorTheme from '../theme/ColorTheme';

const Navbar = () => {
    const { user, loading, logOutUser } = useAuth()

    return (
        <div>
            <div className="navbar md:py-4 bg-base-100 *:z-50 ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-md w-52">
                            <NavItems></NavItems>
                        </ul>
                    </div>
                    <Link to="/" className="btn btn-ghost text-2xl">RepairRanger</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <NavItems></NavItems>
                    </ul>
                </div>
                <div className="navbar-end mr-4 gap-3">
                    <ColorTheme></ColorTheme>
                    <div>
                        {/* login logout */}
                        {loading ? <span className=''>Loading...</span> :
                            user ?
                                <div className="dropdown dropdown-end">
                                    {/* Profile image section */}
                                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                        <div title={user?.displayName} className="w-10 rounded-full">
                                            <img alt={user?.displayName && user.displayName} src={user?.photoURL ? user.photoURL : "https://i.ibb.co/tY0hxsg/default-profile.jpg"}
                                            />
                                        </div>
                                    </div>
                                    <ul tabIndex={0} className="mt-3 z-[1] p-2 menu menu-sm dropdown-content bg-base-100 rounded-md w-52 shadow-xl">
                                        <li><Link to="/profile">Profile</Link></li>
                                        <li><span onClick={logOutUser}>Logout</span></li>
                                    </ul>
                                </div>
                                :
                                <div className='flex gap-3'>
                                    <Link to="/login" className="btn btn-sm btn-outline">Login</Link>
                                    <Link to="/sign-up" className="btn btn-sm btn-outline">Sign up</Link>
                                </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Navbar;
// https://i.ibb.co/yR03sKc/miao-hero.png