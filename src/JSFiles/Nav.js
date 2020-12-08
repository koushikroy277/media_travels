import React, { Component } from "react";
import { HashLink as Link } from 'react-router-hash-link';
import { FaArtstation } from 'react-icons/fa';
import '../CSSFiles/Nav.css';

export default class Nav extends Component {
    componentDidMount(){
        const M = window.M;
        document.addEventListener('DOMContentLoaded', function() {
        const elems = document.querySelectorAll('.sidenav');
        const instances = M.Sidenav.init(elems, {});
        });
    }

    constructor(props){
        super(props);
        this.state = {
            navbar: false
        }
    }

    chngBg = () => {
        if (window.scrollY >= 600){
            this.setState({ navbar: true })
        }else{
            this.setState({ navbar: false })
        }
    }

    componentDidMount(){
        window.addEventListener("scroll", this.chngBg)
    }

    render(){
    return (
        <>
        <div className="navbar-fixed">
        <nav className={this.state.navbar ? "nav" : "nav-trans"}>
            <div className={this.state.navbar ? "no-wrapper" : "nav-wrapper"}>
            <Link to="#!" className="brand-logo link">
                <i><FaArtstation /></i> Media Travels
            </Link>
            <Link to="#" data-target="mobile-demo" className="sidenav-trigger link">
                <i className="material-icons">menu</i>
            </Link>
            <ul className="right hide-on-med-and-down">
                <li>
                <Link className="link" activeClassName="activeLink" smooth to="#banner">Home</Link>
                </li>
                <li>
                <Link className="link" activeClassName="activeLink" smooth to="#about">About</Link>
                </li>
                <li>
                <Link className="link" activeClassName="activeLink" smooth to="#facilities">Facilties</Link>
                </li>
                <li>
                <Link className="link" activeClassName="activeLink" smooth to="#tour">Tour</Link>
                </li>
                <li>
                <Link className="link" activeClassName="activeLink" smooth to="#services">Services</Link>
                </li>
                <li>
                <Link className="link" activeClassName="activeLink" smooth to="#mobile.html">Contact</Link>
                </li>
            </ul>
            </div>
        </nav>
        </div>
        <ul className="sidenav" id="mobile-demo">
            <li>
            <Link className="link" smooth to="#sass.html">Sass</Link>
            </li>
            <li>
            <Link className="link" smooth to="#badges.html">Components</Link>
            </li>
            <li>
            <Link className="link" smooth to="#collapsible.html">Javascript</Link>
            </li>
            <li>
            <Link className="link" smooth to="#mobile.html">Mobile</Link>
            </li>
        </ul>

        </>
    );
    }
}
