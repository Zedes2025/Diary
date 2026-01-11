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
    () => JSON.parse(localStorage.getItem("diaryEntries")) || []
  );

  const handleSave = (newEntry) => {
    setEntries([...entries, newEntry]);
  };

  useEffect(() => {
    localStorage.setItem("entries", JSON.stringify(entries));
  }, [entries]);

  return (
    <>
      <Header onNewEntryClick={OpenModal} />
      {isModalOpen && (
        <AddEntryModal onClose={CloseModal} onSave={handleSave} />
      )}
      <div className="flex flex-row gap-2 m-4">
        {entries.map((entry) => (
          <DiaryCard
            onClickCard={() => OpenCard(entry)}
            title={entry.title}
            date={entry.date}
            image={entry.url}
            content={entry.content}
          />
        ))}
      </div>

      {selectedCard && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
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
