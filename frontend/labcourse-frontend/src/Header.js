import React from 'react';
import './Header.css'; // Importohet stili i header-it

function Header() {
    return (
        <header className="header">
            <div className="logo">
                {/* Përdorim URL-në e logos së jashtme */}
                <img
                    src="https://www.hazrolli.com/en/hazrolli_assets/h_media/Hazrolli_shpk.png"
                    alt="Logo"
                    className="logo-img"
                />
            </div>
            <nav className="nav">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/products">Products</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
