import React, { createContext } from 'react';

export const ServerContext = createContext(null)
const ServerLinkProveder = ({ children }) => {

    // const serverLink = 'http://localhost:3000'
    const serverLink = 'https://repairrangerserver-mh-mitas-projects.vercel.app'

    return (
        <ServerContext.Provider value={{ serverLink }}>
            {children}
        </ServerContext.Provider>
    );
};

export default ServerLinkProveder;