export default function AddEntryModal() {
  return (
    <>
      <fieldset className="mt-4 m-auto fieldset bg-blue-100 border-base-300 rounded-box w-xs border p-4">
        <legend className="text-lg font-bold mx-auto px-2 text-blue-200 bg-blue-900 rounded p-2">
          Add new entry
        </legend>
        <label className="label">Title</label>
        <input
          type="text"
          className="input"
          placeholder="Swiming in the river"
        />
        <label className="label">
          <Date></Date>
        </label>
        <input type="date" className="input" />
        <label className="label">Picture</label>
        <input type="file" className="file-input file-input-ghost" />
        <label className="label">Content</label>
        <textarea
          className="textarea textarea-bordered h-24"
          placeholder="Today I went swimming in the river..."
        ></textarea>
        <div className="flex flex-row gap-2 mx-auto">
          <button className="btn btn-active w-20 ">cancel</button>
          <button className="btn btn-soft btn-primary w-20 text-xl">
            save
          </button>
        </div>
      </fieldset>
    </>
  );
}
