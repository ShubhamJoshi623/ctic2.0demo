import React from "react";
import { BrowserRouter as Router, Link, Outlet } from "react-router-dom";
import Headernavbar from "../components/Headernavbar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Headernavbar />

      <Outlet />

      <Footer />
    </>
  );
}
