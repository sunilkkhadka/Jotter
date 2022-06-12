import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteNote } from "../../features/noteSlice";

//adding css
import "./ListNotes.scss";

const ListNotes = () => {
  const notes = useSelector((state) => state.note.notes);
  const dispatch = useDispatch();

  const deleteHandler = (e) => {
    dispatch(deleteNote(e.target.value));
    console.log(notes);
  };

  const renderNotes = () => {
    if (localStorage.getItem("notes")) {
      let notes = JSON.parse(localStorage.getItem("notes"));
      let rendered = notes.map((note) => {
        return (
          <div className="note" key={note.id}>
            <Link to={`/note/${note.id}`} className="note-link">
              <div className="texts">
                <h2>{note.title}</h2>
                <h3>{note.content}</h3>
              </div>
              <div className="buttons">
                <button className="edit">Edit</button>
                <button className="delete">Delete</button>
              </div>
            </Link>
          </div>
        );
      });

      return rendered;
    } else {
      let rendered = notes.map((note) => {
        return (
          <div className="note" key={note.id}>
            <Link to={`/note/${note.id}`} className="note-link">
              <div className="texts">
                <h2>{note.title}</h2>
                <h3>{note.content}</h3>
              </div>
              <div className="buttons">
                <button className="edit">Edit</button>
                <button className="delete">Delete</button>
              </div>
            </Link>
          </div>
        );
      });

      return rendered;
    }
  };

  return <div className="list-notes-container">{renderNotes()}</div>;
};

export default ListNotes;
