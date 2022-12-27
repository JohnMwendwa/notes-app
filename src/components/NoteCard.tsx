import styled from "styled-components";

import NoteProps from "../models/note";
import { Tag } from "./Note";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
  max-width: 300px;
  min-width: 200px;
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

const TagBtn = styled(Tag)`
  margin-bottom: 3px;
  border-radius: 3px;
`;

export default function NoteCard({ title, tags }: NoteProps) {
  return (
    <Wrapper>
      <h2>{title}</h2>
      <Tags>
        {tags.map((tag) => {
          return <TagBtn key={tag.id}>{`# ${tag.label}`}</TagBtn>;
        })}
      </Tags>
    </Wrapper>
  );
}
