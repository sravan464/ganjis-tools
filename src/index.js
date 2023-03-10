import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home-page";
import TaxReturns from "./pages/tax-returns";
import NoMatch from "./pages/no-match";
import TextEditor from "./pages/json-format/text-editor";
import JsonToInterface from "./pages/json-ts-interface/json-to-interface";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route path="/taxreturns" element={<TaxReturns />} />
          <Route path="/json-format" element={<TextEditor />} />
          <Route path="/json-ts" element={<JsonToInterface />} />
        </Route>
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
