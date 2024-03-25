import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import App from './App';
import Login from './components/Login2';
import Register from './components/Register2';
import Navbar from './components/navbar';

function Index() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isRegisterClicked, setIsRegisterClicked] = useState(false);

    const handleLogin = () => { 
        setIsLoggedIn(true);
        toast.success(`Login berhasil`); 
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
    };

    const handleRegisterClick = () => {
        setIsRegisterClicked(true);
    };

    const handleRegisterSuccess = () => {
        setIsRegisterClicked(false); 
        toast.success("Registrasi berhasil"); 
    };

    const handleBackToLogin = () => {
        setIsRegisterClicked(false);
    };

    return (
        <div>
            {isLoggedIn ? (
                <div>
                    <App />
                    <Navbar onLogout={handleLogout} />
                </div>
            ) : isRegisterClicked ? (
                <Register onRegisterSuccess={handleRegisterSuccess} onBackToLogin={handleBackToLogin} />
            ) : (
                <div>
                    <Login onLogin={handleLogin} onRegisterClick={handleRegisterClick} />
                </div>
            )}
            <ToastContainer />
        </div>
    );
}

ReactDOM.render(<Index />, document.getElementById('root'));