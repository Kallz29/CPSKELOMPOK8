import React from 'react';
import { toast } from 'react-toastify'; // Impor toast dari 'react-toastify'
import './navbar.css'; // Import CSS di sini

function Navbar({ onLogout }) {
    const handleTeamProfileClick = (e) => {
        e.preventDefault();
        const introductionSection = document.getElementById('introduction');
        if (introductionSection) {
            introductionSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleApaItuRFEWSClick = (e) => {
        e.preventDefault();
        const descSection = document.getElementById('desc');
        if (descSection) {
            descSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleDataMonitoringRFEWSClick = (e) => {
        e.preventDefault();
        const readSection = document.getElementById('read');
        if (readSection) {
            readSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleLogoutClick = () => {
        if (typeof onLogout === 'function') {
            onLogout();
            toast.success("Logout berhasil"); // Panggil toast.success saat logout berhasil
        }
    };

    return (
        <div className="navbar">
            <ul className="navbar-nav">
                <li className="nav-item"><a href="#team-profile" onClick={handleTeamProfileClick}>Profile</a></li>
                <li className="nav-item"><a href="#apa-itu-rfews" onClick={handleApaItuRFEWSClick}>Description</a></li>
                <li className="nav-item"><a href="#data-monitoring-rfews" onClick={handleDataMonitoringRFEWSClick}>Monitoring</a></li>
                <li className="nav-item logout"><button onClick={handleLogoutClick}>Logout</button></li>
            </ul>
        </div>
    );
}

export default Navbar;
