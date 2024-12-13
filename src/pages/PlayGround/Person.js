import React from 'react';
import './Person.css';

const skinTones = {
    black: '#3D0C02',
    brown: '#8D5524',
    lightBrown: '#C68642',
    tan: '#E0AC69',
    lightTan: '#F1C27D',
    white: '#FFDBAC'
};

const wardrobe = {
    shorts: [
        'var(--primary-color)',   
        'var(--secondary-color)',     // Soft Orange (from your root)
        '#F1C27D',                      // Light Tan (complementary neutral)
        '#8E44AD',                      // Purple (from dark mode theme)
        '#FF5733',                      // A more vibrant red-orange
        '#FF6F61',                      // Soft coral red
    ],
    shirts: [
        'var(--secondary-color)',            // Dark Gray Text (from your root)
        '#3498DB',                      // Soft Blue (complementary to your site colors)
        '#1ABC9C',                      // Teal (contrasting with the warm tones)
        '#FFEB3B',        
        'var(--primary-color)',                 // Bright Yellow (to add a lively color)
        '#9B59B6',                      // Purple (similar to the dark mode theme)
    ]
};
const getRandomElement = (arr) => arr[Math.floor(Math.random() * arr.length)];
const getRandomObjectKey = (obj) => getRandomElement(Object.keys(obj));

const Person = ({
    shirtColor = wardrobe.shirts[0],
    shortsColor = wardrobe.shorts[0],
    skinTone = 'lightTan',
    hasArms = true,
    hasLegs = true, // New prop with a default value of true
    random = false
}) => {
    // Assign random values if `random` is true
    if (random) {
        shirtColor = getRandomElement(wardrobe.shirts);
        shortsColor = getRandomElement(wardrobe.shorts);
        skinTone = getRandomObjectKey(skinTones);
    }

    const headAndLegStyle = {
        backgroundColor: skinTones[skinTone],
    };

    const shirtStyle = {
        backgroundColor: shirtColor,
    };

    const shortsStyle = {
        backgroundColor: shortsColor,
    };

    return (
        <div className="person">
            <div className="head" style={headAndLegStyle}></div>
            {hasArms && <div className="arm left-arm" style={headAndLegStyle}></div>}
            {hasArms && <div className="arm right-arm" style={headAndLegStyle}></div>}
            <div className="shirt" style={shirtStyle}></div>
            {hasLegs && (
                <>
                    <div className="shorts" style={shortsStyle}></div>
                    <div className="leg left-leg" style={headAndLegStyle}></div>
                    <div className="leg right-leg" style={headAndLegStyle}></div>
                </>
            )}
        </div>
    );
};

export default Person;