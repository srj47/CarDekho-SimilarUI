import React from "react";
import ReactDOM from "react-dom";
// import "./App";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";

import { AuthProvider } from "./ContextApi/AuthProvider";

import Login from "./Login";
import NavBar from "./NavBar";
import SalesConsultantDashboard from "./SalesConsultant/Dashboard";
import EnquiryForm from "./SalesConsultant/EnquiryForm";
import SearchEditEnquiry from "./SalesConsultant/SearchEditEnquiry";
import CarPage from "./SalesConsultant/CarPage";
import CarDetails from "./SalesConsultant/CarDetails";
import QuotationMaster from "./SalesConsultant/QuotationMaster";
import SCApplication from "./SalesConsultant/Application";
import SCQuotationEdit from "./SalesConsultant/QuotationEdit";

// finance executive
import FEDashboard from "./FE/Dashboard";
import FELead from "./FE/Lead";
import LeadView from "./FE/LeadView";
import CuratedOffer from "./FE/CuratedOffer";

ReactDOM.render(
  <>
    <Router basename="/">
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/SCDashboard" element={<SalesConsultantDashboard />} />
          <Route path="/EnquiryForm" element={<EnquiryForm />} />
          <Route path="/SearchEditEnquiry" element={<SearchEditEnquiry />} />
          <Route path="/CarPage" element={<CarPage />} />
          <Route path="/CarDetails" element={<CarDetails />} />
          <Route path="/QuotationMaster" element={<QuotationMaster />} />
          <Route path="/SCApplication" element={<SCApplication />} />
          <Route path="/SCQuotationEdit" element={<SCQuotationEdit />} />

          <Route path="/FEDashboard" element={<FEDashboard />} />
          <Route path="/FELead" element={<FELead />} />
          <Route path="/FELeadView" element={<LeadView />} />
          <Route path="/CuratedOffer" element={<CuratedOffer />} />
          {/*
          <Route
            path="/BankExecutiveDashboard"
            element={<BankExecutiveDashboard />}
          />
          <Route
            path="/FinanceManagerDashboard"
            element={<FinanceManagerDashboard />}
          />
          <Route
            path="/SalesManagerDashboard"
            element={<SalesManagerDashboard />}
          />
          <Route
            path="/GeneralManagerDashboard"
            element={<GeneralManagerDashboard />}
          />
          <Route
            path="/BusinessHeadDashboard"
            element={<BusinessHeadDashboard />} 
          />*/}
        </Routes>
      </AuthProvider>
    </Router>
  </>,
  document.getElementById("root")
);
