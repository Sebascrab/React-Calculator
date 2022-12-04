
import './App.css';
import { Button } from './components/button';
import { Input } from './components/input'

const App = () => {
  return (
    <div className="App">
      <div className='calc-wrap'>
          <Input />
        <div className='row'>
          <Button symbol="7" />
          <Button symbol="8" />
          <Button symbol="9" />
          <Button symbol="/" color="orange" />
        </div>
        <div className='row'>
          <Button symbol="4" />
          <Button symbol="5" />
          <Button symbol="6" />
          <Button symbol="*" color="orange"/>
        </div>
        <div className='row'>
          <Button symbol="1" />
          <Button symbol="2" />
          <Button symbol="3" />
          <Button symbol="+" color="orange" />
        </div>
        <div className='row'>
          <Button symbol="0" />
          <Button symbol="." />
          <Button symbol="=" />
          <Button symbol="-" color="orange"/>
        </div>

        <Button symbol="clear" color="orange" />

      </div>
    </div>
  );
}

export default App;
