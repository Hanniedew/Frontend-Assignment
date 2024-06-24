import { useContext } from "react";
import DataContext from "../Context/DataContext";
import { Button } from "@mui/material";

function Table() {
  const { data, addData } = useContext(DataContext);

  const handleAddData = () => {
    const newData = {
      id: data.length + 1, // Generate a new ID
      name: "New User",
      email: "newuser@example.com",
      phone: "555-555-5555",
    };
    addData(newData);
  };
  return (
    <div className="text-center mt-24">
      <h1 className="mb-8 text-2xl font-bold">User Table</h1>
      <Button variant="contained" onClick={handleAddData}>
        Add User
      </Button>
      <table className="mx-auto w-full max-w-4xl mt-8">
        <thead>
          <tr>
            <th className="border px-4 py-2"># ID</th>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Email</th>
            <th className="border px-4 py-2">Phone</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td className="border px-4 py-2">{item.id}</td>
              <td className="border px-4 py-2">{item.name}</td>
              <td className="border px-4 py-2">{item.email}</td>
              <td className="border px-4 py-2">{item.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
