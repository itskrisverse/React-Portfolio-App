import React from 'react'
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">KrisVerse</h1>

        <div className="footer__social">
        <a href="https://www.instagram.com/itskrisverse" className="footer__social-link" target="_blank" rel="noreferrer" >
            <i className="uil uil-instagram"></i>
        </a>

        <a href="https://www.youtube.com/KrisVerse" className="footer__social-link" target="_blank" rel="noreferrer">
        <i className="uil uil-youtube"></i>
        </a>

        <a href="https://github.com/itskrisverse" className="footer__social-link" target="_blank" rel="noreferrer">
         <i className="uil uil-github"></i>
        </a>
        </div>

        <span className="footer__copyright">
          &#169; 2023 KrisVerse. All rights reserved.
          </span>
      </div>
    </footer>
  )
}

export default Footer