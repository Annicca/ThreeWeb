import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Контакты</h3>
          <div className="footer-contacts">
            <p>
              <a
                href="https://yandex.ru/maps/-/CHuA7V9a"
                target="_blank"
                rel="noopener noreferrer"
                className="location"
              >
                г. Москва, проспект Маршала Жукова, 35
              </a>
            </p>
            <p>
              <a href="tel:+74993421256" className="phone">
                +7 499 342-12-56
              </a>
            </p>
            <p>
              <a href="mailto:clients@zdorovaya-lapka.ru" className="email">
                clients@zdorovaya-lapka.ru
              </a>
            </p>
          </div>
        </div>
        <div className="footer-section">
          <h3>Мы в соцсетях</h3>
          <div className="social-links">
            <a
              href="https://vk.com/zdoravaya_lapka"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link vk"
            >
              ВКонтакте
            </a>
            <a
              href="https://t.me/+WqKcasdRe-VQyYasasd"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link telegram"
            >
              Telegram
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 Здоровая лапка. Все права защищены.</p>
      </div>
    </footer>
  );
}

export default Footer;
