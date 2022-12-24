import { useNavigate, useParams } from "react-router-dom";

import { useNotesContext } from "../context/NotesContext";

export default function DetailsPage(): JSX.Element {
  const navigate = useNavigate();
  const { id } = useParams();
  const { notes } = useNotesContext();

  // Find note index
  const noteIdx = notes.findIndex((n) => n.id === id);
  const note = notes[noteIdx];
  return (
    <>
      <h1>{note.title}</h1>
      {note.tags.map((tag) => {
        return <button key={tag.id}>{tag.label}</button>;
      })}
      <div>{note.markdown}</div>
      <button onClick={() => navigate(-1)}>Go Back</button>
    </>
  );
}
