import React from "react";

export const ContactPicker = (props) => {
  return (
    <select onChange={props.onChange}>
      <option value="">--Choose A Contact--</option>
      {props.contacts.map( (contact, index) => <option value={contact.name} key={`contact${index}`}>{contact.name}</option>)}
    </select>
  );
};
