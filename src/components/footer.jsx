import React, { useState } from "react";
import './header.css';

function Message() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className='start'>
            <div className="allMenu">
            <div className='first'>
                <img src="./logo.svg" id='img1' alt="Logo" />

                {/* Desktop Menu */}
                <div id='test'>
                    <p>Features</p>
                    <p>Team</p>
                    <p>Sign in</p>
                </div>

                {/* Hamburger Menu Icon */}
                <div className="hamburger" onClick={toggleMenu}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
            </div>

            {/* Mobile Menu (Inside Hamburger) */}
            {menuOpen && (
                <div className="mobile-menu">
                    <p>Features</p>
                    <p>Team</p>
                    <p>Sign in</p>
                </div>
            )}
            </div>
          

            <div className='second'>
                <div id='third'>
                    <h2>All your files in one secure <br />location, accessible anywhere.</h2>
                    <p>Fylo stores your most important files in one secure location. Access <br />
                        them wherever you need, share and collaborate with friends, families, and co-workers.
                    </p>
                    <div id='get'>
                        <input type="text" placeholder="Enter your email" id='input1' />
                        <button id='btn1'>Get Started</button>
                    </div>
                </div>
                <div id='fourth'>
                    <img src="./illustration-1.svg" id='img2' alt="Illustration" />
                </div>
            </div>
        </div>
    );
}

export default Message;
