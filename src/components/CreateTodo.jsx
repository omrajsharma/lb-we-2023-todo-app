import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Autocomplete, Fab, TextField } from "@mui/material";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import axios from "axios";
import AddIcon from '@mui/icons-material/Add'


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: 4,
  border: "2px solid #7F00FF"
};

const addTodoBtnStyle = {
    position: 'fixed',
    bottom: 32,
    right: 32
}

const priorityOptions = [
    {label: 'High', value: 'high'},
    {label: 'Medium', value: 'medium'},
    {label: 'Low', value: 'low'},
]

export default function CreateTodo() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [task, setTask] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [priority, setPriority] = React.useState("");
  const [date, setDate] = React.useState("");

  const validateForm = () => {
    if (task.length < 3) {
        alert("Minimum length of task should be 3");
        return;
    }
    if (description.length < 5) {
        alert("Minimum length of description should be 5");
        return;
    }
    if (priority.length < 2) {
        alert("Invalid Priority");
        return;
    }
    if (date.length < 2) {
        alert("Invalid date");
        return;
    }
  }

  const resetForm = () => {
    setTask('');
    setDescription('');
    setPriority('');
    setDate('');
  }

  const handleFormSubmit = async () => {
    validateForm();
    axios.post('https://lb-we-2023-default-rtdb.asia-southeast1.firebasedatabase.app/todo.json', {task, description, priority, date});
    alert("Form submitted successfully ✨")
    resetForm();
    handleClose();
  }

  return (
    <div>
      <Fab
        color='warning'
        style={addTodoBtnStyle}
        onClick={handleOpen}
      >
        <AddIcon />
      </Fab>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <TextField
            required
            label="Task"
            variant="standard"
            sx={{ mb: 2 }}
            fullWidth
            onChange={e => setTask(e.target.value)}
            value={task}
          />
          <TextField
            required
            label="Description"
            variant="standard"
            sx={{ mb: 2 }}
            fullWidth
            onChange={e => setDescription(e.target.value)}
            value={description}
          />
          <Autocomplete
            id="disable-clearable"
            disableClearable
            options={priorityOptions}
            sx={{ mb: 2 }}
            onChange={(e, value) => setPriority(value.value)}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Priority"
                variant="standard"
                required
              />
            )}
          />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker label="Select Date" sx={{mb: 2, width: "100%"}} onChange={value => setDate(value.format('YYYY-MM-DD'))} />
          </LocalizationProvider>
          <Button variant='contained' fullWidth onClick={handleFormSubmit}>
            Add to list
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
