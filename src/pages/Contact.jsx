import React from 'react';

import "../pages/style/contacto.css";

import contacto from '../images/contacto.jpg';

function Contact() {
    return (
        <div className="containerActividades">
            <h1>Buscanos en las redes sociales</h1>
            <img src={contacto} alt="Sample Image"/>
        </div>
    );
}

export default Contact;