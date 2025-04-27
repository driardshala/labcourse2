// src/WelcomePage.js
import React from 'react';
import './WelcomePage.css'; // Importo CSS për WelcomePage


function WelcomePage() {
    return (
        <div className="welcome-page">
            {/* Kjo është përmbajtja që është mbi imazhin */}
            <div className="welcome-page-content">
                <h1>Welcome to our page!</h1>
                <p>Hazrolli Group</p>
                
                    <button  className="welcome-button" >
                         Home
                    </button>
                

            </div>
        </div>
    );
}

export default WelcomePage;
