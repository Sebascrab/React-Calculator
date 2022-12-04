
import './App.css';
import { Button } from './components/button';
import { Input } from './components/input'

import { useState } from 'react';

const App = () => {

  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  const addToText = (val) => {
    setText((text) => [...text, val + " "]);
  };

  const buttonColor = 'orange'


  return (
    <div className="App">
      <div className='calc-wrap'>
          <Input text={text} result={result} />
        <div className='row'>
          <Button symbol="7" />
          <Button symbol="8" />
          <Button symbol="9" />
          <Button symbol="/" color={buttonColor} />
        </div>
        <div className='row'>
          <Button symbol="4" />
          <Button symbol="5" />
          <Button symbol="6" />
          <Button symbol="*" color={buttonColor}/>
        </div>
        <div className='row'>
          <Button symbol="1" />
          <Button symbol="2" />
          <Button symbol="3" />
          <Button symbol="+" color={buttonColor} />
        </div>
        <div className='row'>
          <Button symbol="0" />
          <Button symbol="." />
          <Button symbol="=" />
          <Button symbol="-" color={buttonColor}/>
        </div>

        <Button symbol="clear" color="red" />

      </div>
    </div>
  );
}

export default App;
