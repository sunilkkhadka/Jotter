import React from "react";
import ListNotes from "../components/listNotes/ListNotes";
import AddNoteForm from "../components/addNoteForm/AddNoteForm";

const HomePage = () => {
  return (
    <div className="home-container">
      <AddNoteForm />
      <ListNotes />
    </div>
  );
};

export default HomePage;
