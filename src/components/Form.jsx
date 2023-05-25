import React from "react";

function confirmType(value) {
  if (value === "rend") {
    return <input type="password" placeholder="Confirm Password" />;
  } else {
    return null;
  }
}

function Form(props) {
  return (
    <form className="form">
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      {confirmType(props.Type)}
      <button type="submit">{props.ButtonText}</button>
    </form>
  );
}

export default Form;
