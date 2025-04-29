import React from 'react';
import './HomePage.css';
import Header from './Header';  // Importohet Header-i

function HomePage() {
    return (
        <div className="home-page">
            <Header />  {/* P�rdorim Header-in k�tu */}
            <h1>Welcome to the Home Page!</h1>
            <p>This is where your content goes.</p>

            {/* Footer-i �sht� i pozicionuar n� fund t� faqes */}
            <footer className="footer">
                <p>&copy; 2025 Hazrolli Group. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default HomePage;
