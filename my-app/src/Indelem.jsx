import React from "react";
import { useState } from "react";
import Form from "./Form";

function Indelem({
  name,
  email,
  age,
  mobile,
  id,
  deletedata,
  editdata,
  showModal,
  setShowModal,
}) {
  const [openform, setopenform] = useState(false);
  const [names, setnames] = useState(name);
  const [ages, setages] = useState(age);
  const [emails, setemails] = useState(email);
  const [mobiles, setmobiles] = useState(mobile);
  return (
    <>
      <tr>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-gray-500 text-left border-y-2 text-sm ">
          {name}
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-gray-500 text-left border-y-2 text-sm">
          {email}
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-gray-500 text-left border-y-2 text-sm">
          {age}
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-gray-500 text-left border-y-2 text-sm">
          {mobile}
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-gray-500 text-left border-y-2 text-sm">
        
          <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
            <span
              aria-hidden
              className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
            ></span>
            <span
              className="relative"
              onClick={() => {
                // console.log(employees.id)
                //   setShowModal(true)
                setopenform(true);
              }}
            >
              <i className="fa-solid fa-pen-to-square"></i>
            </span>
          </span>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-gray-500 text-left border-y-2 text-sm">
          <span className="relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight">
            <span
              aria-hidden
              className="absolute inset-0 bg-red-200 opacity-50 rounded-full"
            ></span>
            <span
              className="relative"
              onClick={() => {
                // console.log(employees.id)
                deletedata(id);
              }}
            >
              <i className="fa-sharp fa-solid fa-trash"></i>
            </span>
          </span>
        </td>
      </tr>

      {openform ? (
        <>
          <div
            className="fixed inset-0 z-10 overflow-y-auto bg-blure"
            //  onClick={() => setShowModal(false)}
          >
            <div
              className=" inset-0 w-5 bg-black opacity-40"
              onClick={() => setopenform(false)}
            ></div>
            <div className=" p-8 border-8 rounded-xl flex flex-col h-auto">
              <div className="relative max-w-lg p-14 mx-auto rounded-md shadow-lg gap-1 bg-slate-700">
                <div className="sm:flex">

                  <div className="flex flex-col">
					<label htmlFor="name">Name</label>
{/* <br/> */}
                    <input
					id="name"
					 className="text-gray-800 pl-2 rounded-lg"
                      type="text"
                      value={names}
                      onChange={(e) => {
                        setnames(e.target.value);
                      }}
                    />
					<label htmlFor="age">Age</label>
					{/* <br/> */}
                    <input
					id="age"
					 className="text-gray-800 pl-2 rounded-lg"
                      type="text"
                      value={ages}
                      onChange={(e) => {
                        setages(e.target.value);
                      }}
                    />
                    <label htmlFor="phone">Phone</label>
					{/* <br/> */}
                    <input
					id="phone"
					 className="text-gray-800 pl-2 rounded-lg"
                      type="text"
                      value={mobiles}
                      onChange={(e) => {
                        setmobiles(e.target.value);
                      }}
                    />
                    <label htmlFor="email">Email</label>
					{/* <br/> */}
                    <input
					id="email"
					 className="text-gray-800 pl-2 rounded-lg"
                      type="text"
                      value={emails}
                      onChange={(e) => {
                        setemails(e.target.value);
                      }}
                    />{" "}
                    <br />
                    {/* <button
                      onClick={() => {
                        const data = {
                          name: names,
                          age: ages,
                          mobile: mobiles,
                          email: emails,
                        };

                        console.log("edit form", id, data);
                        editdata(id, data);
                      }}
                    >
                      Edit
                    </button> */}


					<button
        className=" text-center  px-4 py-2  m-0 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-gray-900 border border-transparent rounded-md active:bg-gray-900 false"
		onClick={() => {
			const data = {
			  name: names,
			  age: ages,
			  mobile: mobiles,
			  email: emails,
			};

			console.log("edit form", id, data);
			editdata(id, data);
			setopenform(false)
		  }}
      >
        Edit
      </button>
	  <br/>
      <button
        className=" text-center  px-4 py-2  m-0 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-gray-900 border border-transparent rounded-md active:bg-gray-900 false"
        onClick={() => setopenform(false)}
      >
        Cancel
      </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}

export default Indelem;
