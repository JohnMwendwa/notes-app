import { useNavigate, Link } from "react-router-dom";

import { useNotesContext } from "../context/NotesContext";

import NoteProps from "../models/note";

export default function Note({ id, title, tags }: NoteProps): JSX.Element {
  const { onDeleteNote } = useNotesContext();
  const navigate = useNavigate();

  return (
    <>
      <h2>{title}</h2>
      {tags.map((tag) => {
        return <button key={tag.id}>{tag.label}</button>;
      })}
      <button onClick={() => navigate(`/${id}/edit`)}>Edit</button>
      <button
        onClick={() => {
          onDeleteNote(id);
          navigate("/");
        }}
      >
        Delete
      </button>
      <button onClick={() => navigate(-1)}>Back</button>
    </>
  );
}
