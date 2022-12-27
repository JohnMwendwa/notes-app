import NoteForm from "../components/NoteForm";
import styled from "styled-components";

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

export default function NewNotePage() {
  const { onCreateNote } = useNotesContext();
  return (
    <Container>
      <Title>Create Note</Title>
      <NoteForm onSubmit={onCreateNote} />
    </Container>
  );
}
