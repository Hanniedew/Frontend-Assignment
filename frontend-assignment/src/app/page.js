"use client";
import Table from "./Components/Table";
import { DataProvider } from "./Context/DataContext";
import AddModal from "./Components/AddModal";
import ColorMode from "./Components/ColorMode";
import { ColorModeProvider } from "./Context/ColorModeProvider";

export default function Home() {
  return (
    <DataProvider>
      <ColorModeProvider>
        <div className="text-center mt-8 px-4 md:px-0">
          <h1 className="mb-4 text-2xl font-bold">User Table</h1>
          <AddModal />
          <ColorMode />

          <Table />
        </div>
      </ColorModeProvider>
    </DataProvider>
  );
}
