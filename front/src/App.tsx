import './App.css';

function Inputs() {
  return (
    <div className="input-container">
      <label >1 -> Hi, What’s your full name ?:</label>
      <input type="text" placeholder="Type your answer here..."/>
      <button><span>Next</span><img src="/public/fli.svg" alt=""/></button>
    </div>
  );
}

function App() {
  return (
    <>
      <div className="text-div">
        <img src='/omclogo.png' alt="OMC Logo" />
        <h1>Register Now</h1>
        <p>Fuel Your Mind and Join the Journey!</p>
      </div>
      <div className="inputs-section">
        <Inputs />
        <Inputs />
        <Inputs />
        <Inputs />
        <Inputs />

      </div>
    </>
  );
}

export default App;
