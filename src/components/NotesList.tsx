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
        return <Note key={note.id} {...note} />;
      })}
    </>
  );
}
