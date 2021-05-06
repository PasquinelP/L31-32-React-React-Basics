import React from "react";

function TodoItem(props) {
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={props.todo.completed}
        onChange={() => console.log("Changed!")}
      />
      <p>{props.todo.text}</p>
    </div>
  );
}

export default TodoItem;
