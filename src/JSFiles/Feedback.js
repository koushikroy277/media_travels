import React, {Component} from "react";
import "../CSSFiles/Feedback.css";
import person from '../assets/page2pic2.jpg';
import person2 from '../assets/modelwebsite.jpg';
import person3 from '../assets/portfolio.jpg';
import person4 from '../assets/page2pic2.jpg';
import person5 from '../assets/man.jpg';
import person6 from '../assets/webModel.jpg';
import M from 'materialize-css';

export default class Feedback extends Component {
    componentDidMount(){
        const instance = M.Carousel.init({
            fullWidth: true,
            indicators: true
        });

        document.addEventListener('DOMContentLoaded', function() {
            const elems = document.querySelectorAll('.carousel');
            const instances = M.Carousel.init(elems, {});
        });
    }

render(){
    return (
        <>
        <div className="carousel carousel-slider center">
            <a className="carousel-item" href="#one!"><img src={person} /></a>
            <a className="carousel-item" href="#two!"><img src={person2} /></a>
            <a className="carousel-item" href="#three!"><img src={person3} /></a>
            <a className="carousel-item" href="#four!"><img src={person4} /></a>
        </div>
        </>
        );
    }
}

