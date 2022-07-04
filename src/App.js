import React, {useState} from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  /*
  Define state variables for 
  contacts and appointments 
  */
 const [contacts, setContacts] = useState([]);
 const [appoints, setAppoints] = useState([]);

  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

  /*
  Implement functions to add data to
  contacts and appointments
  */

  //Given a name, phone number, and email, adds a new contact object to array of contacts
  const addContact = (name, phoneNum, email) => {
    const newContact = { name, phoneNum, email};
    setContacts( prev => [newContact, ...prev]);
  }

  //Given a title, contact, data, and time, adds a new appointment object to array of appointments
  const addAppoint = (title, contact, data, time) => {
    const newAppoint = {title, contact, data, time};
    setAppoints( prev => [newAppoint, ...prev]);
  }

  return (
    <>
      <nav>
        <NavLink to={ROUTES.CONTACTS} activeClassName="active">
          Contacts
        </NavLink>
        <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">
          Appointments
        </NavLink>
      </nav>
      <main>
        <Switch>
          <Route exact path="/">
            <Redirect to={ROUTES.CONTACTS} />
          </Route>
          <Route path={ROUTES.CONTACTS}>
             {/* Add props to ContactsPage */}
            <ContactsPage contacts={contacts} addContact={addContact}/>
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            {/* Add props to AppointmentsPage */}
            <AppointmentsPage contacts={contacts} appoints={appoints} addAppoint={addAppoint}/>
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
