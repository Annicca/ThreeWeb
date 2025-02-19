import React from "react";
import "./Header.css";
import logo from "../../assets/logo.svg"; // Импортируем логотип

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Здоровая лапка" />
      </div>
      <h1 className="title">Здоровая лапка</h1>
    </header>
  );
}

export default Header;
