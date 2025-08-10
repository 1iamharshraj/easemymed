import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./Pages/Home";
import ContactUs from "./Pages/ContactUs";
import AboutUs from "./Pages/AboutUs";
import Blogs from "./Pages/Blogs";
import EaseMyMedCamps from "./Pages/EaseMyMedCamps";
import PaperlessCamp from "./Pages/PaperlessCamp";
import ARMedicalSurgery from "./Blogs/ARMedicalSurgery";
import SurgeryWithAi from "./Blogs/SurgeryWithAi";
import ArAiInMedicine from "./Blogs/ArAiInMedicine";
import { AlertContainer } from "./Component/Common/ReactToast";

function App() {
  return (
    <Router>
      <div className="App">
        <AlertContainer />
        <Routes>
          {/* Main Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/camps" element={<PaperlessCamp />} />
          
          {/* Individual Blog Posts */}
          <Route 
            path="/augmented-reality-revolutionizing-medical-surgery" 
            element={<ARMedicalSurgery />} 
          />
          <Route 
            path="/transforming-surgery-with-ai" 
            element={<SurgeryWithAi />} 
          />
          <Route 
            path="/ar-ai-in-medicine" 
            element={<ArAiInMedicine />} 
          />
          
          {/* Fallback for unknown routes */}
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;