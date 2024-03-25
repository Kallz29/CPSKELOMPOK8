import React, { useRef } from 'react';
import axios from 'axios';
import './Login.css';

export default function Register(props) {
  const inputName = useRef(null);
  const inputEmail = useRef(null);
  const inputPassword = useRef(null);
  const inputPhone = useRef(null);

  const handleRegister = async () => {
    const name = inputName.current.value;
    const email = inputEmail.current.value;
    const password = inputPassword.current.value;
    const phone = inputPhone.current.value;

    console.log({ email, password, name, phone });

    try {
      const response = await axios.post("http://localhost:8000/api/accounts", {
        nama: name,
        email: email,
        password: password,
        nohp: phone,
      });
      console.log(response.data);
      props.onRegisterSuccess(); // Panggil fungsi untuk mengatur status login setelah pendaftaran berhasil
    } catch (error) {
      console.error('Error during registration:', error);
    }
  };

  return (
    <div className="login-form">
      <form>
        <div className="mb-3">
          <label htmlFor="input-nama" className="form-label">Nama</label>
          <input ref={inputName} type="text" className="form-control" id="input-nama" />
        </div>
        <div className="mb-3">
          <label htmlFor="input-email" className="form-label">Email address</label>
          <input ref={inputEmail} type="email" className="form-control" id="input-email" />
        </div>
        <div className="mb-3">
          <label htmlFor="input-password" className="form-label">Password</label>
          <input ref={inputPassword} type="password" className="form-control" id="input-password" />
        </div>
        <div className="mb-3">
          <label htmlFor="input-nohp" className="form-label">No Telepon</label>
          <input ref={inputPhone} type="tel" className="form-control" id="input-nohp" />
        </div>
        <button type="button" className="btn btn-primary" onClick={handleRegister}>Register</button>
      </form>
    </div>
  );
}
