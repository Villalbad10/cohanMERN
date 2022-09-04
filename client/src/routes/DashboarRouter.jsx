import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "../components/Header";
import Home from "../containers/Home";

export const DasboardRouter = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
};
