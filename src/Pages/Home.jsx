import React from 'react';
import { Navigate } from 'react-router';

const Home = () => {
    return (
        // jodi keo home page('/') a click kore tahole Navigate kore category-1 er shob breaking news dekhabe
        <Navigate to='/category/1'></Navigate>
    );
};

export default Home;