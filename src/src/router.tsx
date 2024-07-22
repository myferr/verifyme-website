import React from "react";
import { Routes, Route } from "react-router-dom";
import { HashRouter } from "react-router-dom";

// Import pages
import Index from "./pages/App";
import AddBot from "./pages/AddBot";
import Premium from "./pages/Premium";
import Docs from "./pages/Docs";
import Support from "./pages/Support";
import GetPremium from "./pages/GetPremium";
import TermsOfService from "./pages/Terms";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import OurTeam from "./pages/Team";
import Commands from "./pages/Commands";

export const routes = () => {
  return (
    <React.StrictMode>
      <HashRouter>
        <Routes>
          <Route index element={<Index />} />
          <Route path="/add-bot" element={<AddBot />} />
          <Route path="/premium" element={<Premium />} />
          <Route path="/docs" element={<Docs />} />
          <Route path="/support" element={<Support />} />
          <Route path="/get-premium" element={<GetPremium />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/team" element={<OurTeam />} />
          <Route path="/commands" element={<Commands />} />
        </Routes>
      </HashRouter>
    </React.StrictMode>
  );
};
