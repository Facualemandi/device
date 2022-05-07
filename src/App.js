import React, { useState } from 'react';

import Device from "./Components/Device";
import { helpHttp } from "./Helpers/HelpHttp";

function App() {
  const [advice, setAdvice] = useState('Acá encontraras un Consejo Aleatorio')
  const [number, setNumber] = useState(0)

  

  const url = 'https://api.adviceslip.com/advice'
 
  const changeAdvice = async () => {
     
     const advice = await Promise.all([helpHttp().get(url)]);

     setAdvice(advice[0].slip.advice)
     setNumber(advice[0].slip.id)
  }




  return (
     <>
        <Device changeAdvice={changeAdvice} advice={advice} number={number}/>
     </>
  );
}

export default App;
