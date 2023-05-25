import React from "react";
import Form from "./Form";

var userIsRegistered = true;

function CreateForm(value, Input) {
  return (
    <div className="container">
      <Form ButtonText={value} Type={Input} />
    </div>
  );
}

function App() {
  return userIsRegistered === true
    ? CreateForm("Register", "rend")
    : CreateForm("Login");
}

export default App;
