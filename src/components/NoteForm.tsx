import { useRef } from "react";

import NoteProps from "../models/note";

interface NoteFormProps extends Partial<NoteProps> {
  onSubmit: (data: NoteFormProps) => void;
}

export default function NoteForm({
  onSubmit,
  title = "",
  markdown = "",
  tags = [],
}: NoteFormProps) {
  const titleRef = useRef<HTMLInputElement>(null);
  const tagsRef = useRef<HTMLInputElement>(null);
  const markdownRef = useRef<HTMLTextAreaElement>(null);

  return (
    <form>
      <label htmlFor="title">
        Title :
        <input type="text" id="title" required ref={titleRef} />
      </label>
      <label htmlFor="tags">
        Tags :
        <input type="text" id="tags" required ref={tagsRef} />
      </label>
      <label htmlFor="markdown">
        Markdown :
        <textarea id="" rows={15} required ref={markdownRef}></textarea>
      </label>
      <button type="button">Cancel</button>
      <button type="submit">Save</button>
    </form>
  );
}
