import React, { useState, useContext } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { SelectContext } from "../context/SelectContext";

export default function Select2() {
  const [coins2, setCoins2] = useState("");
  const context = useContext(SelectContext);

  const handleChange = (event) => {
    setCoins2(event.target.value);
    context.setCoin(coins2);
  };

  return (
    <div>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">Para</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={coins2}
          onChange={handleChange}
          label="Para"
        >
          <MenuItem value="USD">USD</MenuItem>
          <MenuItem value="BRL">BRL</MenuItem>
          <MenuItem value="EUR">EUR</MenuItem>
          <MenuItem value="GBP">GBP</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
