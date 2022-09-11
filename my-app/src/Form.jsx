import { useState } from "react";
import React from "react";

function Form({ handleform, showModal }) {
  const [name, setName] = useState("");
  const [age, setage] = useState("");
  const [email, setemail] = useState("");
  const [mobile, setmobile] = useState("");

  return (
    <div className="bg-slate-700 p-8 border-8 rounded-xl flex flex-col gap-7 h-auto">
      {/* <label for="name">Name</label>
			<br /> */}
      <input
	  required={true}
        className="text-gray-800 pl-2 rounded-lg"
        type="text"
        placeholder="Enter Name"
        id="name"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <input
	  required={true}
        className="text-gray-800 pl-2 rounded-lg"
        type="number"
        placeholder="Enter Age"
        onChange={(e) => {
          setage(e.target.value);
        }}
      />
      <input
	  required={true}
        className="text-gray-800 pl-2 rounded-lg"
        type="number"
        placeholder="Enter Mobile Number"
        onChange={(e) => {
          setmobile(e.target.value);
        }}
      />
      <input
	  required={true}
        className="text-gray-800 pl-2 rounded-lg"
        type="email"
        placeholder="Enter Email"
        onChange={(e) => {
          setemail(e.target.value);
        }}
      />{" "}
      <br />
      <button
        className=" text-center  px-4 py-2  m-0 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-gray-900 border border-transparent rounded-md active:bg-gray-900 false"
        onClick={() => {
          handleform(name, age, mobile, email);
          showModal(false);
        }}
      >
        Submit
      </button>
      <button
        className=" text-center  px-4 py-2  m-0 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-gray-900 border border-transparent rounded-md active:bg-gray-900 false"
        onClick={() => showModal(false)}
      >
        Cancel
      </button>
    </div>
  );
}

export default Form;
