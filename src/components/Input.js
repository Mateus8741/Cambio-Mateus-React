import React, { useState, useContext } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import {InputContext} from "../context/InputContext";

export default function BasicTextFields() {
  const [value, setValue] = useState("");

  const context = useContext(InputContext);


  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        value={value}
        onChange={({ target }) => {
          setValue(target.value);
          context.setValue(parseFloat(value));
        }}
        id="standard-basic"
        label="Standard"
        variant="standard"
      />
    </Box>
  );
}
