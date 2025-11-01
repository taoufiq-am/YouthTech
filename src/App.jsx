
// import React from "react";
// import { Navbar } from "../src/components/Navbar.jsx";
// import { Hero } from "./components/Hero.jsx";
// import { Contact } from "./components/Contact.jsx";
// import { Card } from "./components/Card.jsx";

// const App = () => {
//   return (
//     <div className="overflow-x-hidden">
//       <Navbar />
//       <Hero />
//       {/* <Contact /> */}
//       <Card />
//     </div>
//   );
// };

// export default App;
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar.jsx";
import { Card } from "./components/Card.jsx";
import { Contact } from "./components/Contact.jsx";
import { Hero } from "./components/Hero.jsx"; // make sure this exists
import { Footer } from "./components/Footer.jsx";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/card" element={<Card />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
