    import React from 'react';
    import './navbar.css'; // Import CSS di sini

    function Navbar() {
        const handleTeamProfileClick = (e) => {
            e.preventDefault(); // Menghentikan perilaku bawaan dari tautan
            const introductionSection = document.getElementById('introduction'); // Mengambil elemen dengan id 'introduction'
            if (introductionSection) {
                introductionSection.scrollIntoView({ behavior: 'smooth' }); // Menggulir halaman ke elemen 'introduction' dengan efek yang halus
            }
        };

        const handleApaItuRFEWSClick = (e) => {
            e.preventDefault(); // Menghentikan perilaku bawaan dari tautan
            const descSection = document.getElementById('desc'); // Mengambil elemen dengan id 'desc'
            if (descSection) {
                descSection.scrollIntoView({ behavior: 'smooth' }); // Menggulir halaman ke elemen 'desc' dengan efek yang halus
            }
        };

        const handleDataMonitoringRFEWSClick = (e) => {
            e.preventDefault(); // Menghentikan perilaku bawaan dari tautan
            const readSection = document.getElementById('read'); // Mengambil elemen dengan id 'read'
            if (readSection) {
                readSection.scrollIntoView({ behavior: 'smooth' }); // Menggulir halaman ke elemen 'read' dengan efek yang halus
            }
        };

        return (
            <div className="navbar">
                <ul className="navbar-nav">
                    <li className="nav-item"><a href="#team-profile" onClick={handleTeamProfileClick}>Profile</a></li>
                    <li className="nav-item"><a href="#apa-itu-rfews" onClick={handleApaItuRFEWSClick}>Description</a></li>
                    <li className="nav-item"><a href="#data-monitoring-rfews" onClick={handleDataMonitoringRFEWSClick}>Monitoring</a></li>
                </ul>
            </div>
        );
    }

    export default Navbar;
