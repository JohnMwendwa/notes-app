import Tag from "./tag";

export default interface NoteProps {
  id: string;
  title: string;
  markdown: string;
  tags: Tag[];
}
