import React from "react";
import SideBar from "./components/SideBar";
import Home from "./components/Home";
import Favorites from "./components/Favorites"
import Footer from "./components/Footer"
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <aside>
        <SideBar />
      </aside>
      <main>
        <Home />
      </main>
      <Footer />
    </div>
  );
};

export default App;
