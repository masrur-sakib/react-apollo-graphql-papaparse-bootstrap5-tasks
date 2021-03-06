import React, { useState } from 'react';
import "./ToDo.css";
// Font Awesome Icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const ToDo = () => {

    const [inputToDo, setInputToDo] = useState([]);
    const [toDo, setToDo] = useState([{"toDoName": "Develop Skills"}, {toDoName: "Finish Tasks"}, {"toDoName": "Attend Meeting"}]);

    // Submit Button Click & Enter Handling Function 
    const toDoHandler = (event) => {
        event.preventDefault();
        setToDo([...toDo, inputToDo]);
        document.getElementById("input-todo").value = "";
        setInputToDo("");
    }
    return (
        <div className="to-do-page">
            {/* To Do Page Header / Navbar */}
            <nav className="navbar navbar-light text-light to-do-page-header">
                <div className="container-fluid to-do-page-title">
                    <a className="navbar-brand" href="/toDo">
                        <h5>To Do App</h5>
                    </a>
                </div>
            </nav>
            <div className="to-do-body">
                {/* To Do Form Header  */}
                <div className="row form-header">
                    <div className="col-md-4">
                        <a className="todo-form-title" href="/toDo">Tasks</a>
                    </div>
                    <div className="col-md-8">
                        <div className="mt-1 d-flex justify-content-end">
                            <span>Sort by:</span>
                            <select className="sort-by-dropdown">
                                <option value="due-date">Due Date</option>
                                <option value="name">Name</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="form-body">
                    {/* To Do Form  */}
                    <form className="row g-3 mt-4 form-todo ">
                        <div className="col-auto">
                            <input className="input-todo" type="text" 
                                id="input-todo"
                                value={inputToDo["toDoName"] || ""}
                                onChange={(e) => setInputToDo({"toDoName": e.target.value })}
                                placeholder="Add New Task"></input>
                        </div>
                        <div className="col-auto">
                            <button className="btn-submit-todo"  
                            onClick={toDoHandler}>
                                <FontAwesomeIcon icon={faPlus} className="icon-submit" />
                            </button>
                        </div>
                    </form>
                </div>

                {/* To Do List */}
                <div className="to-do-list">
                    {
                        toDo.map((list, index) => (
                        <div key={index} id={list.toDoName} className="to-do-item">
                            <div className="row">
                                <div className="col-7">
                                    <input className="checkbox-to-do-item" type="checkbox"></input>
                                    <span className="ml-3 to-do-item-name">{list.toDoName}</span>
                                </div>
                                <div className="col-4">
                                    <h5>10.10.2020</h5>    
                                </div>
                                <div className="col-1">
                                    <FontAwesomeIcon icon={faStar} className="icon-submit" />
                                </div>
                            </div>
                        </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default ToDo;