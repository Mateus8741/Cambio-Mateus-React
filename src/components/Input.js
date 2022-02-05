import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function BasicTextFields() {
  const [value, setValue] = useState("");

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
        }}
        id="standard-basic"
        label="Standard"
        variant="standard"
      />
    </Box>
  );
}
