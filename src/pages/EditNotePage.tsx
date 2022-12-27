import { useParams } from "react-router-dom";
import styled from "styled-components";

import NoteForm from "../components/NoteForm";
import { useNotesContext } from "../context/NotesContext";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 0 30px;
`;

const Title = styled.h1`
  color: green;
`;

export default function EditNotePage() {
  const { id } = useParams();
  const { notes, onUpdateNote } = useNotesContext();
  const noteIdx = notes.findIndex((n) => n.id === id);
  const note = notes[noteIdx];

  return (
    <Container>
      <Title> Edit Note</Title>
      <NoteForm {...note} onSubmit={onUpdateNote} />
    </Container>
  );
}
