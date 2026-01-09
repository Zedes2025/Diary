import { useState } from "react";
import Header from "./components/header.jsx";
import AddEntryModal from "./components/AddEntryModal.jsx";
import DiaryCard from "./components/DiaryCard.jsx";
import FakeEntries from "./components/FakeEntries.jsx";
function App() {
  return (
    <>
      <Header />
      <AddEntryModal />
      <div className="flex flex-row">
        {FakeEntries.map((entry) => (
          <DiaryCard
            title={entry.title}
            date={entry.date}
            image={entry.image}
            content={entry.content}
          />
        ))}
      </div>
    </>
  );
}

export default App;
