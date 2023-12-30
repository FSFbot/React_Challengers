import React, { useState } from 'react';
import './Style.css'; // Import the styles from the external CSS file

const PartyForm = () => {
    const [formData, setFormData] = useState({name: '', age: '', expense: ''});

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" onChange={handleChange} required minLength="2" placeholder="Nome"/>
            <input type="number" name="age" onChange={handleChange} required min="18" max="100"  placeholder="Idade"/>
            <input type="number" name="expense" onChange={handleChange} required min="0" placeholder="Valor gasto para a festa"/>
            <input type="submit" value="Submeter"/>
        </form>
    );
};

export default PartyForm;