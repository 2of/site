import React from 'react';
import { useGlobalContext } from '../contexts/globalcontext'; // Import global context
import './darkmodetoggle.scss'; // Import SCSS for the component's styling
import { FaMoon, FaSun } from 'react-icons/fa'; // Import FontAwesome icons

const DarkModeToggle = () => {
  const { isDarkMode, toggleTheme } = useGlobalContext();

  return (
    <div className="darkmode-toggle" onClick={toggleTheme}>
      <input
        type="checkbox"
        className="toggle-checkbox"
        checked={isDarkMode}
        readOnly
      />
      <div className="toggle-slider">
        <span className="toggle-icon moon-icon">
          <FaMoon />
        </span>
        <span className="toggle-icon sun-icon">
          <FaSun />
        </span>
      </div>
    </div>
  );
};

export default DarkModeToggle;