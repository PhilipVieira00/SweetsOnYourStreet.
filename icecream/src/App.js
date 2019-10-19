import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Buttons from "./components/Buttons";
import Navbar from "./components/Navbar";
import Map from "./components/Map/Map"




function App() {
    return (
      <div>
        
        <Header />
        <Navbar />
        <Buttons />
        <Map/>
      
        <Footer />

        
      </div>
    );
  }

export default App;
