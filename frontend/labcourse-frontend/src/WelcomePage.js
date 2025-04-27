// src/WelcomePage.js
import React from 'react';
import './WelcomePage.css'; // Importo CSS për WelcomePage

function WelcomePage() {
    return (
        <div className="welcome-page">
            <h1>Welcome to the App!</h1>
            <p>This is the Welcome Page</p>
            <button onClick={() => alert('You clicked the button!')}>
                Click me
            </button>
        </div>
    );
}

export default WelcomePage;
