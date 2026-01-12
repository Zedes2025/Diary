export default function ViewSelectedCard({ entry, onClose }) {
  return (
    <>
      <div className="card bg-stone-200 w-150 shadow-sm max-h-[80vh] overflow-auto relative cursor-pointer max-h-[80vh]">
        <div className="card-title justify-center mt-6 mb-0">{entry.date} </div>
        <button className="btn absolute top-3 right-5 " onClick={onClose}>
          X
        </button>

        <div className="overflow-auto max-h-[80vh] pt-10">
          <figure className="px-10 pt-10">
            <img
              src={entry.url}
              alt="Shoes"
              className={`rounded-xl w-full ${
                entry.height > 200
                  ? "max-h-48 object-contain"
                  : "h-auto object-cover"
              }`}
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{entry.title}</h2>
            <p>{entry.content}</p>
          </div>
        </div>
      </div>
    </>
  );
}
