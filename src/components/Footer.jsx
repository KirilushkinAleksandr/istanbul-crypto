import React from "react";

function Footer() {
  return (
    <footer lang="en" className="footer">
      <div className="footer__group">
        <p className="footer__item">&copy; Antalya 2022 </p>
      </div>
      <div className="footer__group">
        <p className="footer__item">insta</p>
        <p className="footer__item">whatsapp</p>
        <p className="footer__item">facebook</p>
      </div>
      <div className="footer__group">
        <p className="footer__item">адрес</p>
        <p className="footer__item">контакты</p>
      </div>
      <div className="footer__group">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1424.1145734511535!2d28.967837427400756!3d41.01147926581093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab9a4f3a3b3f7%3A0xb967e535944a711f!2sBTL%20Coin%20-%20Crypto%20Exchange!5e0!3m2!1sru!2str!4v1671741274361!5m2!1sru!2str"
          width="400"
          height="300"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Office map"
        />
      </div>
    </footer>
  );
}

export default Footer;
