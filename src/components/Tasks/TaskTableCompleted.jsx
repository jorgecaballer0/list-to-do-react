import React from "react";
import TaskRow from "./TaskRow";

const TaskTableCompleted = ({ tasks, toggleTask, showCompleted = false }) => {
  const taskTableRows = (doneValue) => {
    return tasks
      .filter((task) => task.done === doneValue)
      .map((task) => (
        <TaskRow task={task} key={task.name} toggleTask={toggleTask} />
      ));
  };

  return (
    <table className="table table-dark table-striped table-bordered table-secondary">
      <tbody>{taskTableRows(showCompleted)}</tbody>
    </table>
  );
};

export default TaskTableCompleted;
