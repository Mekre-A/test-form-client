import "./index.css";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "./components/Details";
import Success from "./components/Success";

const root = document.getElementById("root");

render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Details />}></Route>
      <Route path="success" element={<Success />}></Route>
      <Route path="*" element={<p>There's nothing here!</p>} />
    </Routes>
  </BrowserRouter>,
  root
);
