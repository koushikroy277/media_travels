import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import '../CSSFiles/Social.css';

export default function Social() {
    return (
        <>
            <div className="social">
                <ul>
                    <li><a href="#"></a><i><FaFacebook /></i></li>
                    <li><a href="#"></a><i><FaInstagram /></i></li>
                    <li><a href="#"></a><i><FaWhatsapp /></i></li>
                    <li><a href="#"></a><i><FaTwitter /></i></li>
                </ul>
            </div>
        </>
    )
}
