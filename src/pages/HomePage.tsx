import { useNavigate } from "react-router-dom";

import NotesList from "../components/NotesList";
import { useNotesContext } from "../context/NotesContext";

export default function HomePage() {
  const { notes } = useNotesContext();
  const navigate = useNavigate();
  return (
    <div>
      <h1>All Notes</h1>
      <button onClick={() => navigate("/new")}>New</button>

      <NotesList notes={notes} />
    </div>
  );
}
