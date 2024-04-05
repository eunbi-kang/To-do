import React, { useState } from "react";

export default function TodoList() {
  const [todos, setTodos] = useState([
    { id: "123", text: "호야와 장보기", status: "active" },
    { id: "124", text: "먼비와 공부하기", status: "active" },
  ]);
  return (
    <section>
      <ul>
        {todos.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </section>
  );
}
