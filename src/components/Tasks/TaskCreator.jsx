import React from "react";
import { useState } from "react";

const TaskCreator = ({ createNewTask }) => {
  const [newTaskName, setNewTaskName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createNewTask(newTaskName);
    setNewTaskName("");
  };
  return (
    <form onSubmit={handleSubmit} className="todo__create-form">
      <div className="">
        <input
          type="text"
          placeholder="Ingresar una nueva tarea"
          value={newTaskName}
          onChange={(e) => setNewTaskName(e.target.value)}
          className="todo__create-input"
        />
      </div>
      <input
        type="submit"
        value="Crear Tarea"
        disabled={newTaskName === ""}
        className="todo__create-button"
      ></input>
    </form>
  );
};

export default TaskCreator;
