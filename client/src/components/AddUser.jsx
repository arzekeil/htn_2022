import { useState } from "react";
import axios from "axios";
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function AddUser() {
    const [options, setOptions] = useState(["Goku", "Queen Elizabeth ii", "Naruto", "Luffy"]);

    const addUser = () => {
        return;
    };

    return (
        <>
            <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={options}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Add User" />}
            />
            <Button
                onClick={() => {addUser}}
            >
                Add User
            </Button>
        </>
    );
}
