import logo from './logo.svg';
import './App.css';
import { useState} from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Ingredients from './skibidi'
import HomePage from "./home"

function App() {


  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<HomePage />}/>
        <Route path="/Ingredients" exact element={<Ingredients />}/>

      </Routes>
    </Router>
  );
}

export default App;