import React from 'react';
import '../CSSFiles/Package.css';
import { FaShoppingCart, FaDollarSign } from 'react-icons/fa'
import Pkg from '../assets/pkg.jpg';
import Pkg2 from '../assets/pkg2.jpg';
import Pkg3 from '../assets/pkg3.jpg';
import Pkg4 from '../assets/pkg4.jpg';
import Pkg5 from '../assets/page2pic10.jpg';
import Pkg6 from '../assets/travel.jpg';

export default function Package() {
    return (
        <>
        <div className="title-header" id="tour">
            <h1>Our Popular Packages</h1>
        </div>
            <section className="package">
                <div className="package-card">
                    <img src={Pkg} alt="Package"/>
                    <h1>Belgium</h1><h1>350$</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et eos modi rerum, quod aperiam molestiae deleniti sapiente unde nihil.
                    </p>
                    <button>Buy Now <i><FaDollarSign/></i></button>
                    <button>Add to Cart <i><FaShoppingCart/></i></button>
                </div>
                <div className="package-card">
                    <img src={Pkg2} alt="Package"/>
                    <h1>Rome</h1><h1>350$</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et eos modi rerum, quod aperiam molestiae deleniti sapiente unde nihil.
                    </p>
                    <button>Buy Now <i><FaDollarSign/></i></button>
                    <button>Add to Cart <i><FaShoppingCart/></i></button>
                </div>
                <div className="package-card">
                    <img src={Pkg3} alt="Package"/>
                    <h1>venice</h1><h1>350$</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et eos modi rerum, quod aperiam molestiae deleniti sapiente unde nihil.
                    </p>
                    <button>Buy Now <i><FaDollarSign/></i></button>
                    <button>Add to Cart <i><FaShoppingCart/></i></button>
                </div>
                <div className="package-card">
                    <img src={Pkg4} alt="Package"/>
                    <h1>Grenada</h1><h1>350$</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et eos modi rerum, quod aperiam molestiae deleniti sapiente unde nihil.
                    </p>
                    <button>Buy Now <i><FaDollarSign/></i></button>
                    <button>Add to Cart <i><FaShoppingCart/></i></button>
                </div>
                <div className="package-card">
                    <img src={Pkg5} alt="Package"/>
                    <h1>Maldives</h1><h1>350$</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et eos modi rerum, quod aperiam molestiae deleniti sapiente unde nihil.
                    </p>
                    <button>Buy Now <i><FaDollarSign/></i></button>
                    <button>Add to Cart <i><FaShoppingCart/></i></button>
                </div>
                <div className="package-card">
                    <img src={Pkg6} alt="Package"/>
                    <h1>Croatia</h1><h1>350$</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et eos modi rerum, quod aperiam molestiae deleniti sapiente unde nihil.
                    </p>
                    <button>Buy Now <i><FaDollarSign/></i></button>
                    <button>Add to Cart <i><FaShoppingCart/></i></button>
                </div>
            </section>
        </>
    )
}
