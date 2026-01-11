import { useState } from "react";

export default function AddEntryModal({ onClose, entry, onSave }) {
  const [error, setError] = useState("");

  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [url, setUrl] = useState("");
  const [content, setContent] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !date.trim() || !content.trim()) {
      setError("All fields are required.");
      return;
    }

    setError("");

    onSave({ title, date, url, content });
    console.log({ title, content, date, url });

    setTitle("");
    setDate("");
    setUrl("");
    setContent("");

    console.log("cleared", { title, content, date, url });

    //onClose();
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="mt-4 m-auto fieldset bg-blue-100 border-base-300 rounded-box w-xs border p-4"
      >
        <legend className="text-lg font-bold mx-auto px-2 text-blue-200 bg-blue-900 rounded p-2">
          Add new entry
        </legend>
        <label className="label">Title</label>
        <input
          type="input"
          className="input"
          placeholder="Swiming in the river"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <label className="label">
          {entry ? new Date(entry.date).toLocaleDateString() : "1/1/2024"}
        </label>
        <input
          type="date"
          className="input"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <label className="url">Picture URL</label>
        <input
          type="url"
          className="input"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <label className="label">Content</label>
        <textarea
          type="text"
          className="textarea textarea-bordered h-24"
          placeholder="Today I went swimming in the river..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        ></textarea>
        <div className="flex flex-row gap-2 mx-auto">
          <button className="btn btn-active w-20 " onClick={onClose}>
            cancel
          </button>

          {/* {error && <p className="text-red-500 text-center">{error}</p>} */}

          <button type="submit" className="btn btn-soft btn-primary w-20">
            save
          </button>
        </div>
      </form>
    </>
  );
}
