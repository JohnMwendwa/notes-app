import { createContext, useContext, useState } from "react";

import NoteProps from "../models/note";

const dummy_notes: NoteProps[] = [
  {
    id: "12301c91-d2c9-4942-90a9-f788fe92421c",
    title: "Note 1",
    markdown: "# Note 1",
    tags: [
      { id: crypto.randomUUID(), label: "CSS" },
      { id: crypto.randomUUID(), label: "JS" },
    ],
  },
  {
    id: "c37d509b-5679-4eb1-aa8b-91b2f1ccaf15",
    title: "Note 2",
    markdown: "# Note 2",
    tags: [],
  },
];

interface Props {
  children: React.ReactNode;
}

interface Value {
  notes: NoteProps[];
  setNotes: React.Dispatch<React.SetStateAction<NoteProps[]>>;
  onCreateNote: (data: NoteProps) => void;
}

const NotesContext = createContext({} as Value);

export function NotesContextProvider({ children }: Props) {
  const [notes, setNotes] = useState<NoteProps[]>(dummy_notes);

  const onCreateNote = (data: NoteProps) => {
    setNotes((prevNotes) => [...prevNotes, data]);
  };

  return (
    <NotesContext.Provider value={{ notes, setNotes, onCreateNote }}>
      {children}
    </NotesContext.Provider>
  );
}

export const useNotesContext = () => {
  return useContext(NotesContext);
};
