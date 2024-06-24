// Desc: Modal to allow user to add new data entries

import { useState, useContext } from "react";
import DataContext from "../Context/DataContext";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Modal from "@mui/material/Modal";

// To style the modal
const style = {
  position: "absolute",
  top: "40%",
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

function AddModal() {
  const { data, addData } = useContext(DataContext);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    // Clear input fields on modal close
    setName("");
    setEmail("");
    setPhone("");
    setErrors({}); // Reset errors object
  };
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [errors, setErrors] = useState({});

  const handleAddData = () => {
    let errors = {};

    // Name validation (check length)
    if (name.trim().length < 5) {
      errors.name = "Name must be at least 5 characters";
    }

    // Email validation (check for @, .com and spaces)
    if (
      !email.includes("@") ||
      !email.endsWith(".com") ||
      email.includes(" ")
    ) {
      errors.email = "Enter a valid email address (e.g., user@example.com)";
    }

    // Phone vailidation (check for +)
    if (!phone.startsWith("+")) {
      errors.phone = "Phone number must start with '+'";
    }

    // If there are errors, update state and prevent data addition
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    // If no errors, add data
    const newData = {
      id: data.length + 1, // Generate a new ID
      name: name,
      email: email,
      phone: phone,
    };
    addData(newData);
    setErrors({}); // delete all errors since its valid
  };

  return (
    <div>
      {/* Button to open modal */}
      <div className="mr-4">
        <Button
          variant="contained"
          color="primary"
          sx={{ color: "inherit" }}
          onClick={handleOpen}
        >
          Add User
        </Button>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            <TextField
              label="Name"
              variant="outlined"
              size="small"
              fullWidth
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              error={errors.name !== undefined}
              helperText={errors.name}
            />
            <TextField
              label="Email"
              variant="outlined"
              size="small"
              fullWidth
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={errors.email !== undefined}
              helperText={errors.email}
            />
            <TextField
              label="Phone"
              variant="outlined"
              size="small"
              fullWidth
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              error={errors.phone !== undefined}
              helperText={errors.phone}
            />
            <Button variant="contained" onClick={handleAddData} sx={{ mt: 2 }}>
              Add
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default AddModal;
