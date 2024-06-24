// Desc: Modal to display the UV index information
// https://beta.data.gov.sg/datasets?formats=API&sort=Last+updated&resultId=d_076774d6843cc3369731f5abaef83d30
// Data from data.gov
// API Link:
// https://api.data.gov.sg/v1/environment/uv-index

// Desc: Modal to allow user to add new data entries

import { useState, useContext } from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";

// To style the modal
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%", // Default width for mobile screens
  maxWidth: "350px", // Max width for small mobile screens
  bgcolor: "background.paper",
  border: "1px solid #000",
  borderRadius: 3,
  boxShadow: 24,
  p: 4,
  // Media query for desktop screens
  "@media (min-width: 768px)": {
    width: "50%", // Adjusted width for desktop screens
    maxWidth: "500px", // Max width for desktop screens
  },
};

function UvIndexModal() {
  const [open, setOpen] = useState(false);
  const [uvIndexData, setUvIndexData] = useState(null);

  const handleOpen = async () => {
    try {
      const response = await fetch(
        "https://api.data.gov.sg/v1/environment/uv-index"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch UV index data");
      }
      const data = await response.json();
      const latestEntry = data.items[0];
      setUvIndexData(latestEntry);
      setOpen(true);
    } catch (error) {
      console.error("Error fetching UV index data:", error);
    }
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {/* Button to open modal */}
      <Button
        variant="contained"
        color="secondary"
        sx={{ color: "inherit" }}
        onClick={handleOpen}
      >
        Query UV Index
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography variant="h6" mb={2} align="center">
            UV Index Information for Date:{" "}
            {uvIndexData &&
              new Date(uvIndexData.timestamp).toLocaleDateString()}
          </Typography>
          {uvIndexData && (
            <Box sx={{ mt: 2 }}>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr>
                    <th style={{ border: "1px solid #000", padding: "8px" }}>
                      Time
                    </th>
                    <th style={{ border: "1px solid #000", padding: "8px" }}>
                      Index
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {uvIndexData.index.map((entry, index) => (
                    <tr key={index}>
                      <td className="border border-gray-400 px-4 py-2 text-center">
                        {new Date(entry.timestamp).toLocaleTimeString()}
                      </td>
                      <td className="border border-gray-400 px-4 py-2 text-center">
                        {entry.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Box>
          )}
          {!uvIndexData && (
            <Typography variant="body1" align="center">
              Loading UV Index data...
            </Typography>
          )}
        </Box>
      </Modal>
    </div>
  );
}

export default UvIndexModal;

// Sample json: from the url
// {
//   "items": [
//     {
//       "timestamp": "2024-06-24T19:00:00+08:00",
//       "update_timestamp": "2024-06-24T19:10:56+08:00",
//       "index": [
//         {
//           "value": 0,
//           "timestamp": "2024-06-24T19:00:00+08:00"
//         },
//         {
//           "value": 1,
//           "timestamp": "2024-06-24T18:00:00+08:00"
//         },
//         {
//           "value": 3,
//           "timestamp": "2024-06-24T17:00:00+08:00"
//         },
//         {
//           "value": 1,
//           "timestamp": "2024-06-24T16:00:00+08:00"
//         },
//         {
//           "value": 4,
//           "timestamp": "2024-06-24T15:00:00+08:00"
//         },
//         {
//           "value": 8,
//           "timestamp": "2024-06-24T14:00:00+08:00"
//         },
//         {
//           "value": 7,
//           "timestamp": "2024-06-24T13:00:00+08:00"
//         },
//         {
//           "value": 7,
//           "timestamp": "2024-06-24T12:00:00+08:00"
//         },
//         {
//           "value": 4,
//           "timestamp": "2024-06-24T11:00:00+08:00"
//         },
//         {
//           "value": 2,
//           "timestamp": "2024-06-24T10:00:00+08:00"
//         },
//         {
//           "value": 1,
//           "timestamp": "2024-06-24T09:00:00+08:00"
//         },
//         {
//           "value": 0,
//           "timestamp": "2024-06-24T08:00:00+08:00"
//         },
//         {
//           "value": 0,
//           "timestamp": "2024-06-24T07:00:00+08:00"
//         }
//       ]
//     }
//   ],
//   "api_info": {
//     "status": "healthy"
//   }
// }
