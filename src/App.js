import React from 'react';
import Navbar from './Components/Navbar';
import Subjects from './Components/Subjects';
import Footer from './Components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Subjects/>
        <Footer/>
    </div>
  );
}

export default App;
