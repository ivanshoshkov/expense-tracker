import React, { useState } from "react";
import Navbar from "./components/Navigation/Navbar";
import "./App.css";
import Login from "./components/Login/Login";
function App() {
  const [logged, setlogged] = useState(false);

  return (
    <div className="App">
      {logged ? <Navbar /> : <Login click={() => setlogged(true)} />}
    </div>
  );
}

export default App;

// TODO:

// - make a link from the "morty" name so the account information can be seen
//
// - create the send money functionality > select account / add account > account details >
//
// - create the add money functionality
