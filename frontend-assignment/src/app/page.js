"use client";
import Table from "./Components/Table";
import { DataProvider } from "./Context/DataContext";

export default function Home() {
  return (
    <DataProvider>
      <Table />
    </DataProvider>
  );
}
