import React, { useState } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faGoogle } from '@fortawesome/free-brands-svg-icons';
import "./footer.css";

const Footer = () => {
    const [open, setOpen] = useState(false);

    const handleAboutUsClick = () => {
        setOpen(true);
    };

    const handleCloseModal = () => {
        setOpen(false);
    };

    return (
        <footer className="footer">
            <div className="footer__taskbar">
                <a href="https://github.com/Kallz29/CPSKELOMPOK8" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} size="" />
                </a>
                <a href="https://www.instagram.com/cpslaboratory/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faInstagram} size="" />
                </a>
                <a href="https://lms.cpsrg.org/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGoogle} size="" />
                </a>
            </div>
            <div className="footer__about-us" onClick={handleAboutUsClick}>
                About Us
            </div>
            <a href="https://wa.me/+6282289113646" target="_blank" rel="noopener noreferrer" className="footer__whatsapp-link">
                Contact us
            </a>
            <Modal open={open} onClose={handleCloseModal} center>
                <h2>About Us</h2>
                <p>
                    Kami dari kelompok 8,Kami adalah tim yang akan mengembangkan sebuah sistem yaitu Room Fire Early Warning System, 
                    sebuah solusi inovatif untuk meningkatkan keselamatan dalam ruangan. Kami percaya bahwa deteksi dini adalah sebuah kunci untuk mencegah 
                    kerugian akibat kebakaran, dan itulah sebabnya kami menciptakan teknologi yang dapat memberikan peringatan awal dengan cepat dan akurat.
                    Tim kami beranggotakan 4 orang yakni : Muhamad Haikal Anwar, Andi Satria Rafatariq, Alika Widuri Kartika dan Tasya Putri Olivia. 
                    Bersama-sama, kami membuat Room Fire Early Warning System, sebagai sistem untuk pendeteksi akan adanya api. Terima kasih telah 
                    mengunjungi halaman kami.Jika Anda memiliki pertanyaan lebih lanjut, jangan ragu untuk menghubungi kami di . Kami sangat 
                    berharap alat yang kami buat dapat berkontribusi dalam meningkatkan keselamatan.
                </p>
            </Modal>
        </footer>
    );
};

export default Footer;
