import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import NotesList from "../components/NotesList";
import { useNotesContext } from "../context/NotesContext";
import { baseURL } from "../App";

const Container = styled.div`
  margin: 0 0 20px;

  h1 {
    margin-bottom: 10px;
    text-align: center;
    color: blue;
  }

  > button {
    display: block;
    margin: 0 auto;
    color: white;
    background-color: #08b508;
    outline: none;
    border: none;
    border-radius: 3px;
    padding: 5px 20px;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
    margin-bottom: 20px;
  }
`;
const Divider = styled.div`
  width: 100%;
  border-bottom: 1px solid blue;
`;

export default function HomePage() {
  const { notes } = useNotesContext();
  const navigate = useNavigate();
  return (
    <Container>
      <h1>All Notes</h1>
      <button onClick={() => navigate(`/${baseURL}/new`)}>New</button>
      <Divider />
      <NotesList notes={notes} />
    </Container>
  );
}
