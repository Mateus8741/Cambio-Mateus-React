import * as React from "react";
import ChangeCircleIcon from "@mui/icons-material/ChangeCircle";

export default function SvgMaterialIcons() {
  return (
    <ChangeCircleIcon
      sx={{ fontSize: 50 }}
      style={{ border: "black solid .5px", borderRadius: "50px", cursor: "pointer" }}
      color="primary"
    />
  );
}
