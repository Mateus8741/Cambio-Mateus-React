import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { Box } from "@mui/system";
import Select from "@mui/material/Select";
import Troca from "./Troca";
import Input from "./Input";
import Resultado from "./Resultado";
import Header from "./Header";

export default function SelectVariants() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <Header />
      <Box
        sx={{
          display: "flex",
          flexDirection: { md: "row" },
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "background.paper",
          overflow: "hidden",
          borderRadius: "12px",
          boxShadow: 1,
          fontWeight: "bold",
        }}
      >
        <Input/>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-standard-label">De</InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={age}
            onChange={handleChange}
            label="Age"
          >
            <MenuItem value=""></MenuItem>
            <MenuItem value={10}></MenuItem>
            <MenuItem value={20}></MenuItem>
            <MenuItem value={30}></MenuItem>
            <MenuItem value={40}></MenuItem>
          </Select>
        </FormControl>
        <Troca />
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-standard-label">Para</InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={age}
            onChange={handleChange}
            label="Age"
          >
            <MenuItem value=""></MenuItem>
            <MenuItem value={10}></MenuItem>
            <MenuItem value={20}></MenuItem>
            <MenuItem value={30}></MenuItem>
            <MenuItem value={40}></MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Resultado />
    </div>
  );
}
