import React, {FC, ReactElement} from "react";
import { TextField } from "@mui/material";
import { ITextField } from "./interfaces/ITextField";

export const TaskDescriptionField: FC<ITextField> = (props): ReactElement => {
    const { 
        onChange = (e) => console.log(e), 
        disabled = false, 
    } = props;
    
    return (
        <TextField
        id="description"
        name="description"
        label="Description"
        placeholder="Description"
        variant="outlined"
        size="small"
        multiline
        fullWidth
        rows={4}
        disabled={disabled}
        onChange={onChange}
        />
    )

};