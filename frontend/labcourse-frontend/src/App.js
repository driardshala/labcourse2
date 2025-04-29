import React, { useState } from 'react';
import './App.css';
import WelcomePage from './WelcomePage';
import HomePage from './HomePage';

function App() {
    const [showWelcome, setShowWelcome] = useState(true); // Startojmë me WelcomePage si faqe e parë

    const goToHomePage = () => {
        setShowWelcome(false); // Kur klikohet butoni, fsheh WelcomePage dhe shfaq HomePage
    };

    return (
        <div className="App">
            {showWelcome ? (
                <WelcomePage goToHomePage={goToHomePage} />
            ) : (
                <HomePage />
            )}
        </div>
    );
}

export default App;
