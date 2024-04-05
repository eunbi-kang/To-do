import React, {useState} from "react";

export default function AddTodo({ onAdd }) {
  const[text, setText] = useState("");
  const handleChange = (e) => {
    setText(e.target.value);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e); 
    onAdd({id: e.timeStamp, text, status: 'active'})
    setText('');
    // setId(id + 1);
  }
  //onAdd();
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add Todo"
        value={text}
        onChange={handleChange}
      />
      <button>Add</button>
    </form>
  );
}