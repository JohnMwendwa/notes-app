import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";

import { useNotesContext } from "../context/NotesContext";
import Note from "../components/Note";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const BackBtn = styled.button`
  padding: 5px 15px;
  background-color: black;
  color: white;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  margin: 0 auto;
  margin-bottom: 30px;
`;

export default function DetailsPage(): JSX.Element {
  const { id } = useParams();
  const { notes } = useNotesContext();
  const navigate = useNavigate();

  // Find note index
  const noteIdx = notes.findIndex((n) => n.id === id);
  const note = notes[noteIdx];
  return (
    <Container>
      <Note {...note} />
      <BackBtn onClick={() => navigate(-1)}>Back</BackBtn>
    </Container>
  );
}
