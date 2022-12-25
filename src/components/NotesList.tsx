import { Link } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";

import NoteProps from "../models/note";
import NoteCard from "./NoteCard";

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

export default function NotesList({
  notes,
}: {
  notes: NoteProps[];
}): JSX.Element {
  return (
    <>
      <GlobalStyles />
      {notes.map((note) => {
        return (
          <Link to={`/${note.id}`} key={note.id}>
            <NoteCard {...note} />
          </Link>
        );
      })}
    </>
  );
}
