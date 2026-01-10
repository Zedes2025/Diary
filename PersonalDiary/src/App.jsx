import { useState } from "react";
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

  return (
    <>
      <Header onNewEntryClick={OpenModal} />
      {isModalOpen && <AddEntryModal onClose={CloseModal} />}
      <div className="flex flex-row gap-2 m-4">
        {FakeEntries.map((entry) => (
          <DiaryCard
            onClickCard={() => OpenCard(entry)}
            title={entry.title}
            date={entry.date}
            image={entry.image}
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
