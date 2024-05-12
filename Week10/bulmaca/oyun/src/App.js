import './App.css';
import { useState , useEffect } from 'react';
import { DATA } from './data';

function App() {
  const [index, setIndex] = useState(0);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");


  useEffect(() => {
    setAnswer(DATA[index].answer);
    setQuestion(DATA[index].question);
    
  }, []);

  return (
    <div className="App">
      <div>
        <span>{question}</span>
      </div>
    </div>
  );
}

export default App;
