import { useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";

import { useNotesContext } from "../context/NotesContext";

import NoteProps from "../models/note";

export default function Note({
  id,
  title,
  tags,
  markdown,
}: NoteProps): JSX.Element {
  const { onDeleteNote } = useNotesContext();
  const navigate = useNavigate();

  return (
    <>
      <h2>{title}</h2>
      {tags.map((tag) => {
        return <button key={tag.id}>{tag.label}</button>;
      })}

      <ReactMarkdown>{markdown}</ReactMarkdown>

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
