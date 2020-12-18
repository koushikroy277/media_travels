import React, { Component } from "react";
import "../CSSFiles/Feedback.css";
import person from "../assets/page2pic2.jpg";
import person2 from "../assets/modelwebsite.jpg";
import person3 from "../assets/reviewer.jpg";
import person4 from "../assets/page2pic2.jpg";
import person5 from "../assets/man.jpg";
import person6 from "../assets/webModel.jpg";
import Slider from "react-slick";
import { FaStar } from "react-icons/fa";

export default class Feedback extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };

        return (
        <>
        <div className="title-header">
            <h1>Our top Reviews</h1>
        </div>
        <section className="feedback">
        <section className="feedback-sect">
            <Slider {...settings} className="slider">
            <div className="slider-item">
                <img src={person} alt="Person" align="center"/>
                <h3>Fast & Reliable Site</h3>
                <h3>Rating</h3>
                    <i>
                    <FaStar className="star"/>
                    <FaStar className="star"/>
                    <FaStar className="star"/>
                    </i>
            </div>
            <div className="slider-item">
                <img src={person2} alt="Person"/>
                <h3>One of the best Genuine service provider I've ever seen</h3>
                <h3>Rating</h3>
                    <i>
                    <FaStar className="star"/>
                    <FaStar className="star"/>
                    <FaStar className="star"/>
                    <FaStar className="star"/>
                    </i>
            </div>
            <div className="slider-item">
                <img src={person3} alt="Person"/>
                <h3>I love this agency so much</h3>
                <h3>Rating</h3>
                    <i>
                    <FaStar className="star"/>
                    <FaStar className="star"/>
                    <FaStar className="star"/>
                    <FaStar className="star"/>
                    <FaStar className="star"/>
                    </i>
            </div>
            <div className="slider-item">
                <img src={person4} alt="Person"/>
                <h3>Been using their services for a long time</h3>
                <h3>Rating</h3>
                    <i>
                    <FaStar className="star"/>
                    <FaStar className="star"/>
                    <FaStar className="star"/>
                    
                    </i>
            </div>
            <div className="slider-item">
                <img src={person5} alt="Person"/>
                <h3>Nothing to complain about your organization</h3>
                <h3>Rating</h3><i>
                    <FaStar className="star"/>
                    <FaStar className="star"/>
                    <FaStar className="star"/>
                    <FaStar className="star"/>
                    <FaStar className="star"/>
                    </i>
            </div>
            <div className="slider-item">
                <img src={person6} alt="Person"/>
                <h3>The facilties are good but need to improve them a bit</h3>
                <h3>Rating</h3>
                    <i>
                    <FaStar className="star"/>
                    <FaStar className="star"/>
                    </i>
            </div>
            </Slider>
        </section>
        </section>
        </>
        );
    }
}
