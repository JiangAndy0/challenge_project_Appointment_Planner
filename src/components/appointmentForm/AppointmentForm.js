import React from "react";
import {ContactPicker} from '../contactPicker/ContactPicker';

export const AppointmentForm = (props) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };
  const handleTitle = ({target}) => {
    props.setTitle(target.value);
  }

  const handleDate = ({target}) => {
    props.setDate(target.value);
  }

  const handleTime = ({target}) => {
    props.setTime(target.value);
  }
  const handleContact = ({target}) => {
    props.setContact(target.value);
  }


  return (
    <form onSubmit={props.onSubmit}>
      <input 
        type="text" 
        placeholder="Enter Title" 
        value={props.title}
        onChange={handleTitle}
      />
      <input 
        type="date" 
        min={getTodayString()}
        value={props.date}
        onChange={handleDate}
      />
      <input 
        type="time"
        value={props.time}
        onChange={handleTime}
      />
      <ContactPicker contacts={props.contacts} onChange={handleContact}/>
      <input type="submit" />
    </form>
  );
};
