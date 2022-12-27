import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import NoteProps from "../models/note";

interface NoteFormProps extends Partial<NoteProps> {
  onSubmit: (data: NoteProps) => void;
}

const Form = styled.form`
  width: 80%;
  max-width: 800px;
  padding: 0 20px;

  label {
    display: block;
    margin-bottom: 10px;
    font-weight: bold;
    font-size: 18px;
  }

  input {
    width: 80%;
    max-width: 800px;
    padding: 3px 5px;
    margin-left: 5px;
  }

  textarea {
    display: block;
    width: 80%;
    max-width: 800px;
    margin: 0 40px;
    padding: 10px;
    font-size: 16px;
  }
`;

const ActionBtns = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const CancelBtn = styled.button`
  background-color: grey;
  color: white;
  margin-right: 10px;
  padding: 5px 10px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
`;
const SaveBtn = styled(CancelBtn)`
  background-color: green;
`;

export default function NoteForm({
  onSubmit,
  title = "",
  markdown = "",
  tags = [],
  id,
}: NoteFormProps) {
  const value = tags.map((t) => t.label).join(" ");
  const [newTags, setNewTags] = useState<string>(value);
  const titleRef = useRef<HTMLInputElement>(null);
  // const tagsRef = useRef<HTMLInputElement>(null);
  const markdownRef = useRef<HTMLTextAreaElement>(null);

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const tagsArray = newTags
      .split(" ")
      .map((t) => ({ label: t, id: crypto.randomUUID() }));

    onSubmit({
      id: id ? id : crypto.randomUUID(),
      title: titleRef.current!.value,
      markdown: markdownRef.current!.value,
      tags: tagsArray,
    });

    navigate("/");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <label htmlFor="title">
        Title :
        <input
          type="text"
          id="title"
          required
          ref={titleRef}
          defaultValue={title}
        />
      </label>
      <label htmlFor="tags">
        Tags :
        <input
          type="text"
          id="tags"
          required
          value={newTags}
          onChange={(e) => setNewTags(e.target.value)}
        />
      </label>
      <label htmlFor="markdown">Markdown :</label>
      <textarea
        id=""
        rows={20}
        required
        ref={markdownRef}
        defaultValue={markdown}
      ></textarea>

      <ActionBtns>
        <CancelBtn type="button" onClick={() => navigate(-1)}>
          Cancel
        </CancelBtn>

        <SaveBtn type="submit">Save</SaveBtn>
      </ActionBtns>
    </Form>
  );
}
