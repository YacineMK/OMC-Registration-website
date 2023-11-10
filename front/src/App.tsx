import React, { useState } from 'react';
import './App.css';

interface InputProps {
  qst: string;
  onInputChange: (value: string) => void;
}

function Input({ qst, onInputChange }: InputProps) {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    onInputChange(event.target.value);
  };

  return (
    <div className="input-container">
      <label>{qst}</label>
      <input
        type="text"
        placeholder="Type your answer here..."
        value={inputValue}
        onChange={handleChange}
      />
      <button>
        <span>Next</span>
        <img src="/public/fli.svg" alt="" />
      </button>
    </div>
  );
}

function MadebyOMC() {
  return (
    <div className="end">
      <h1>Made with ❤️ By OMC</h1>
    </div>
  );
}

interface SelectProps {
  qst: string;
  onSelectChange: (value: string) => void;
}

function Select({ qst, onSelectChange }: SelectProps) {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
    onSelectChange(event.target.value);
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
  const [answers, setAnswers] = useState<string[]>([]);

  const handleInputChange = (index: number, value: string) => {
    const updatedAnswers = [...answers];
    updatedAnswers[index] = value;
    setAnswers(updatedAnswers);
  };

  const handleSelectChange = (index: number, value: string) => {
    const updatedAnswers = [...answers];
    updatedAnswers[index] = value;
    setAnswers(updatedAnswers);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Submitted Answers:', answers);
  };

  return (
    <>
      <div className="text-div">
        <img src="/omclogo.png" alt="OMC Logo" />
        <h1>Register Now</h1>
        <p>Fuel Your Mind and Join the Journey!</p>
      </div>
      <div>
        <form className="inputs-section" onSubmit={handleSubmit}>
          <Input qst="1 -> Hi, What’s your full name ?:" onInputChange={(value) => handleInputChange(0, value)} />
          <Input qst="2 -> What’s your Email ?" onInputChange={(value) => handleInputChange(1, value)} />
          <Input qst="3 -> What's your Phone Number ?" onInputChange={(value) => handleInputChange(2, value)} />
          <Input qst="4 -> What is your University" onInputChange={(value) => handleInputChange(3, value)} />
          <Input qst="5 -> What is your Study field" onInputChange={(value) => handleInputChange(4, value)} />
          <Select qst="6 -> Year of Study ?" onSelectChange={(value) => handleSelectChange(5, value)} />
          <Input qst="7 -> What's your Phone Number ?" onInputChange={(value) => handleInputChange(6, value)} />
          <Input qst="8 -> What's your Discord id?" onInputChange={(value) => handleInputChange(7, value)} />
          <Input qst="9 -> What you know about Open Source ?" onInputChange={(value) => handleInputChange(8, value)} />
          <Input qst="10 -> What's your skills ?" onInputChange={(value) => handleInputChange(9, value)} />
          <Input qst="11 -> Your GitHub / LinkedIn or Portfolio?" onInputChange={(value) => handleInputChange(10, value)} />
          <Input qst="12 -> How you know OMC ?" onInputChange={(value) => handleInputChange(11, value)} />
          <Input qst="13 -> What do you know about OMC ?" onInputChange={(value) => handleInputChange(12, value)} />
          <Input qst="14 -> Why You want to join OMC ?" onInputChange={(value) => handleInputChange(13, value)} />
          <Input qst="15 -> Anything to Add ?" onInputChange={(value) => handleInputChange(14, value)} />
          <button type="submit" className="sub" id="Submit">
            Submit
          </button>
        </form>
      </div>
      <MadebyOMC />
    </>
  );
}

export default App;
