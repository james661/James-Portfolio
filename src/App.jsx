
import './App.css';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
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