import NoteProps from "../models/note";

export default function Note({
  title,
  markdown,
  tags,
}: NoteProps): JSX.Element {
  return (
    <>
      <h2>{title}</h2>
      {tags.map((tag) => {
        return <button key={tag.id}>{tag.label}</button>;
      })}
      <p>{markdown}</p>
    </>
  );
}
