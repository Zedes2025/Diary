import { useEffect, useState } from "react";
import Header from "./components/header.jsx";
import AddEntryModal from "./components/AddEntryModal.jsx";
import DiaryCard from "./components/DiaryCard.jsx";
import FakeEntries from "./components/FakeEntries.jsx";
import ViewSelectedCard from "./components/ViewSelectedCard.jsx";
function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const OpenModal = () => {
    setIsModalOpen(true);
  };
  const CloseModal = () => {
    setIsModalOpen(false);
  };
  const [selectedCard, setSelectedCard] = useState(null);
  const OpenCard = (entry) => {
    setSelectedCard(entry);
  };
  const [entries, setEntries] = useState(
    () => JSON.parse(localStorage.getItem("entries")) || []
  );

  const handleSave = (newEntry) => {
    //prevent dupplicate dates
    const exists = entries.some((e) => e.date === newEntry.date);

    if (exists) {
      alert("You already wrote for this day");
      return;
    }

    const entryWithId = { ...newEntry, id: Date.now() };
    setEntries((prev) => [...prev, entryWithId]);
    console.log("Salam", entryWithId.id);
  };

  useEffect(() => {
    localStorage.setItem("entries", JSON.stringify(entries));
  }, [entries]);

  const dateNumbersOnly = (dateStr) => {
    const [d, m, y] = dateStr.split("/");
    return `${y}${m.padStart(2, "0")}${d.padStart(2, "0")}`;
  };

  return (
    <>
      <Header onNewEntryClick={OpenModal} />
      {isModalOpen && (
        <div className="modal modal-open">
          <AddEntryModal onClose={CloseModal} onSave={handleSave} />{" "}
        </div>
      )}
      <div className=" m-6 pb-6 grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-6 justify-center">
        {[...entries]
          .sort((a, b) => new Date(b.date) - new Date(a.date))
          .map((entry) => (
            <DiaryCard
              key={entry.id}
              onClickCard={() => OpenCard(entry)}
              title={entry.title}
              date={entry.date}
              image={entry.url}
              content={entry.content}
            />
          ))}
      </div>

      {selectedCard && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-30">
          <ViewSelectedCard
            entry={selectedCard}
            onClose={() => setSelectedCard(null)}
          />
        </div>
      )}
    </>
  );
}

export default App;
