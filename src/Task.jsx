import React from "react";

function Task({ taskData, onComplete, onDelete }) {
  const { text, completed, id } = taskData;

  const listItemStyle = {
    backgroundColor: "#fff",
    padding: "15px",
    marginBottom: "10px",
    borderRadius: "4px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.05)",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    textDecoration: completed ? "line-through" : "none",
    color: completed ? "#888" : "#333",
    transition: "all 0.3s ease",
  };

  const buttonContainerStyle = {
    display: "flex",
    gap: "5px",
  };

  const completeButtonStyle = {
    padding: "8px 12px",
    border: "none",
    borderRadius: "4px",
    backgroundColor: completed ? "#6c757d" : "#007bff",
    color: "#fff",
    cursor: "pointer",
    transition: "background-color 0.2s ease",
  };

  const deleteButtonStyle = {
    padding: "8px 12px",
    border: "none",
    borderRadius: "4px",
    backgroundColor: "#dc3545",
    color: "#fff",
    cursor: "pointer",
    transition: "background-color 0.2s ease",
  };

  return (
    <li style={listItemStyle}>
      <span>{text}</span>
      <div style={buttonContainerStyle}>
        <button
          style={completeButtonStyle}
          onClick={() => onComplete(id)}
          aria-label={completed ? "Desmarcar tarea" : "Marcar como completada"}
        >
          {completed ? "Deshacer" : "Completar"}
        </button>
        <button
          style={deleteButtonStyle}
          onClick={() => onDelete(id)}
          aria-label="Eliminar tarea"
        >
          Eliminar
        </button>
      </div>
    </li>
  );
}

export default Task;
