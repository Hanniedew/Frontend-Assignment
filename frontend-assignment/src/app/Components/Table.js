// Desc: Table component to render data in table format

import { useContext } from "react";
import DataContext from "../Context/DataContext";
import { useTheme } from "@mui/material/styles";

function Table() {
  const { data } = useContext(DataContext);

  const theme = useTheme(); // to use theme object

  // For mobile: render cards
  // For desktop: render table

  return (
    <div className="text-center mt-8 px-4 md:px-0">
      {/* Responsive layout using Tailwind CSS */}
      <div className="lg:block hidden">
        {/* For desktop */}
        <div className="overflow-x-auto mb-20">
          <table
            className={`mx-auto w-full max-w-4xl mt-8 ${
              theme.palette.mode === "dark"
                ? "bg-gray-800 text-white"
                : "bg-white"
            }`}
          >
            <thead>
              <tr className="bg-gray-400">
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
        {/* For mobile */}
        <div className="text-center mt-8 px-4 md:px-0 mb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            {data.map((item) => (
              <div
                key={item.id}
                className={`rounded-lg shadow-md p-4 ${
                  theme.palette.mode === "dark"
                    ? "bg-gray-800 text-white"
                    : "bg-white"
                }`}
              >
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
