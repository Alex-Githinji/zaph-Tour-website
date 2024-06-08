import { BrowserRouter, Routes, Route } from "react-router-dom";
import Destinations from "./pages/destination/Destinations";
import Home from "./pages/home/Home";
import Header from "./components/Header";
import Trips from "./pages/trip/Trips";
import Contact from "./pages/contact/Contact";
import Footer from "./components/Footer";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Destinations" element={<Destinations />} />
          <Route path="/Trips" element={<Trips />} />
          <Route path="/Contact us" element={<Contact us />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
