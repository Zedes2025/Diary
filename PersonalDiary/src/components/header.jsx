export default function Header({ onNewEntryClick }) {
  return (
    <header>
      <div className="navbar bg-base-300 shadow-sm">
        <div className="navbar-start">
          <img src="book.png" alt="diaryIcon" className="icons" />
          <a className="btn btn-ghost text-xl">My Diary</a>
        </div>
        <div className="navbar-center hidden lg:flex"></div>
        <div className="navbar-end">
          <a className="btn" onClick={onNewEntryClick}>
            <span className="plus-icon text-xl">&#43;</span> New Entry
          </a>
        </div>
      </div>
    </header>
  );
}
