import React from 'react';
import '../CSSFiles/Footer.css';
import Social from './Social';

export default function Footer() {
    return (
        <>
        <section className="primary-footer">
            <section className="footer">
                <div className="footer-part">
                    <h1>Book Now</h1>
                    <p>Flights</p>
                    <p>Rail</p>
                    <p>Cars</p>
                    <p>Taxi</p>
                    <p>Cruise</p>
                    <p>Tour</p>
                    <p>Package</p>
                </div>
                <div className="footer-part">
                    <h1>Explore Now</h1>
                    <p>Rome</p>
                    <p>Venice</p>
                    <p>Dubai</p>
                    <p>Amsterdam</p>
                    <p>Maldives</p>
                    <p>Bulgaria</p>
                    <p>Mumbai</p>
                </div>
                <div className="footer-part">
                    <h1>Top Deals</h1>
                    <p>3 Nights in Sydney, AuckLand & Tokyo</p>
                    <p>2 Nights in Dubai</p>
                    <p>1 week in Mumbai, KathMandu & Bandarban</p>
                    <p>4 Days in Sylhet, Rajshahi & Rangamati</p>
                    <p>Weekly Package</p>
                    <p>Daily Package</p>
                    <p>Quarter package</p>
                </div>
                <div className="footer-part">
                    <h1>Contact us</h1>
                    <Social />
                </div>
            </section>
        </section>
        </>
    )
}
