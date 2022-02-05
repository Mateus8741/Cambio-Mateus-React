import React, { useEffect, useState, useContext } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { ResultContext } from "../context/ResultContext";
import { SelectContext } from "../context/SelectContext";

export default function SelectVariants() {
  const [coins, setCoins] = useState("");
  const context = useContext(ResultContext);
  const contextSelect = useContext(SelectContext);

  const handleChange = (event) => {
    setCoins(event.target.value);
  };

  useEffect(() => {
    fetch(
      `https://v6.exchangerate-api.com/v6/f3521b54b09889d7b0e25ca9/latest/${coins}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        context.setResult(data.conversion_rates[contextSelect.coin]);
        console.log(context.result);
      });
  }, [coins, context, contextSelect.coin]);

  return (
    <div>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">De</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={coins}
          onChange={handleChange}
          label="De"
        >
          <MenuItem value="BRL">BRL</MenuItem>
          <MenuItem value="USD">USD</MenuItem>
          <MenuItem value="EUR">EUR</MenuItem>
          <MenuItem value="GBP">GBP</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
