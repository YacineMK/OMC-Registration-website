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
        <Inputs qst="1 -> Hi, What’s your full name ?:"/>
        <Inputs qst="2 -> What’s your Email ?"/>
        <Inputs qst="3 -> What's your Phone Number ?"/>
        <Inputs qst="4 -> What's your Discord id?"/>
        <Inputs qst="5 -> What's you know about Open Source ?"/>
        <Inputs qst="6 -> What's your skills"/>
        <Inputs qst="7 -> How you know OMC ?"/>
        <Inputs qst="8 -> What do you know about OMC ?"/>
        <Inputs qst="9 -> What do you know about OMC ?"/>


      </div>
    </>
  );
}

export default App;
