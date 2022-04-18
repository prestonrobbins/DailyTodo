import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { MenuItem } from "@mui/material";
// import Link from "@mui/material/Link";
// import Container from "@mui/material/Container";

export default function CreateToDoForm() {


    const handleSubmit = async (event) => {
        event.preventDefault();
        try {

        } catch (e) {
            console.log(e);
        }
    };

    return (
        <Box
            component="form"
            sx={{
                display: "flex",
                // alignItems: "center",
                flexDirection: "column",
            }}
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit}
        >
            <Typography variant="h5" component="div">
                Name of ToDo:
            </Typography>
            <TextField
                required
                id=""
                label="ToDo"
            />
            <Typography variant="h5" component="div">
                Type of ToDo:
            </Typography>
            <TextField
                required
                id=""
                select
                label="Select type of ToDo"
            >
                <MenuItem key={''} value={''}>
                    string
                </MenuItem>
                <MenuItem key={''} value={''}>
                    bool
                </MenuItem>
                <MenuItem key={''} value={''}>
                    int
                </MenuItem>
            </TextField>
            <Button
                type="submit"
                variant="contained"
                className="button"
            >
                Submit
            </Button>

        </Box>
    );
}