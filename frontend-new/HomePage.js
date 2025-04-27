// src/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <div className="home-page">
            <h1>Welcome to the Home Page!</h1>
            <p>This is the main content of the application.</p>
            <Link to="/">
                <button>Back to Welcome Page</button>
            </Link>
        </div>
    );
}

export default HomePage;
