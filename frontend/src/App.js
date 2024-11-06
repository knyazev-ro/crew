import logo from "./logo.svg";
import React from "react";
import "./App.css";
import DialogeBox from "./Components/DialogeBox/DialogeBox";
import SideBarMessages from "./Sidebar/SideBarMessages";
import MessagePlace from "./Message/MessagePlace";
import Memes from "./Additional/Memes";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./Main";
import Auth from "./Auth/Auth";

export default function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Auth />} />
          <Route path="/" element={<Main />} />
        </Routes>
      </Router>
    </>
  );
}
