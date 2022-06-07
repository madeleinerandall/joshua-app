import "./App.scss";
import Header from "./Header";
import Contact from "./Contact";
// import ActionAreaCard from "./Homepage/ActionAreaCard";
import HomePage from "./Homepage/HomePage";
import Tc from "./Tc";
import Footer from "./Footer";

import { Routes, Route, Link } from "react-router-dom";
import PropertyAndConveyancing from "./PropertyAndConveyancing";
import PersonalInjury from "./PersonalInjury";
import WillsAndEstates from "./WillsAndEstates";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tc" element={<Tc />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/property-and-conveyancing"
          element={<PropertyAndConveyancing />}
        />
        <Route path="/personal-injury" element={<PersonalInjury />} />
        <Route path="/wills-and-estates" element={<WillsAndEstates />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
