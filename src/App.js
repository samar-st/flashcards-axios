import React,{useState} from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AddBlog from "./components/pages/AddBlog";
import BlogList from "./components/pages/BlogList";
import "./App.css";
import EditUser from "./components/pages/EditUser";
import Login from "./components/profile/Login";
import Register from "./components/profile/Register";
import Nav from 'react-bootstrap/Nav';
import Blog from "./blogContent/Blog";

const App = () => {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BlogList />} />
          <Route path="/addUser" element={<AddBlog />} />
          <Route path="/editUser/:id" element={<EditUser />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    <Blog />
    </div>
  );
};

export default App;
