import "./App.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Indelem from "./Indelem";
import Form from "./Form";
function App() {
  const [data, setdata] = useState([]);
//   const [showform, setshowform] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const getdatas = () => {
    axios.get("https://mock11-api.herokuapp.com/employee_data").then((res) => {
      setdata([...res.data]);
    });
  };

  function handleform(name, age, mobile, email) {
    console.log("enterrrr");
	if(name && age && mobile && email){
		console.log(name && age && mobile && email ==true);
		const obj = {
			name,
			age,
			mobile,
			email,
		  };
		  axios.post("https://mock11-api.herokuapp.com/employee_data", obj).then((res) => {
			console.log(res);
	  
			console.log(res.data);
	  
			setdata([...data,res.data])
		  });
	}else{
		alert("Please fill all required fields");
	}
   
  }

  const deletedata = (id) => {
    console.log(id);
    axios.delete(`https://mock11-api.herokuapp.com/employee_data/${id}`).then((res) => {
      getdatas();
    });
  };

  const editdata = (id, data) => {
	if(data.name && data.age && data.mobile && data.email){

	console.log(id,data);
    axios.put(`https://mock11-api.herokuapp.com/employee_data/${id}`, data).then((res) => {
      getdatas();

    });
}else{
alert("Please fill all required fields");
}
  };

  useEffect(() => {
    getdatas();
  }, []);
  return (
    <div className="App">
     
        <div className="flex h-30 mt-5  items-center content-center justify-center">
			<div className="flex ">
				<button
		    className="px-6 py-3 text-purple-100 bg-purple-600 rounded-md text-center"
            
			onClick={() => setShowModal(true)}
          >
        Add Employees
          </button></div>
          


{showModal ? (
        <>
          <div className="fixed inset-0 z-10 overflow-y-auto bg-blure"
          //  onClick={() => setShowModal(false)}
          >
         
            <div
              className=" inset-0 w-5 bg-black opacity-40"
              onClick={() => setShowModal(false)}
            ></div>
            <div className="flex items-center px-4 py-8">
              <div className="relative max-w-lg p-4 mx-auto bg-blue-light rounded-md shadow-lg">
                <div className="sm:flex">
                  <div className=" text-center">
                 
				  <Form
              handleform={handleform}
              deletedata={deletedata}
              editdata={editdata}
			  showModal={setShowModal}
			 
            />

                   
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}

        </div>
        <table className="min-w-full leading-normal mt-5">
          <thead>
            <tr>
              <td className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                Name
              </td>
              <td className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                Email
              </td>
              <td className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                Age
              </td>
              <td className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                MObile
              </td>
              <td className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
            Edit
              </td>
              <td className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
            Delete
              </td>
            </tr>
          </thead>
          <tbody>
            {data.length!=0 ? data.map((elem) => {
              return (
                <Indelem
                  key={elem.id}
                  {...elem}
                  handleform={handleform}
                  deletedata={deletedata}
                  editdata={editdata}
				  showModal={showModal}
				  setShowModal={setShowModal}
                />
              );
            }):<h1 className="text-center">No Data Found!</h1>}
          </tbody>
        </table>
   
    </div>
  );
}

export default App;
