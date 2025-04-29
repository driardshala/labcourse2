import React from 'react';
import './HomePage.css';
import Header from './Header';  // Importohet Header-i

function HomePage() {
    return (
        <div className="home-page">
            <Header />  {/* Përdorim Header-in këtu */}
            <h1>Welcome to the Home Page!</h1>
            <p>This is where your content goes.</p>

            {/* Footer-i është i pozicionuar në fund të faqes */}
            <footer className="footer">
                <p>&copy; 2025 Hazrolli Group. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default HomePage;
