export default function ViewSelectedCard({ entry, onClose }) {
  return (
    <>
      <div className="card bg-base-100 w-150 shadow-sm ">
        <div className="card-title justify-center mt-6 mb-0">
          {entry.date}{" "}
          <button className="btn absolute right-5" onClick={onClose}>
            X
          </button>
        </div>

        <figure className="px-10 pt-10">
          <img src={entry.url} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{entry.title}</h2>
          <p>{entry.content}</p>
        </div>
      </div>
    </>
  );
}
