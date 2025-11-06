import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar.jsx";
import { Card } from "./components/Card.jsx";
import { Contact } from "./pages/Contact.jsx";
import { Footer } from "./components/Footer.jsx";
import  { Home } from "./pages/MainPages/Home.jsx";
import  { About } from "./components/About.jsx";
import { WebDevelopmentPage } from "./pages/MainPages/WebDevelopmentPage.jsx";
import {UIUXDesignPage} from "./pages/MainPages/UiUxDesignPage.jsx";
import {SEOOptimizationPage} from "./pages/MainPages/SEOOptimizationPage.jsx";
import {MobileAppPage} from "./pages/MainPages/MobileAppPage.jsx";
import {EcommercePage} from "./pages/MainPages/EcommercePage.jsx"
import {DigitalMarketingPage} from "./pages/MainPages/DigitalMarketingPage.jsx";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/card" element={<Card />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/web-developpement" element={<WebDevelopmentPage />} />
        <Route path="/ui-ux" element={<UIUXDesignPage />} />
        <Route path="/seo-optimization" element={<SEOOptimizationPage />} />
        <Route path="/mobile-app-development" element={<MobileAppPage />} />
        <Route path="/ecommerce-solutions" element={<EcommercePage />} />
        <Route path="/digitale-marketing" element={<DigitalMarketingPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
