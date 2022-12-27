import { useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";

import { useNotesContext } from "../context/NotesContext";
import NoteProps from "../models/note";

const Container = styled.div`
  width: 80%;
  max-width: 800px;
  border-radius: 8px;
  margin: 30px auto;
  padding: 20px 30px;
  box-shadow: 2px 0px 5px 3px rgba(0, 0, 0, 0.5);
`;

const Title = styled.h2`
  margin: 0;
  margin-bottom: 10px;
  text-decoration: underline;
  text-align: center;
  color: blue;
  font-size: 2rem;
`;

export const Tag = styled.span`
  display: inline-block;
  background-color: grey;
  color: white;
  margin-left: 5px;
  padding: 2px 10px;
  margin-top: 5px;
`;

const ActionBtns = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const EditBtn = styled.button`
  padding: 5px 10px;
  background-color: green;
  color: white;
  margin-right: 10px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
`;

const DeleteBtn = styled(EditBtn)`
  background-color: red;
`;

export default function Note({
  id,
  title,
  tags,
  markdown,
}: NoteProps): JSX.Element {
  const { onDeleteNote } = useNotesContext();
  const navigate = useNavigate();

  return (
    <Container>
      <Title>{title}</Title>
      {tags.map((tag) => {
        return <Tag key={tag.id}>{`# ${tag.label}`}</Tag>;
      })}

      <ReactMarkdown>{markdown}</ReactMarkdown>

      <ActionBtns>
        <EditBtn onClick={() => navigate(`/${id}/edit`)}>Edit</EditBtn>

        <DeleteBtn
          onClick={() => {
            onDeleteNote(id);
            navigate("/");
          }}
        >
          Delete
        </DeleteBtn>
      </ActionBtns>
    </Container>
  );
}
