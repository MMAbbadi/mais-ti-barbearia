import React from "react";
import SideBar from "./components/SideBar";
import Home from "./components/Home";
import Favorites from "./pages/Favorites"
import { Appointment } from "./pages/Appointment";
import Footer from "./components/Footer"
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <aside>
        <SideBar />
      </aside>
      <main>
        <Favorites />
      </main>
      <Footer />
    </div>
  );
};

export default App;
