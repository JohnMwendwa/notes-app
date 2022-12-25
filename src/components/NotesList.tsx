import { Link } from "react-router-dom";

import NoteProps from "../models/note";
import NoteCard from "./NoteCard";

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
            <NoteCard {...note} />
          </Link>
        );
      })}
    </>
  );
}
