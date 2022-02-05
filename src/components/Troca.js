import * as React from "react";
import ChangeCircleIcon from "@mui/icons-material/ChangeCircle";
import { SelectContext } from "../context/SelectContext";

export default function SvgMaterialIcons() {
  const context = React.useContext(SelectContext);
  console.log(context);



  return (
    <ChangeCircleIcon
      sx={{ fontSize: 50 }}
      style={{
        border: "black solid .5px",
        borderRadius: "50px",
        cursor: "pointer",
        width: "35px",
        height: "35px",
      }}
      color="primary"
    />
  );
}
