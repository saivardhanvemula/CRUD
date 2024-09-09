import React, { useState } from "react";
import "./App.css"
import axios from "axios";

const App = () => {
    const [Name, setName] = useState("");
    const [Roll, setRoll] = useState("");
    const [Class, setClass] = useState("");
    function submitData() {
        let data = { Name: Name, Class: Class, Roll: Roll };
        console.log(data);
        axios.post("http://127.0.0.1:3000/students", {Name:Name,Class:Class,Roll:Roll}).then(() => {
            alert("Done");
        });
        console.log("done")
    }
    return (
      <>
        <h1>CRUD Application</h1>
        <div className="App">
            <div className="input">
            <label>Student Name</label>
            <input
                type="text"
                value={Name}
                placeholder="Enter your name"
                required
                onChange={(e) => {
                    setName(e.target.value);
                }}
            />
            </div>
            <div className="input">
            <label>Class</label>
            <input
                type="text"
                value={Class}
                placeholder="Enter your Class"
                required
                onChange={(e) => {
                    setClass(e.target.value);
                }}
            />
            </div>
            <div className="input">
            <label>Roll Number</label>
            <input
                type="text"
                value={Roll}
                placeholder="Enter Roll number"
                required
                onChange={(e) => {
                    setRoll(e.target.value);
                }}
            />
            </div>
            <button onClick={submitData}>submit</button>
        </div>
        </>
    );
};
export default App;
