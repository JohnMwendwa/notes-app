import NoteProps from "../models/note";

export default function NoteCard({ title, tags }: NoteProps) {
  return (
    <>
      <h2>{title}</h2>
      {tags.map((tag) => {
        return <button key={tag.id}>{tag.label}</button>;
      })}
    </>
  );
}
