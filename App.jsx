import React, { useState, useEffect } from 'react';
import SplashScreen from './SplashScreen';
import Calculator from './Calculator'; 

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
  //timer
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

   
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <SplashScreen />; 
  }

  return <Calculator />; 
};

export default App;
