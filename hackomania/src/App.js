import logo from './logo.svg';
import './App.css';
import { useState} from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Ingredients from './skibidi'
import HomePage from "./home"
import LoginPage from './login';
import SignUpPage from './signUp';
import AddIngredients from './Ingredients/addIngredients';
import Context from './contexts/contextualclues';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<HomePage />}/>
        <Route path="/Ingredients" exact element={<Ingredients />}/>
        <Route path="/Login" exact element={<LoginPage />}/>
        <Route path="/SignUp" exact element={<SignUpPage/>}/>
        <Route path="/AddIngredients" exact element={<AddIngredients />} />
        <Route path="/Context" exact element={<Context />}/>
      </Routes>
    </Router>
  );
}

export default App;