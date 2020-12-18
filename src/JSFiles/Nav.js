import React, { Component } from "react";
import { HashLink as Link } from 'react-router-hash-link';
import { FaArtstation, FaDraftingCompass, FaHome, FaPlaneArrival, FaQuestion, FaPhone, FaHandHoldingUsd } from 'react-icons/fa';
import '../CSSFiles/Nav.css';

export default class Nav extends Component {
    constructor(props){
        super(props);
        this.state = {
            navbar: false,
            sidebar: false
        }
    }

    chngBg = () => {
        if (window.scrollY >= 600){
            this.setState({ navbar: true })
        }else{
            this.setState({ navbar: false })
        }
    }

    sideBarOpen = () => {
        this.setState({ sidebar: true })
    }

    componentDidMount(){
        if (!this.state.sidebar){
            const M = window.M;
            document.addEventListener('DOMContentLoaded', function() {
            const elems = document.querySelectorAll('.sidenav');
            const instances = M.Sidenav.init(elems, {});
            });
            }
        window.addEventListener("scroll", this.chngBg)
    }


    render(){
    return (
        <>
        <div className="navbar-fixed">
        <nav className={this.state.navbar ? "nav" : "nav-trans"}>
            <div className={this.state.navbar ? "no-wrapper" : "nav-wrapper"}>
            <Link to="#!" className="brand-logo link">
                <i><FaArtstation /></i> <strong>Media Travels</strong> 
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
                <Link className="link" activeClassName="activeLink" smooth to="#contact">Contact</Link>
                </li>
            </ul>
            </div>
        </nav>
        </div>
        <ul className={this.state.sidebar ? "sidenav sidenav-in" : "sidenav sidenav-out" } id="mobile-demo" >
            <li onClick={this.sideBarOpen}  className="side-brand"><i><FaArtstation /></i> <strong>Media Travels</strong></li>
            
            <li>
                <Link className="link" activeClassName="activeLink" smooth to="#banner"><i><FaHome /></i>Home</Link>
            </li>

            <li>
                <Link className="link"
                activeClassName="activeLink" smooth to="#about"><i><FaQuestion /></i>About</Link>
            </li>

            <li>
                <Link className="link"
                activeClassName="activeLink" smooth to="#facilities"><i><FaHandHoldingUsd/></i>Facilties</Link>
            </li>

            <li>
                <Link className="link"
                activeClassName="activeLink" smooth to="#tour"><i><FaPlaneArrival/></i>Tour</Link>
            </li>

            <li>
                <Link className="link"
                activeClassName="activeLink" smooth to="#services"><i><FaDraftingCompass/></i>Services</Link>
            </li>
            
            <li>
                <Link className="link"
                activeClassName="activeLink" smooth to="#contact"><i><FaPhone/></i>Contact</Link>
            </li>
        </ul>
        </>
    );
    }
}
