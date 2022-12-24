export default function NoteForm() {
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
