import React, { createContext } from 'react';

export const ServerContext = createContext(null)
const ServerLinkProveder = ({ children }) => {

    // const serverLink = 'http://localhost:5000'
    const serverLink = 'https://repairrangers-server.vercel.app'

    return (
        <ServerContext.Provider value={{ serverLink }}>
            {children}
        </ServerContext.Provider>
    );
};

export default ServerLinkProveder;