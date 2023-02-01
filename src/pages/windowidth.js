import React, { useState, useEffect } from 'react';

const WindowWidth = () => {

  const [width, setWidth] = useState(window.innerWidth);

 
  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <h1>Window Width: {width}</h1>
    </div>
  );
};

export default WindowWidth;
