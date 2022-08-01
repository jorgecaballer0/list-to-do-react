import React from "react";

const Visibility = ({ isChecked, setShowCompleted, cleanTasks }) => {
  const handleDelete = () => {
    if (
      window.confirm("Estas seguro de eliminar todas las tareas completadas?")
    ) {
      cleanTasks();
    }
  };
  return (
    <div className="d-flex justify-content-between align-items-center bg-secondary text-white py-2 px-1 border-secondary">
      <div className="form-check form-switch ">
        <input
          className="form-check-input"
          type="checkbox"
          checked={isChecked}
          onChange={(e) => setShowCompleted(e.target.checked)}
          
        />
      </div>
      <label>Mostrar tareas completadas</label>
      <button onClick={handleDelete} className="button__delete">
        Eliminar
      </button>
    </div>
  );
};

export default Visibility;
