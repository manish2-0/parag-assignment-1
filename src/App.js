import { useEffect, useState } from "react";
import Dropdowninput from "./components/Dropdowninput";
import Radiobutton from "./components/Radiobutton";
import Textinput from "./components/Textinput";
import axios from 'axios'

function App() {

  const [typeofquestions, settypeofquestions] = useState([])
  const [selectedType, setSelectedType] = useState("");
  const [inputs, setinputs] = useState([])



  const addtypeofquest = (val) => {
    settypeofquestions((prevItems) => [...prevItems, val]);
    setinputs((prevItems) => [...prevItems, ""]);
  }

  // useEffect(() => {
  //   console.log(inputs)
  // }, [inputs])

  const submitform=async()=>{
    try {
      const submitresp=await axios.post("https://parag-assignment1.vercel.app/form",{"typeofquestions":typeofquestions,"inputs":inputs})
      if(submitresp.status)
      {
        settypeofquestions([])
        setinputs([])
      }
    } catch (error) {
      console.log(error)
    }
   
  }

  const getformdata=async(val)=>{
    try {
      const submitresp=await axios.get(`https://parag-assignment1.vercel.app/form/${val}`)
      if(submitresp.data.status)
      {
        settypeofquestions(submitresp.data.form_type)
        setinputs(submitresp.data.form_inputs)
      }

    } catch (error) {
      console.log(error)
    }

  }

  useEffect(() => {
    const url = window.location.href;
    const pathSegments = window.location.pathname.split('/');
    let a=parseInt(pathSegments[1].trim(),10);
    if(!isNaN(a))
    {
      getformdata(a)
    }
   
  }, [])
  

  // useEffect(() => {
  //   getformdata(2)
  // }, [])
  


  return (
    <div className="App">

      {
        typeofquestions.map((ele, posi) => {
          if (ele === "Text Input") {
            return <Textinput posi={posi} val={inputs[posi]} setinputs={setinputs} />;
          } else if (ele === "Dropdown Input") {
            return <Dropdowninput posi={posi} val={inputs[posi]} setinputs={setinputs}/>;
          } else if (ele === "Radio Button") {
            return <Radiobutton posi={posi} val={inputs[posi]} setinputs={setinputs}/>;
          }
          return null; // Handle cases where none of the conditions match
        })
      }




      <select value={selectedType} onChange={(e) => addtypeofquest(e.target.value)} className="block w-fit text-base border m-2 p-2">
        <option value="" selected>Select..</option>
        <option>Text Input</option>
        <option>Dropdown Input</option>
        <option>Radio Button</option>
      </select>

      {
        inputs.length>0 &&
        <button onClick={submitform} className="px-4 py-2 border m-2">
          Submit
        </button>
      }


    </div>
  );
}

export default App;
