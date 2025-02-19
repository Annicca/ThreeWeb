import React from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import ServicesTabMenu from "./components/service-tab-menu/ServicesTabMenu";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <ServicesTabMenu />
      </main>
      <Footer />
    </div>
  );
}

export default App;
