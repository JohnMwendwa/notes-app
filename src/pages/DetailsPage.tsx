import { useParams, useNavigate } from "react-router-dom";

import { useNotesContext } from "../context/NotesContext";
import Note from "../components/Note";

export default function DetailsPage(): JSX.Element {
  const { id } = useParams();
  const { notes } = useNotesContext();
  const navigate = useNavigate();

  // Find note index
  const noteIdx = notes.findIndex((n) => n.id === id);
  const note = notes[noteIdx];
  return (
    <>
      <Note {...note} />
      <button onClick={() => navigate(-1)}>Back</button>
    </>
  );
}
