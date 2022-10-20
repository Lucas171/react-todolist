import React, { useState } from "react";
import { Fab, Button, TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

function Input(props) {
    const [item, setItem] = useState("");
    const [isNotEmpty, setIsNotEmpty] = useState(false);

    function newItem(e) {
        const key = e.target.keypress;
        const { value } = e.target;
        setItem(value);
        value === "" ? setIsNotEmpty(false) : setIsNotEmpty(true);
        console.log(key);
    }

    function handleEnter(e) {
        if (e.code === "Enter" && isNotEmpty) {
            props.addItem(item);
        }
    }

    return (
        <div>
            <TextField
                id="outlined-basic"
                label="Add Item"
                variant="outlined"
                onKeyDown={handleEnter}
                onChange={newItem}
                value={item}
                size="small"
                sx={{ mr: 1, mb: 3 }}
            />

            {isNotEmpty ? (
                <Fab
                    size="small"
                    color="secondary"
                    aria-label="add"
                    onClick={(e) => {
                        props.addItem(item);
                        setItem("");
                        setIsNotEmpty(false);
                        e.preventDefault();
                    }}
                >
                    <AddIcon />
                </Fab>
            ) : (
                <Fab disabled size="small" color="secondary" aria-label="add">
                    <AddIcon />
                </Fab>
            )}
        </div>
    );
}

export default Input;
