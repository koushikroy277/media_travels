import React from 'react';
import '../CSSFiles/Home.css';
import Nav from './Nav';
import Banner from './Banner';
import WlcHead from './WlcHead';
import Package from './Package';
import Services from './Services';
import Feedback from './Feedback';
import Contact from './Contact';
import Footer from './Footer';

export default function Home() {
    return (
        <>
        <section className="mainNav">
            <Nav />
        </section>
        <section className="mainBanner">
            <Banner />
        </section>
        <section className="mainWelcome">
            <WlcHead />
        </section>
        <section className="mainPackage">
            <Package />
        </section>
        <section className="mainService">
            <Services />
        </section>
        <section className="mainFeedback">
            <Feedback />
        </section>
        <section className="mainContact">
            <Contact />
        </section>
        <section className="mainFooter">
            <Footer />
        </section>
        </>
    )
}
