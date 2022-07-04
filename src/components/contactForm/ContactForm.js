import React from "react";

export const ContactForm = (props) => {

  const phonePattern= "[1-9][0-9]{2}-[1-9][0-9]{2}-[0-9]{4}";

  const handleName = ({target}) => {
    props.setName(target.value);
  }

  const handlePhone = ({target}) => {
    props.setPhoneNum(target.value);
  }

  const handleEmail = ({target}) => {
    props.setEmail(target.value);
  }

  return (
    <form onSubmit={props.onSubmit}>
      <input 
        type="text" 
        placeholder="Enter Name" 
        value={props.name}
        onChange={handleName}
      />
      <input 
        type="tel" 
        placeholder="Enter Phone Number" 
        pattern={phonePattern} 
        value={props.phoneNum}
        onChange={handlePhone}
      />
      <input 
        type="email" 
        placeholder="Enter E-mail" 
        value={props.email}
        onChange={handleEmail}
      />
      <input type="submit" />
    </form>
  );
};
