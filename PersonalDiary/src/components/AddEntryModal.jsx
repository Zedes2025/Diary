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

    onClose();
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="mt-4 m-auto fieldset bg-blue-100 border-base-300 rounded-box w-150 border p-4"
      >
        <legend className="text-lg font-bold mx-auto px-2 text-blue-200 bg-blue-900 rounded p-2">
          Add new entry
        </legend>
        <label className="label">Title</label>
        <input
          type="input"
          className="input w-auto"
          placeholder="Swiming in the river"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <label className="label">
          {entry ? new Date(entry.date).toLocaleDateString() : "Date:"}
        </label>
        <input
          type="date"
          className="input w-auto"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <label className="url text-gray-500">Picture URL</label>
        <input
          type="url"
          className="input w-auto"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          required
        />
        <label className="label">Content</label>
        <textarea
          type="text"
          className="textarea textarea-bordered h-24 w-auto h-50"
          placeholder="Today I went swimming in the river..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        ></textarea>
        <div className="flex flex-row gap-2 mx-auto">
          <button
            className="btn btn-active w-20 p-4 text-lg"
            type="button"
            onClick={onClose}
          >
            cancel
          </button>

          {/* {error && <p className="text-red-500 text-center">{error}</p>} */}

          <button
            type="submit"
            className="btn btn-soft btn-primary w-20 p-4 text-lg"
          >
            save
          </button>
        </div>
      </form>
    </>
  );
}
