import React from 'react';
import '../CSSFiles/WlcHead.css';
import { FaMoneyBill, FaPlaneDeparture, FaRunning, FaHandshake, FaMale, FaSellsy } from 'react-icons/fa';
import Roam from "../assets/roam-vid.mp4";

export default function WlcHead() {
    return (
        <>
            <section className="welcome" id="about">
                <div className="welcome-head">
                    <h1>It's a pleasure to have you here</h1>
                    <h3>Welcome to </h3>
                    <h2>Media Travels</h2>
                </div>
                <div className="video">
                    <video src={Roam} width="100%" controls autoPlay/>
                    <div className="video-des">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem maiores atque et cum. Nemo hic cum minus possimus necessitatibus eum? Fugiat minima odio fuga repudiandae natus enim, nostrum dolore veritatis.
                        Nulla iusto accusamus, molestias ipsum nemo quo ad dolores culpa repudiandae voluptate harum facilis laudantium necessitatibus nostrum temporibus corporis asperiores iste reiciendis atque officiis sed dignissimos blanditiis enim doloremque. Blanditiis?
                        Alias natus dolorem commodi? Ullam, ea! Libero quibusdam rerum esse hic laborum non ipsa adipisci dignissimos ullam consequatur error modi dolores nesciunt consequuntur perferendis, autem veniam, nobis placeat quia quos.
                        
                        
                        </p>
                    </div>
                </div>
            </section>
            <section className="facilities" id="facilities">
                    <div className="com-head">
                        <h1>Our Facilities</h1>
                    </div>
                <div className="competency">
                    <div className="com-card">
                        <i><FaMoneyBill /></i>
                        <h1>Budget Friendly</h1>
                    </div>
                    <div className="com-card">
                        <i><FaRunning /></i>
                        <h1>Fast Booking</h1>
                    </div>
                    <div className="com-card">
                        <i><FaHandshake /></i>
                        <h1>Safe Payment</h1>
                    </div>
                    <div className="com-card">
                        <i><FaSellsy /></i>
                        <h1>Automated Services</h1>
                    </div>
                    <div className="com-card">
                        <i><FaMale /></i>
                        <h1>Customer's demand is our priority</h1>
                    </div>
                    <div className="com-card">
                        <i><FaPlaneDeparture /></i>
                        <h1>Travel Management</h1>
                    </div>
                </div>
            </section>
        </>
    )
}
