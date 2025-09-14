import React, { useState, useEffect } from "react";
import Task from "./Task";
import Contexto from "./context/Context";

let nextId = 4;

function TaskList() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Crear componente <Task />", completed: false },
    { id: 2, text: "Estudiar sobre props drilling", completed: false },
    { id: 3, text: "Implementar un botón de completado", completed: false },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [showCompleted, setShowCompleted] = useState(false);

  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  useEffect(() => {
    console.log("Lista de tareas actualizada:", tasks);
    // Aquí podrías guardar las tareas en localStorage o en una base de datos
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const toggleTaskCompletion = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const addTask = () => {
    if (inputValue.trim() === "") return;
    const newTask = {
      id: nextId++,
      text: inputValue,
      completed: false,
    };
    setTasks([...tasks, newTask]); // Agregar la nueva tarea a la lista
    setInputValue(""); // Limpiar el input después de añadir
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
    console.log("Tarea eliminada con ID:", taskId);
  };

  const containerStyle = {
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f4f4f9",
    padding: "20px",
    borderRadius: "8px",
    maxWidth: "500px",
    margin: "40px auto",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  };

  const inputContainerStyle = {
    display: "flex",
    gap: "10px",
    marginTop: "20px",
  };

  const inputStyle = {
    flexGrow: 1,
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "4px",
  };

  const buttonStyle = {
    padding: "10px 15px",
    border: "none",
    borderRadius: "4px",
    backgroundColor: "#28a745",
    color: "#fff",
    cursor: "pointer",
  };

  return (
    <div style={containerStyle}>
      <h2 style={{ textAlign: "center", color: "#333" }}>Mi Lista de Tareas</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {tasks.filter((task) => !task.completed).length === 0 && (
          <li style={{ textAlign: "center", color: "#888" }}>
            No hay tareas pendientes
          </li>
        )}
        {tasks
          .filter((task) => !task.completed)
          .map((task) => (
            <Task
              key={task.id}
              taskData={task}
              onComplete={toggleTaskCompletion}
              onDelete={deleteTask}
            />
          ))}
      </ul>
      <form style={inputContainerStyle} onSubmit={(e) => e.preventDefault()}>
        <input
          style={inputStyle}
          type="text"
          placeholder="Nueva tarea..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button style={buttonStyle} onClick={addTask}>
          Añadir
        </button>
      </form>
      <div style={{ marginTop: "20px", textAlign: "center" }}>
        <label>
          <input
            type="checkbox"
            checked={showCompleted}
            onChange={() => setShowCompleted(!showCompleted)}
          />{" "}
          Mostrar tareas completadas
        </label>
      </div>
      {showCompleted && (
        <div style={{ marginTop: "20px" }}>
          <h3 style={{ color: "#333" }}>Tareas Completadas</h3>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {tasks
              .filter((task) => task.completed)
              .map((task) => (
                <Task
                  key={task.id}
                  taskData={task}
                  onComplete={toggleTaskCompletion}
                  onDelete={deleteTask}
                />
              ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default TaskList;
