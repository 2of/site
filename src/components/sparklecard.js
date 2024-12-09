import React, { useState, useRef, useEffect } from 'react';
import './sparkles.scss';

const CardWithSparkles = () => {
  const [particles, setParticles] = useState([]);
  const cardRef = useRef(null);

  // Dummy project data
  const project = {
    id: 1,
    title: 'Sparkles Test',
    description: 'How AI shapes the world we live in.',
    date: '2024-05-01',
  };

  const handleMouseEnter = () => {
    if (!cardRef.current) return;

    const cardRect = cardRef.current.getBoundingClientRect();
    const cardWidth = cardRect.width;
    const cardHeight = cardRect.height;

    const newParticles = Array.from({ length: 15 }).map(() => ({
      id: Math.random(),
      x: Math.random() * cardWidth,
      y: Math.random() * cardHeight,
      size: Math.random() * 20 + 10, // Sizes between 10px and 30px
      x_vel: Math.random() * 0.2 - 0.1, // Slow horizontal movement
      y_vel: Math.random() * 0.2 - 0.1, // Slow vertical movement
      size_vel: Math.random() * 0.02 - 0.01, // Subtle size variation
      opacity: 0,
      opacity_vel: Math.random() * 0.04 + 0.02, // Smooth opacity change
      time: Math.random() * 2 * Math.PI, // Random sine phase
    }));

    setParticles(newParticles);
  };

  const handleMouseLeave = () => {
    setParticles([]);
  };

  const updateParticles = () => {
    setParticles((prevParticles) =>
      prevParticles.map((particle) => {
        const cardRect = cardRef.current.getBoundingClientRect();
        const cardWidth = cardRect.width;
        const cardHeight = cardRect.height;

        const newX = particle.x + particle.x_vel;
        const newY = particle.y + particle.y_vel;
        const wrappedX = newX < 0 ? cardWidth : newX > cardWidth ? 0 : newX;
        const wrappedY = newY < 0 ? cardHeight : newY > cardHeight ? 0 : newY;

        const newSize = Math.max(5, Math.min(particle.size + particle.size_vel, 40));
        const newOpacity = 0.8 * (Math.sin(particle.time) + 1) / 2; // Sine-based opacity
        const newTime = particle.time + particle.opacity_vel;

        return {
          ...particle,
          x: wrappedX,
          y: wrappedY,
          size: newSize,
          opacity: newOpacity,
          time: newTime,
        };
      })
    );
  };

  useEffect(() => {
    const interval = setInterval(updateParticles, 16);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      ref={cardRef}
      className="card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="card_title">
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        <p className="date">{project.date}</p>
      </div>
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="particle"
          style={{
            left: `${(particle.x / cardRef.current.getBoundingClientRect().width) * 100}%`,
            top: `${(particle.y / cardRef.current.getBoundingClientRect().height) * 100}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: particle.opacity,
          }}
        />
      ))}
    </div>
  );
};

export default CardWithSparkles;