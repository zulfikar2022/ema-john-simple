import React from 'react';
import { useLocation } from 'react-router-dom';

const Inventory = () => {
    const location = useLocation();
    console.log(location);
    return (
        <div>
            <h2>This is inventory page</h2>
        </div>
    );
};

export default Inventory;