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
    <div>
      <h1 className="text-red-950">User Table</h1>
      <Button variant="contained" onClick={handleAddData}>
        Add User
      </Button>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
