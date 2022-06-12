import React from "react";
import { useState } from "react";
import { addNotes } from "../../features/noteSlice";
import { useDispatch } from "react-redux/es/exports";
import { v4 } from "uuid";

import "./AddNoteForm.scss";

const AddNoteForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const dispatch = useDispatch();

  let noteArray = [];

  let formattedData = {
    id: v4(),
    title: title,
    content: content,
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();

    if (title === "" || content === "") {
      alert("Fields must be filled");
      return;
    }
    dispatch(addNotes(formattedData));
    setTitle("");
    setContent("");
    // noteArray.push(formattedData);
    // localStorage.setItem("notes", JSON.stringify(noteArray));
  };

  return (
    <div className="form-container">
      <form onSubmit={formSubmitHandler}>
        <div>
          <label htmlFor="title">Title: </label>
          <input
            type="text"
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </div>
        <div>
          <label htmlFor="content">Description: </label>
          <textarea
            cols="30"
            rows="3"
            onChange={(e) => setContent(e.target.value)}
            value={content}
          ></textarea>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default AddNoteForm;
