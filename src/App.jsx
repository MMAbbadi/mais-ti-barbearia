import React from "react";
import { Routes, Route} from 'react-router-dom'
import SideBar from "./components/SideBar";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites"
import Appointment from "./pages/Appointment";
import Footer from "./components/Footer"
import "./App.css";
import Register from "./pages/Register";



const App = () => {
  return (
    <div className="app">
      <aside>
        <SideBar />
      </aside>
      <main>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/favorites" element={<Favorites />}/>
            <Route path="/appointment" element={<Appointment />}/>
            <Route path="/register" element={<Register />} />
          </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
