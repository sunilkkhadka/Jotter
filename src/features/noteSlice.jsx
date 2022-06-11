import { createSlice } from "@reduxjs/toolkit";

const noteSlice = createSlice({
  name: "note",
  initialState: {
    notes: [],
  },
  reducers: {
    addNotes: (state, action) => {
      state.notes.push(action.payload);
      localStorage.setItem("notes", JSON.stringify(state.notes));
    },
    displayNote: (state) => {
      return state.notes;
    },
  },
});

export const { displayNote, addNotes, getNoteById } = noteSlice.actions;

export default noteSlice.reducer;
