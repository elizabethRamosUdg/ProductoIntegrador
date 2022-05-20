import React from 'react';

import HOME from '../images/Home.jpeg';


import "../pages/style/home.css";

function Home() {
    return (
    <div className="containerHome">
        <img src={HOME} alt="Sample Image" className="homeImage"/>
    </div>
    );
}

export default Home;

