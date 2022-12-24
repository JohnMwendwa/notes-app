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
  return (
    <form>
      <label htmlFor="title">
        Title :
        <input type="text" id="title" />
      </label>
      <label htmlFor="tags">
        Tags :
        <input type="text" id="tags" />
      </label>
      <label htmlFor="markdown">
        Markdown :<textarea id="" rows={15}></textarea>
      </label>
      <button type="button">Cancel</button>
      <button type="submit">Save</button>
    </form>
  );
}
