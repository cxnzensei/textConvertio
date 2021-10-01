import React, {useState} from 'react';
import Navbar from './components/Navbar';
import InputForm from './components/InputForm';
// import About from './components/About';

function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    if(mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
    }
  }

  return (
    <div>
      <Navbar title="textConvertio" mode={mode} toggleMode={toggleMode}/>
      <InputForm title="Enter your text here" mode={mode}/>
      {/* <About mode={mode}/> */}
    </div>
  )
}

export default App;
