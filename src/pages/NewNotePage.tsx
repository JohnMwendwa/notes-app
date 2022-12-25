import NoteForm from "../components/NoteForm";
import { useNotesContext } from "../context/NotesContext";

export default function NewNotePage() {
  const { onCreateNote } = useNotesContext();
  return (
    <>
      <h1>Create Note</h1>
      <NoteForm onSubmit={onCreateNote} />
    </>
  );
}
