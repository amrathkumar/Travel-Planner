import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainHome from "./mainHome.jsx";
import FinalDest from "./mainDestination.jsx";
import FinalAbout from "./mainAbout.jsx";
import FinalCont from "./mainContact.jsx";
import DestImage from "./destImage.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<MainHome />} />
            <Route path="/map" element={<DestImage />} />
            <Route path="/user/places" element={<FinalDest />} />
            <Route path="/about" element={<FinalAbout/>}/>
            <Route path="/contact" element={<FinalCont/>}/>
        </Routes>
    </BrowserRouter>
);
