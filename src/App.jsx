import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import LinkInBioUI from "./pages/LinkInBioUi";
import BrixTempleteUi from "./pages/BrixTemplateUi";
import LondonTemplateUI from "./pages/LondonTemplateUI";
import OliviaTemplateUi from "./pages/OliviaTemplateUi";
import RasylTemplateUi from "./pages/RasylTemplateUi";
import LilyTemplateUi from "./pages/LilyTemplateUi";
import AmarilysTemplateUi from "./pages/AmarilysTemplateUi";
import NeuTemplateUi from "./pages/NeuTemplateUi";
import ClaireTemplateUi from "./pages/ClaireTemplateUi";
import ArsyVision from "./components/personal/ArsyVision";
import AlKhawarizmi from "./components/personal/AlKhawarizmi";

function App() {
  return (
    <Suspense fallback={<div>Loading....</div>}>
      <Routes>
        <Route path="/" element={<ClaireTemplateUi />} />
        <Route path="/brix" element={<BrixTempleteUi />} />
        <Route path="/london" element={<LondonTemplateUI />} />
        <Route path="/olivia" element={<OliviaTemplateUi />} />
        <Route path="/rasyl" element={<RasylTemplateUi />} />
        <Route path="/lily" element={<LilyTemplateUi />} />
        <Route path="/ryls" element={<AmarilysTemplateUi />} />
        <Route path="/neu" element={<NeuTemplateUi />} />
        <Route path="/claire" element={<ClaireTemplateUi />} />

        <Route path="/vision" element={<ArsyVision />} />
        <Route path="/alkhawarizmi" element={<AlKhawarizmi />} />
      </Routes>
    </Suspense>
  );
}

export default App;
