import { createContext, useContext, useState } from "react";

import NoteProps from "../models/note";

interface Props {
  children: React.ReactNode;
}

const NotesContext = createContext([]);

export function NotesContextProvider({ children }: Props) {
  const [notes, setNotes] = useState<NoteProps[]>([]);

  return (
    <NotesContext.Provider value={{ notes, setNotes }}>
      {children}
    </NotesContext.Provider>
  );
}

export const useNotesContext = () => {
  return useContext(NotesContext);
};
