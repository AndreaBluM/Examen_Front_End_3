import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'
import Form from './Components/Form'
import Error from './Components/Error'


function App() {
  const [isValid, setIsValid] = useState(true);
  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = (nombre, dragon, compania) => {
    if (nombre.length < 3 || nombre.startsWith(' ') || dragon.length < 2 || compania.length < 4) {
      setIsValid(false);
      setSubmittedData(null);
    } else {
      setIsValid(true);
      setSubmittedData({ nombre, dragon, compania });
    }
  };

  return (
    <div className="app-container">
      <Form onSubmit={handleSubmit} />
      {!isValid && <Error />}
      {isValid && submittedData && <Card {...submittedData} />}
    </div>
  );
}

export default App
