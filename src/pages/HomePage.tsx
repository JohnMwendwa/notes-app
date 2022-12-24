import NotesList from "../components/NotesList";

import { useNotesContext } from "../context/NotesContext";

export default function HomePage() {
  const { notes } = useNotesContext();
  return (
    <div>
      <h1>All Notes</h1>

      <NotesList notes={notes} />
    </div>
  );
}
