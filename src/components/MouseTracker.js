import React from 'react'
import "../App.css";
import { useEffect, useState } from 'react';

const MousePosition = ({ render }) => {
    const [mousePosition, setMousePosition] = useState({
      x: 0,
      y: 0,
    });
  
    useEffect(() => {
      const handleMousePositionChange = (e) => {
        setMousePosition({
          x: e.clientX,
          y: e.clientY,
        });
      };
  
      window.addEventListener("mousemove", handleMousePositionChange);
  
      return () => {
        window.removeEventListener("mousemove", handleMousePositionChange);
      };
    }, []);
  
    return render({ mousePosition });
  };
  
  const MouseTracker = () => {
    return (
      <div className="tracker">
        <p>Mouse position:</p>
        <MousePosition
          render={({ mousePosition }) => (
            <div className="Row">
              <span>x: {mousePosition.x}</span>
              <span>y: {mousePosition.y}</span>
            </div>
          )}
        />
      </div>
    );
  };

  export default MouseTracker