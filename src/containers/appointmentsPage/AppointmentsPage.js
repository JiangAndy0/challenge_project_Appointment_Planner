import React, {useState} from "react";
import {AppointmentForm} from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = (props) => {
  /*
  Define state variables for 
  appointment info
  */
 const [title, setTitle] = useState('');
 const [contact, setContact] = useState('');
 const [date, setDate] = useState('');
 const [time, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add Appointment info and clear data  
    */
   props.addAppoint(title, contact, date, time);
   
   setTitle('');
   setContact('');
   setDate('');
   setTime('');
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm 
          title={title} 
          setTitle={setTitle}
          contact={contact}
          setContact={setContact}
          contacts={props.contacts}
          date={date}
          setDate={setDate}
          time={time}
          setTime={setTime}
          onSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList infoArray={props.appoints} />
      </section>
    </div>
  );
};
