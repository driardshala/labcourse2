// WelcomePage.js
import React from 'react';
import './WelcomePage.css';

function WelcomePage({ goToHomePage }) {
    return (
        <div className="welcome-page">
            <div className="welcome-page-content">
                <h1>Welcome to our page!</h1>
                <p>Hazrolli Group</p>
                <button onClick={goToHomePage}>Go to Home Page</button>
            </div>
        </div>
    );
}

export default WelcomePage;
