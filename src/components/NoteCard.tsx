import styled from "styled-components";

import NoteProps from "../models/note";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
  max-width: 300px;
  margin: 20px;
  padding: 20px 30px;
  border-radius: 5px;
  transition: 0.3s ease-in-out;

  :hover {
    background-color: #ddd;
  }

  h2 {
    margin: 0;
    margin-bottom: 10px;
    color: blue;
  }
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;

  button {
    margin-right: 3px;
    margin-bottom: 5px;
  }
`;

export default function NoteCard({ title, tags }: NoteProps) {
  return (
    <Wrapper>
      <h2>{title}</h2>
      <Tags>
        {tags.map((tag) => {
          return <button key={tag.id}>{tag.label}</button>;
        })}
      </Tags>
    </Wrapper>
  );
}
