import React from "react";
import ListNotes from "../components/listNotes/ListNotes";
import AddNoteForm from "../components/addNoteForm/AddNoteForm";

import "./HomePage.scss";

const HomePage = () => {
  return (
    <div className="home-container">
      <div className="left">
        <h1>JOTTER</h1>
        <AddNoteForm />
      </div>
      <div className="right">
        <ListNotes />
      </div>
    </div>
  );
};

export default HomePage;
