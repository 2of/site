import React from "react";
import NotFoundImage from "../res/404.png"; // Import the 404 image

export const NotFoundPage = () => { 
    return ( 
        <div className="StandardPageContainer">
            <h1>Oops! You've wandered too far... 🛸</h1>
            <h2>More likely, the routing logic for the page doesn't exist yet 🛸</h2>
            <p>
                The page you're looking for is lost in space... or maybe just didn't exist in the first place! 🚀
                Don't worry, it happens to the best of us. But hey, let's get you back on track!
            </p>
            <p>
                Try heading back to the <a href="/">home page</a> and let’s go on another adventure together. 🌍✨
            </p>
            <div className="error-image">
                <img src={NotFoundImage} alt="404 Not Found" />
            </div>
            <p>
                Or, if you’re feeling lucky, you could search for something new and exciting! 🔍
            </p>
        </div>
    );
};
