import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import NoteProps from "../models/note";

interface NoteFormProps extends NoteProps {
  onSubmit: (data: NoteProps) => void;
}

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
  };

  return (
    <form onSubmit={handleSubmit}>
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
      <label htmlFor="markdown">
        Markdown :
        <textarea
          id=""
          rows={15}
          required
          ref={markdownRef}
          defaultValue={markdown}
        ></textarea>
      </label>
      <button type="button">Cancel</button>
      <button type="submit">Save</button>
    </form>
  );
}
