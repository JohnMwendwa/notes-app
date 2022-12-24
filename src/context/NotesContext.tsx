import { createContext, useContext, useState } from "react";

import NoteProps from "../models/note";

const dummy_notes: NoteProps[] = [
  {
    id: crypto.randomUUID(),
    title: "Note 1",
    markdown: "# Note 1",
    tags: [
      { id: crypto.randomUUID(), label: "CSS" },
      { id: crypto.randomUUID(), label: "JS" },
    ],
  },
  {
    id: crypto.randomUUID(),
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
}

const NotesContext = createContext({} as Value);

export function NotesContextProvider({ children }: Props) {
  const [notes, setNotes] = useState<NoteProps[]>(dummy_notes);

  return (
    <NotesContext.Provider value={{ notes, setNotes }}>
      {children}
    </NotesContext.Provider>
  );
}

export const useNotesContext = () => {
  return useContext(NotesContext);
};
