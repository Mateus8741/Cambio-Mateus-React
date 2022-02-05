import * as React from "react";
import ChangeCircleIcon from "@mui/icons-material/ChangeCircle";
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import { SelectContext } from "../context/SelectContext";

export default function SvgMaterialIcons() {
  const context = React.useContext(SelectContext);
  console.log(context);



  return (
    <ArrowForwardRoundedIcon
      sx={{ fontSize: 50 }}
      style={{
        paddingTop: "20px",
        borderRadius: "50px",
        cursor: "pointer",
        width: "35px",
        height: "35px",
      }}
      color="primary"
    />
  );
}
