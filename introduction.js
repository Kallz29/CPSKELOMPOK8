import React from 'react';
import './introduction.css'; // Import CSS file for styling
import img1 from './images/kal.jpeg';
import img2 from './images/rafa.jpeg';
import img3 from './images/ali.jpg';
import img4 from './images/tas.jpg';

function Introduction() {
  return (
    <div className="team-profile">
      <h1 className="team-title">Profile</h1>
      <div className="team-members">
        <div className="team-member">
          <img src={img1} alt="Haikal"/>
          <p>M Haikal Anwar</p>
        </div>
        <div className="team-member">
          <img src={img2} alt="Rafa" />
          <p>Andi Satria Rafatariq</p>
        </div>
        <div className="team-member">
          <img src={img3} alt="Alika" />
          <p>Alika Widuri Kartika</p>
        </div>
        <div className="team-member">
          <img src={img4} alt="Tasya" />
          <p>Tasya Putri Olivia</p>
        </div>
      </div>
    </div>
  );
}

export default Introduction;
