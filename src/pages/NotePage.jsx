import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

//ADDING CSS
import "./NotePage.scss";

const NotePage = () => {
  const { note_id } = useParams();

  const notes = useSelector((state) => state.note.notes);

  /*
    the find() method loops through every item in an array and 
    returns the first value that matches with the condition.

    Once it finds the first value, it stops looping through other values.

    In this case, it returns the first object from the set of array items
  */

  const renderNotes = () => {
    if (localStorage.getItem("notes")) {
      let notes = JSON.parse(localStorage.getItem("notes"));
      let res = notes.find((note) => note.id == note_id);
      let renderNote = () => {
        return (
          <div className="note">
            <h2>{res.title}</h2>
            <h3>{res.content}</h3>
          </div>
        );
      };
      return renderNote();
    } else {
      let res = notes.find((note) => note.id == note_id);
      let renderNote = () => {
        return (
          <div className="note">
            <h2>{res.title}</h2>
            <h3>{res.content}</h3>
          </div>
        );
      };
      return renderNote();
    }
  };

  return (
    <div className="note-page-container">
      {renderNotes()}
      <Link to="/" className="back">
        Back to home page
      </Link>
    </div>
  );
};

export default NotePage;
