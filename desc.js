import React from 'react';
import './desc.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import logo from './images/rf2.png';

function Desc() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Menampilkan judul dengan logo dan tanpa deskripsi */}
        <div className="title-container">
          <h1>RFEWS</h1>
          <img src={logo} alt="Logo" className="logo-image" />
        </div>
        {/* Menampilkan deskripsi tanpa animasi */}
        <div className="description-container show">
          <p>
            Alat yang kami buat adalah Room Fire Early Warning System, dimana
            alat ini merupakan alat peringatan akan potensi adanya api pada
            suatu ruangan. Alat yang kami buat ini menggunakan dua buah
            sensor. Pertama adalah sensor DHT11, yang berfungsi untuk
            mendeteksi suhu pada suatu ruangan. Kedua adalah sensor MQ-2,
            yang berfungsi untuk mendeteksi ketebalan asap. Cara kerja alat
            ini adalah, ketika sensor DHT11 mendeteksi suhu ruangan tersebut
            lebih dari 45°C dan sensor MQ-2 mendeteksi ketebalan asap pada
            ruangan tersebut lebih dari 700 ppm, maka buzzer pada alat
            tersebut akan berbunyi sebagai tanda peringatan dan suhu serta
            ketebalan asap pada ruangan tersebut akan ditampilkan pada LCD
            yang tersedia dan diupload ke firebase.
          </p>
        </div>
      </header>
    </div>
  );
}

export default Desc;
