import React from "react";
import Header from "./components/Header";
import ContactInput from "./components/ContactInput";
import Contact from "./components/Contact";
import { useSelector } from "react-redux";
import { useState } from "react";

const App = () => {
  const contacts = useSelector((state) => state.contacts.allContacts);
  const [update, setUpdate] = useState(false);
  const [contact, setContact] = useState({
    Name: "",
    Number: "",
    Address: "",
  });
  const [oldObj, setOldObj] = useState({
    Name: "",
    Number: "",
    Address: "",
  });
  return (
    <>
      <Header />
      <div className="h-max my-6 flex justify-center items-center">
        <ContactInput
          update={update}
          contact={contact}
          setContact={setContact}
          oldObj={oldObj}
          setOldObj={setOldObj}
        />
      </div>
      <div className="h-max my-6 flex flex-col gap-y-4 justify-center items-center">
        {contacts.map((contact) => (
          <Contact key={contact?.Number} data={contact} setUpdate={setUpdate} setOldObj={setOldObj} setContact={setContact} />
        ))}
      </div>
    </>
  );
};

export default App;
