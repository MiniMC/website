/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

require('./bootstrap');


import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Page from './components/components/Page';
import Home from "./components/pages/Home";
import Link from './components/pages/Link';
import Login from './components/pages/Login';
import Me from './components/pages/Me';
import Store from './components/pages/Store';
import { useNavigate } from "react-router-dom";
import Linked from './components/pages/Linked';

function Discord() {
    let navigate = useNavigate();
    navigate("https://discord.gg/Vuz9hcUQBp");
}

function App() {
    return (
        <Page>
            <Routes>
                <Route path="/store" element={<Store /> } exact/>
                <Route path="/login" element={<Login /> } exact/>
                <Route path="/me" element={<Me /> } exact/>
                <Route path="/link" element={<Link /> } exact/>
                <Route path="/linked" element={<Linked /> } exact/>
                <Route path="/discord" component={Discord} exact/>
            </Routes>    
        </Page>
    );
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home /> } exact />
                <Route path="/home" element={<Home /> } exact />
                <Route path="*" element={<App /> } />
            </Routes>
        </BrowserRouter>
            , document.getElementById('app'));
}