import { useParams } from "react-router-dom";

import NoteForm from "../components/NoteForm";
import { useNotesContext } from "../context/NotesContext";

export default function EditNotePage() {
  const { id } = useParams();
  const { notes, onUpdateNote } = useNotesContext();
  const noteIdx = notes.findIndex((n) => n.id === id);
  const note = notes[noteIdx];

  return (
    <div>
      EditNotePage
      <NoteForm {...note} onSubmit={onUpdateNote} />
    </div>
  );
}
