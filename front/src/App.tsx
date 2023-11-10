import React, { useState } from 'react';
import './App.css';

function Input({ qst }: { qst: string }) {
  return (
    <div className="input-container">
      <label>{qst}</label>
      <input type="text" placeholder="Type your answer here..." />
      <button>
        <span>Next</span>
        <img src="/public/fli.svg" alt="" />
      </button>
    </div>
  );
}

function Select({ qst }: { qst: string }) {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="input-container">
      <label>{qst}</label>
      <select value={selectedOption} onChange={handleOptionChange}>
        <option value="">Select Your Study year</option>
        <option value="option1">L1</option>
        <option value="option2">L2</option>
        <option value="option3">L3</option>
        <option value="option4">M1</option>
        <option value="option5">M2</option>
      </select>
      <button>
        <span>Next</span>
        <img src="/public/fli.svg" alt="" />
      </button>
    </div>
  );
}

function App() {
  return (
    <>
      <div className="text-div">
        <img src="/omclogo.png" alt="OMC Logo" />
        <h1>Register Now</h1>
        <p>Fuel Your Mind and Join the Journey!</p>
      </div>
      <div className="inputs-section">
        <Input qst="1 -> Hi, What’s your full name ?:" />
        <Input qst="2 -> What’s your Email ?" />
        <Input qst="3 -> What's your Phone Number ?" />
        <Input qst="4 -> What is your University" />
        <Input qst="5 -> What is your Study field" />
        <Select qst="6 -> Year of Study ?" />
        <Input qst="7 -> What's your Phone Number ?" />
        <Input qst="8 -> What's your Discord id?" />
        <Input qst="9 -> What you know about Open Source ?" />
        <Input qst="10 -> What's your skills ?" />
        <Input qst="11 -> Your GitHub / LinkedIn or Portfolio?" />
        <Input qst="12 -> How you know OMC ?" />
        <Input qst="13 -> What do you know about OMC ?" />
        <Input qst="14 -> Why You want to join OMC ?" />
        <Input qst="15 -> Anything to Add ?" />
      </div>
    </>
  );
}

export default App;
