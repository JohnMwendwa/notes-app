import { createContext, useContext, useState } from "react";

import NoteProps from "../models/note";

const dummy_notes: NoteProps[] = [
  {
    id: "12301c91-d2c9-4942-90a9-f788fe92421c",
    title: "Note 1",
    markdown: `# This is a title\n\nLorem ipsum dolor sit amet consectetur adipisicing elit. Ratione suscipit delectus nisi ea laborum aliquid provident modi reprehenderit? Veritatis ab eaque natus aperiam quasi ullam impedit dolores labore distinctio quo.\n\n## This is another title\n\nLorem ipsum dolor sit amet consectetur adipisicing elit. Ratione suscipit delectus nisi ea laborum aliquid provident modi reprehenderit? Veritatis ab eaque natus aperiam quasi ullam impedit dolores labore distinctio quo.\n\n### This is another title\n\nLorem ipsum dolor sit amet consectetur adipisicing elit. Ratione suscipit delectus nisi ea laborum aliquid provident modi reprehenderit? Veritatis ab eaque natus aperiam quasi ullam impedit dolores labore distinctio quo.`,
    tags: [
      { id: crypto.randomUUID(), label: "CSS" },
      { id: crypto.randomUUID(), label: "JS" },
    ],
  },
  {
    id: "c37d509b-5679-4eb1-aa8b-91b2f1ccaf15",
    title: "Note 2",
    markdown: `# This is a title\n\nLorem ipsum dolor sit amet consectetur adipisicing elit. Ratione suscipit delectus nisi ea laborum aliquid provident modi reprehenderit? Veritatis ab eaque natus aperiam quasi ullam impedit dolores labore distinctio quo.\n\n## This is another title\n\nLorem ipsum dolor sit amet consectetur adipisicing elit. Ratione suscipit delectus nisi ea laborum aliquid provident modi reprehenderit? Veritatis ab eaque natus aperiam quasi ullam impedit dolores labore distinctio quo.`,
    tags: [{ id: crypto.randomUUID(), label: "html" }],
  },
];

interface Props {
  children: React.ReactNode;
}

interface Value {
  notes: NoteProps[];
  setNotes: React.Dispatch<React.SetStateAction<NoteProps[]>>;
  onCreateNote: (data: NoteProps) => void;
  onUpdateNote: (data: NoteProps) => void;
  onDeleteNote: (id: string) => void;
}

const NotesContext = createContext({} as Value);

export function NotesContextProvider({ children }: Props) {
  const [notes, setNotes] = useState<NoteProps[]>(dummy_notes);

  const onCreateNote = (data: NoteProps) => {
    setNotes((prevNotes) => [...prevNotes, data]);
  };

  const onUpdateNote = (data: NoteProps) => {
    setNotes((prevNotes) => {
      return prevNotes.map((note) => {
        if (note.id === data.id) {
          return data;
        }
        return note;
      });
    });
  };
  const onDeleteNote = (id: string) => {
    setNotes((prevNotes) => {
      return prevNotes.filter((note) => note.id !== id);
    });
  };

  return (
    <NotesContext.Provider
      value={{ notes, setNotes, onCreateNote, onUpdateNote, onDeleteNote }}
    >
      {children}
    </NotesContext.Provider>
  );
}

export const useNotesContext = () => {
  return useContext(NotesContext);
};
