import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const NotFoundPage = () => {
    const error = useRouteError();
    // console.error(error);

    return (
        <div className="flex flex-col justify-center h-screen space-y-4">
            <h1 className="text-center text-3xl text font-bold">Oops! Looks like you followed a bad link.</h1>
            <p className="text-center text-5xl text-error font-bold">{error.status}</p>
            <p className="text-center text-3xl text font-bold">
                <i>{error.statusText || error.message}</i>
            </p>
            <Link to="/" className="mx-auto">
                <button className="btn btn-success my-6">Go Back Home</button>
            </Link>
        </div>
    );
};

export default NotFoundPage;