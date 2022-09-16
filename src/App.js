import React from "react";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DeviceInfo from "./pages/DeviceInfo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path=":mId" element={<DeviceInfo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
