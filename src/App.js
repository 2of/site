import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';  
import routes from "./routes";
import LayoutMain from "./layouts/layout_main"; // Import the layout component
import "./styles/main.scss";

function App() {
  return (
    <div className="Test">


<h1>this is a short test, ignore :) </h1>

<Router basename="/2of_site">
      <Routes>
        {/* Wrap all routes in LayoutMain */}
        {routes.map((route) => (
          <Route 
            key={route.path}
            path={route.path}
            element={<LayoutMain>{route.element}</LayoutMain>} // Wrap route element with LayoutMain
          />
        ))}
      </Routes>
    </Router>
    </div>
  );
}

export default App;