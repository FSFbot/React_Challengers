import React from "react";
import styles from './Car.module.css'

const  Car = ({car}) =>(
    <div className={styles.carDetails}>
        <h2>{car.name}</h2>
        <p>Model: {car.model}</p>
        <p>Year: {car.year}</p>
    </div>
);
export default Car