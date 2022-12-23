import { Link } from "react-router-dom";

import NoteProps from "../models/note";
import Note from "./Note";

export default function NotesList({
  notes,
}: {
  notes: NoteProps[];
}): JSX.Element {
  return (
    <>
      {notes.map((note) => {
        return (
          <Link to={`/${note.id}`} key={note.id}>
            <Note {...note} />
          </Link>
        );
      })}
    </>
  );
}
