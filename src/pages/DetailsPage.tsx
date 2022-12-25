import { useParams } from "react-router-dom";

import { useNotesContext } from "../context/NotesContext";
import Note from "../components/Note";

export default function DetailsPage(): JSX.Element {
  const { id } = useParams();
  const { notes } = useNotesContext();

  // Find note index
  const noteIdx = notes.findIndex((n) => n.id === id);
  const note = notes[noteIdx];
  return (
    <>
      <Note {...note} />
    </>
  );
}
