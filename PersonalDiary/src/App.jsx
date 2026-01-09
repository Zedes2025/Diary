import { useState } from "react";
import Header from "./components/header.jsx";
import AddEntryModal from "./components/AddEntryModal.jsx";
function App() {
  return (
    <>
      <Header />
      <AddEntryModal />
    </>
  );
}

export default App;
