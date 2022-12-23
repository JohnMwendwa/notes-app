import React from "react";
import NoteProps from "../models/note";

export default function NotesList({
  notes,
}: {
  notes: NoteProps[];
}): JSX.Element {
  return (
    <>
      {notes.map((note) => {
        return <li key={note.id}>{note.title}</li>;
      })}
    </>
  );
}
