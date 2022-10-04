import React, { useEffect, useState } from "react";

import Lst from "./Lst";
import './styles/styles.css'


const App = () => {
    const [inputValue, setInputValue] = useState('');
    const [toDoList, setToDoList] = useState([]);


    const onbtnclick = () => {

        if (!inputValue) {
            setToDoList([...toDoList])
        }
        else {
            setToDoList([...toDoList, inputValue]);

            setInputValue('');

        }
    }

    return (
        <div>
            <h1>To Do List</h1>
            <div className="input">
                <label for='inputfield'>Add task to the list</label>
                <input type='text' id="inputfield" className="inputadd" value={inputValue} onChange={(e) => setInputValue(e.target.value)}></input>
                <button id="addbtn" className="add" onClick={() => onbtnclick()} >&#43;</button>
            </div>
            <div className="list">
                <Lst dolist={toDoList} setdolist={setToDoList}/>
            </div>
        </div>
    )
}
export default App;


//hakak