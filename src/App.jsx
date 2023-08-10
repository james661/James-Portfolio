// import { useState } from 'react';
import './App.css';
// import Project from './components/Project/Project';
import Header from './components/Header/Header';
import Footer from './components/Footer';
import { Outlet } from "react-router-dom";

export default function App() {

  return (
    <div>
      <Header />
        <main>

        <Outlet />
        </main>
      <Footer />
    </div>
  );
}