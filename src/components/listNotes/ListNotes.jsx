import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ListNotes = () => {
  const notes = useSelector((state) => state.note.notes);

  const renderNotes = () => {
    if (localStorage.getItem("notes")) {
      let notes = JSON.parse(localStorage.getItem("notes"));
      let rendered = notes.map((note) => {
        return (
          <div className="note" key={note.id}>
            <Link to={`/note/${note.id}`}>
              <h4>id: {note.id}</h4>
              <h2>Title: {note.title}</h2>
              <h3>Content: {note.content}</h3>
            </Link>
          </div>
        );
      });

      return rendered;
    } else {
      let rendered = notes.map((note) => {
        return (
          <div className="note" key={note.id}>
            <Link to={`/note/${note.id}`}>
              <h4>id: {note.id}</h4>
              <h2>Title: {note.title}</h2>
              <h3>Content: {note.content}</h3>
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
