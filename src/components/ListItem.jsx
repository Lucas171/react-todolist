import React from "react";
import { ListItemButton, ListItemText } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";

function ListItem(props) {
    return (
        <ListItemButton
            onClick={() => {
                props.deleteItem(props.id);
            }}
        >
            <ListItemText primary={props.content} />
            <ClearIcon />
        </ListItemButton>
    );
}
export default ListItem;
