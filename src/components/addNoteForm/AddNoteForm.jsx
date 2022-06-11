import React from "react";
import { useState } from "react";
import { addNotes } from "../../features/noteSlice";
import { useDispatch } from "react-redux/es/exports";
import { v4 } from "uuid";

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
    dispatch(addNotes(formattedData));
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
          />
        </div>
        <div>
          <label htmlFor="content">Description: </label>
          <textarea
            cols="30"
            rows="10"
            onChange={(e) => setContent(e.target.value)}
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
