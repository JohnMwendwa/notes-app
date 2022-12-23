import Tag from "./tag";

export default interface Note {
  id: string;
  title: string;
  markdown: string;
  tags: Tag[];
}
