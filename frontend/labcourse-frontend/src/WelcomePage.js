// src/WelcomePage.js
import React from 'react';
import './WelcomePage.css'; // Importo CSS p�r WelcomePage


function WelcomePage() {
    return (
        <div className="welcome-page">
            {/* Kjo �sht� p�rmbajtja q� �sht� mbi imazhin */}
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
