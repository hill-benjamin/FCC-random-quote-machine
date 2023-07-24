import React, { useState } from 'react';
import './App.scss';
import QuoteBox from './Components/QuoteBox'


function App() {
  const [color, setColor] = useState()

  const updateColor = (newColor)=>{
    setColor(newColor)
  }

  return (
    <div className="App" style={{backgroundColor:color}}>
      <main>
        <QuoteBox colorProp={color} updateColorProp={updateColor}/>
      </main>
    </div>
  );
}

export default App;
