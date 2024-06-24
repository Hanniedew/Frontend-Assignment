import { useContext } from "react";
import DataContext from "../Context/DataContext";
import AddModal from "./AddModal";

function Table() {
  const { data } = useContext(DataContext);

  // For mobile: render cards
  // For desktop: render table

  return (
    <div className="text-center mt-8 px-4 md:px-0">
      <h1 className="mb-4 text-2xl font-bold">User Table</h1>
      <AddModal />
      {/* Responsive layout using Tailwind CSS */}
      <div className="lg:block hidden">
        {" "}
        {/* For desktop */}
        <div className="overflow-x-auto mb-20">
          <table className="mx-auto w-full max-w-4xl mt-8">
            <thead>
              <tr className="bg-gray-100">
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
      </div>
      <div className="lg:hidden">
        {" "}
        {/* For mobile */}
        <div className="text-center mt-8 px-4 md:px-0 mb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            {data.map((item) => (
              <div key={item.id} className="bg-white rounded-lg shadow-md p-4">
                <p className="text-lg font-semibold mb-2">#{item.id}</p>
                <p className="text-base mb-2">{item.name}</p>
                <p className="text-base mb-2">{item.email}</p>
                <p className="text-base">{item.phone}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Table;
