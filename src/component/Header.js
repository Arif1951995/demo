import React from 'react';
import './Header.css';


const Header = () => {
    return (
        <div>
            <marquee>Special Offer,just for Pakistani citizens! Get <mark>50% Discount</mark> on any of the courses offered by
        Tech Karo.For further queries call <i class="fas fa-phone"></i> +92-317 285872</marquee>
            <header>
                <img src="https://i.ibb.co/BtQhfY7/logo.png" alt="logo" />
                <nav>
                    <ul>
                        <li><a href="#service">Services</a></li>
                        <li><a href="#portfolio">Portfolio</a></li>
                        <li><a href="#contact-us">Contact</a></li>
                    </ul>
                </nav>
            </header>
            <section class="join-us">
            <h1>Tech Karo, CIRCLE</h1>
            <p class="same-parg">We are Tech Karo students, and we work hard! We self-learn and NEVER give up! Join
                our
                team, beacuse Tech is
                future! </p>
            <button>Join Now!</button>
        </section>
        </div>
    );
};

export default Header;