import "./App.css";
import React from "react";
import Sidebar from "./components/sidebar/Sidebar";
import { BrowserRouter } from "react-router-dom";
import Content from "./components/content/Content";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const App = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <BrowserRouter>
        <div
          className="main-container"
          style={{
            display: "flex",
            height: "100vh",
          }}>
          <div
            className="Sidebar-container"
            style={{
              width: "300px",
            }}>
            <Sidebar />
          </div>

          <div style={{ width: "100%", padding: "10px" }}>
            <Content />
          </div>
        </div>
      </BrowserRouter>
    </LocalizationProvider>
  );
};

export default App;
