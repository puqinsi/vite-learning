import { useState } from "react";
import { Header } from "./header/index";
import { ReactComponent as ReactLogo } from "@assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='App'>
      <Header />
      <ReactLogo className='logo' />
    </div>
  );
}

export default App;
