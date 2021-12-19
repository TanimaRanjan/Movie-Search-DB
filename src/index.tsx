import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./components/App";
import configureStore from "./store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Playlist from "./components/Playlist";

const router = (
    <Provider store={configureStore()}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="playlist" element={<Playlist />} />
            </Routes>
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(router, document.getElementById("root"));
