import React, { useState } from 'react';
import fetchAnswer from '../fetchAnswer';

function Aibot() {

  const[question, setQuestion] = useState('');
  const[answer, setAnswer] = useState('');

  // let question = 'what is fitness?';

  

  const callAi = async (question) => {
    const result = await fetchAnswer(question);
    setAnswer(result);
    console.log(result);
    
    return result;
  };

  const lines = answer.split("\n").filter((line) => line.trim() !== "");





  return (
    <div>
      <input placeholder='ask me' type="text" onChange={(e) => setQuestion(e.target.value)} />
      {lines.map((line, index) =>
        line.startsWith("*") || line.startsWith("-") ? (
          <ul key={index}>
            <li>{line.replace(/[*-]/, "").trim()}</li>
          </ul>
        ) : (
          <p key={index}>{line}</p>
        )
      )}
      <button onClick={() => callAi(question)}>AI FELLOW</button>
      <h1>Aibot</h1>
    </div>
  );
}

export default Aibot;
