import React, { useState } from "react";
import "./App.css";
import "animate.css";
import axios from "axios";

interface InputProps {
  qst: string;
  id: number;
  name: string;
  type: string;
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function Input({ qst, name, type, id, onInputChange }: InputProps) {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    onInputChange(event);
  };

  return (
    <div
      className="input-container animate__animated animate__fadeInUp"
      id={`${id}`}
    >
      <label>{qst}</label>
      <input
        name={name}
        type={type}
        placeholder="Type your answer here..."
        value={inputValue}
        onChange={handleChange}
        required
      />
      {/* <button type="button">
        <span>Next</span>
        <img src="/public/fli.svg" alt="" />
      </button> */}
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

// interface SelectProps {
//   qst: string;
//   id: number;
//   onSelectChange: (value: string) => void;
// }

// function Select({ qst, onSelectChange }: SelectProps) {
//   const [selectedOption, setSelectedOption] = useState('');

//   const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
//     setSelectedOption(event.target.value);
//     onSelectChange(event.target.value);
//   };

//   return (
//     <div className="input-container">
//       <label>{qst}</label>
//       <select value={selectedOption} onChange={handleOptionChange}>
//         <option value="">Select Your Study year</option>
//         <option value="option1">L1</option>
//         <option value="option2">L2</option>
//         <option value="option3">L3</option>
//         <option value="option4">M1</option>
//         <option value="option5">M2</option>
//       </select>
//       <button>
//         <span>Next</span>
//         <img src="/public/fli.svg" alt="" />
//       </button>
//     </div>
//   );
// }

function App() {
  const [answers, setAnswers] = useState({
    name: "",
    email: "",
    phone: "",
    university: "",
    matricule: "",
    field: "",
    discord: "",
    motivation: "",
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // if (!event || !event?.target?.name) return;
    setAnswers({ ...answers, [event.target.name]: event.target.value });
    console.log(answers);
    // const updatedAnswers = [...answers];
    // updatedAnswers[index] = value;
    // setAnswers(updatedAnswers);
  };

  // const handleSelectChange = (index: number, value: string) => {
  //   const updatedAnswers = [...answers];
  //   updatedAnswers[index] = value;
  //   setAnswers(updatedAnswers);
  // };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Submitted Answers:", answers);
    const data = answers;
    const msg = document.getElementById("msg");
    msg.className = "";
    msg.innerHTML = "";
    axios
      .post("http://localhost:3003/register", data)
      .then((res) => {
        console.log(res.data);
        
        if (res.data.err) {
          msg.innerHTML = `${res.data.errors[0].msg}`;
          msg.className = "error animate__animated animate__shakeX";
        } else {
          msg.innerHTML = `<p class="success">${res.data.msg}</p>`;
          msg.className = "success";
        }
      })
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
          <Input
            type="text"
            name="name"
            id={1}
            qst="1 -> Hi, What’s your full name ?"
            onInputChange={handleInputChange}
          />
          <Input
            type="email"
            name="email"
            id={2}
            qst="2 -> What’s your Email ?"
            onInputChange={handleInputChange}
          />
          <Input
            type="phone"
            name="phone"
            id={3}
            qst="3 -> What's your Phone Number ?"
            onInputChange={handleInputChange}
          />
          <Input
            type="text"
            name="university"
            id={4}
            qst="4 -> What is your University"
            onInputChange={handleInputChange}
          />
          <Input
            type="text"
            name="matricule"
            id={4}
            qst="4 -> What is your student ID number (Matricule)"
            onInputChange={handleInputChange}
          />
          <Input
            type="text"
            name="field"
            id={5}
            qst="5 -> What is your Study field"
            onInputChange={handleInputChange}
          />
          <Input
            type="text"
            name="discord"
            id={8}
            qst="8 -> What's your Discord id?"
            onInputChange={handleInputChange}
          />
          {/* <Input id=1 qst="11 -> Your GitHub / LinkedIn or Portfolio?" onInputChange={(value) => handleInputChange(10, value)} /> */}
          <Input
            type="text"
            name="motivation"
            id={9}
            qst="14 -> What's your motivation to join OMC ?"
            onInputChange={handleInputChange}
          />
          <button type="submit" className="sub" id="Submit">
            Submit
          </button>
        </form>
        <p id="msg"></p>
      </div>
      <MadebyOMC />
    </>
  );
}

export default App;
