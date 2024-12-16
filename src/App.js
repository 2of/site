import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';  
import Nav from "./nav/nav";
import routes from "./routes";
import LayoutMain from "./layouts/layout_main"; 
import { GlobalProvider, useGlobalContext } from "./contexts/globalcontext"; // Import GlobalProvider and useGlobalContext
import "./styles/main.scss";  // Import the main global SCSS file
import "./styles/_theme.scss";  
import { BackgroundPattern } from "./components/background";
import "./styles/card.scss";

function App() {
  return (
    // Wrap the entire app with GlobalProvider to provide global state
    <GlobalProvider> 
      <AppContent />
    </GlobalProvider>
  );
}

// This component will access the global context
const AppContent = () => {
  const { basename } = useGlobalContext(); // Access basename from GlobalContext

  return (
    <Router basename={basename}>  {/* Use the basename from context */}
      {/* <BackgroundPattern /> */}
      <Routes>
        {/* Define the main layout route */}
        <Route element={<LayoutMain />}>
          {/* Dynamically render routes from the routes array */}
          {routes.map((route) => (
            <Route 
              key={route.path} 
              path={route.path} 
              element={route.element} 
            />
          ))}
          {/* If the route doesn't match any, redirect to the /404 route */}
          <Route path="*" element={<Navigate to="/404" />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
