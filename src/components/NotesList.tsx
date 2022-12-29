import { Link } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";

import NoteProps from "../models/note";
import NoteCard from "./NoteCard";
import { baseURL } from "../App";

const GlobalStyles = createGlobalStyle`
body{
  display:flex;
  flex-direction:column;
  min-height:100vh;
  margin:0;
  padding:0;
  box-sizing:border-box;

}

a{
  text-decoration:none;

}
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 300px);
  justify-content: center;
  padding: 0 30px 30px;
`;

export default function NotesList({
  notes,
}: {
  notes: NoteProps[];
}): JSX.Element {
  return (
    <Container>
      <GlobalStyles />
      {notes.map((note) => {
        return (
          <Link to={`/${baseURL}/${note.id}`} key={note.id}>
            <NoteCard {...note} />
          </Link>
        );
      })}
    </Container>
  );
}
