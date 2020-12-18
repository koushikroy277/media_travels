import React from 'react';
import '../CSSFiles/Contact.css';
import { FaHome, FaMailBulk, FaPhone } from 'react-icons/fa';

export default function Contact() {
    return (
        <>
        <div className="title-header">
            <h1>Contact Us</h1>
        </div>
            <div className="contact-sect" id="contact">
                <div className="contact-info">
                    <form action="#">
                        <label for="name">Full Name</label>
                        <input type="text" id="name"/>
                        <label for="address">Address</label>
                        <input type="text" id="address"/>
                        <label for="email">Email</label>
                        <input type="email" id="email"/>
                        <label for="mobile">Mobile</label>
                        <input type="tel" id="mobile"/>
                        <label for="message" >Ask your query here</label>
                        <textarea name="message" id="message" width="100%" placeholder="Write us a message"></textarea>
                    </form>
                </div>
                <div className="address-info">
                    <div className="address">
                        <i><FaHome/></i>
                        <div>
                            <h2>Address</h2>
                            <h1>45 Topkhana Road, Tropicana Tower(9th Floor), Suit#E/2, Purana Paltan, Dhaka-1000</h1>
                        </div>
                    </div>
                    <div className="address">
                        <i><FaPhone/></i>
                        <div>
                            <h2>Mobile</h2>
                            <h1>+8801678-081955, 01711-266870</h1>
                        </div>
                    </div>
                    <div className="address">
                        <i><FaMailBulk/></i>
                        <div>
                            <h2>Email</h2>
                            <h1>tomediatravels@gmail.com</h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
