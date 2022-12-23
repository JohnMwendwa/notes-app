import { useNavigate, useParams } from "react-router-dom";

import NoteProps from "../models/note";

const note: NoteProps = {
  id: crypto.randomUUID(),
  title: "Note 1",
  markdown: "# Note 1",
  tags: [
    { id: crypto.randomUUID(), label: "CSS" },
    { id: crypto.randomUUID(), label: "JS" },
  ],
};

export default function DetailsPage(): JSX.Element {
  const navigate = useNavigate();
  const { id } = useParams();

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
