import React from 'react';

import A01 from '../images/Actividades/A_01.jpeg';
import A02 from '../images/Actividades/A_02.jpeg';
import A03 from '../images/Actividades/A_03.jpeg';

import "../pages/style/actividades.css";

function Actividades() {
    return (
    <div className="containerActividades">
        <img src={A01} alt="Sample Image"/>
        <img src={A02} alt="Sample Image"/>
        <img src={A03} alt="Sample Image"/>
    </div>
    );
}

export default Actividades;

