import { useState } from 'react';
import './App.css';
import { Header } from './header/index';
import { ReactComponent as ReactLogo } from '@assets/react.svg';
import { version } from '../package.json';
console.log(version);
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='App'>
      <Header />
      <ReactLogo />
    </div>
  );
}

export default App;
