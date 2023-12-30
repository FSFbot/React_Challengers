import React from "react";
import './App.css';
import Car from './components/Car'

function App() {
    const cars = [
        {name:'Fiat', model: 'Touro', year: '2010'},
        {name:'Toyota', model: 'Hylux', year: '2015'},
        {name:'Volkswagen', model: 'Amarok', year: '2020'},

    ]
    return (
        <div className="App">
            <h1 className="title">Bem-vindo ao Chelengercss</h1>
            {cars.map((car, index) => <Car key={index} car={car} />)}
        </div>
    );
}
export default App
