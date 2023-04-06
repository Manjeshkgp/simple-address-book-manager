import React, { useState } from "react";
import Button from "./Button";

const ContactInput = () => {
  const [contact, setContact] = useState({
    Name: "",
    Number: "",
    Address: "",
  });
  return (
    <>
      <div className="w-full h-screen flex flex-col items-center">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log("submit");
          }}
          className="w-[80%] h-max lg:h-16 gap-2 p-2 lg:gap-0 min-w-80 flex flex-col lg:flex-row justify-around items-center bg-yellow-400 rounded"
        >
          <input
            type="text"
            className="focus:outline-none px-1 h-8 bg-gray-900 rounded focus:bg-gray-950"
            placeholder="Name"
            name="Name"
            value={contact.Name}
            onChange={(e) => {
              setContact((prev) => ({ prev, [e.target.name]: e.target.value }));
            }}
          />
          <input
            type="tel"
            className="focus:outline-none px-1 h-8 bg-gray-900 rounded focus:bg-gray-950"
            placeholder="Number"
            name="Number"
            value={contact.Number}
            onChange={(e) => {
              setContact((prev) => ({ prev, [e.target.name]: e.target.value }));
            }}
          />
          <input
            type="text"
            className="focus:outline-none px-1 h-8 bg-gray-900 rounded focus:bg-gray-950"
            placeholder="Address"
            name="Address"
            value={contact.Address}
            onChange={(e) => {
              setContact((prev) => ({ prev, [e.target.name]: e.target.value }));
            }}
          />
          <div type="submit">
            <Button>Add</Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ContactInput;
