import React from 'react';
import { FaBookMedical, FaCar, FaPassport, FaPlaneArrival, FaShip, FaTrain, FaBuilding, FaSuitcase } from 'react-icons/fa';
import '../CSSFiles/Services.css';

export default function Services() {
    return (
        <>
        <div className="title-header" id="services">
            <h1>Our Overall Services</h1>
        </div>
            <section className="services">
                <div className="service-card">
                    <i><FaPlaneArrival /></i>
                    <h1>Flight Booking</h1>
                </div>
                <div className="service-card">
                    <i><FaBuilding /></i>
                    <h1>Worlwide Hotel Reservation</h1>
                </div>
                <div className="service-card">
                    <i><FaShip /></i>
                    <h1>Cruise Reservations</h1>
                </div>
                <div className="service-card">
                    <i><FaTrain /></i>
                    <h1>Railway Booking</h1>
                </div>
                <div className="service-card">
                    <i><FaCar /></i>
                    <h1>Car Rentals</h1>
                </div>
                <div className="service-card">
                    <i><FaPassport /></i>
                    <h1>E-Visa</h1>
                </div>
                <div className="service-card">
                    <i><FaSuitcase /></i>
                    <h1>Travel Insurance</h1>
                </div>
                <div className="service-card">
                    <i><FaBookMedical /></i>
                    <h1>Medical Tourism</h1>
                </div>
            </section>
        </>
    )
}
