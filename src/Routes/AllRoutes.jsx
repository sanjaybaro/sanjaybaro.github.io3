import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "../Components/About";
import Contact from "../Components/Contact";
import Home from "../Components/Home";
import Project from "../Components/Project";
import Skill from "../Components/Skill";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/skill" element={<Skill />}></Route>
        <Route path="/project" element={<Project />}></Route>
      </Routes>
    </div>
  );
};

export default AllRoutes;
