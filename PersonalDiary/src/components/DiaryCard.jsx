export default function DiaryCard({ title, date, image, content }) {
  return (
    <div className="card bg-base-100 w-96 shadow-sm ">
      <div className="card-title justify-center mt-6 mb-0">{date}</div>
      <figure className="px-10 pt-10">
        <img src={image} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
        <p className="line-clamp-3">{content}</p>
      </div>
    </div>
  );
}
