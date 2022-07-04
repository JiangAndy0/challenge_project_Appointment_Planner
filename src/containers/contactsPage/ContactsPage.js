import React, {useState} from "react";
import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = (props) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
 const [name, setName] = useState('');
 const [phoneNum, setPhoneNum] = useState('');
 const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
    if ( ! props.contacts.some( contact => contact.name === name)) {
      props.addContact(name, phoneNum, email);
      setName('');
      setPhoneNum('');
      setEmail('');
    } else {
      alert("Please enter a new name to add the contact.");
    }
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm 
          name={name}
          setName={setName} 
          phoneNum={phoneNum}
          setPhoneNum={setPhoneNum} 
          email={email}
          setEmail={setEmail}
          onSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList infoArray={props.contacts}/>
      </section>
    </div>
  );
};
