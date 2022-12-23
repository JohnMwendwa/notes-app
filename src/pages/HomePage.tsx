import NotesList from "../components/NotesList";
import NoteProps from "../models/note";

const dummy_notes: NoteProps[] = [
  {
    id: crypto.randomUUID(),
    title: "Note 1",
    markdown: "# Note 1",
    tags: [],
  },
  {
    id: crypto.randomUUID(),
    title: "Note 2",
    markdown: "# Note 2",
    tags: [],
  },
];

export default function HomePage() {
  return (
    <div>
      <h1>All Notes</h1>

      <NotesList notes={dummy_notes} />
    </div>
  );
}
