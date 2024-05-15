import React from 'react';
import { HelmetProvider, Helmet } from 'react-helmet-async';

const ReactHelmet = ({ title }) => {
    return (
        <HelmetProvider>
            <Helmet>
                <title>{`${title} - RepairRanger`}</title>
            </Helmet>
        </HelmetProvider>
    );
};

export default ReactHelmet;