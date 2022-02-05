import React, { useContext } from "react";
import { ResultContext } from "../context/ResultContext";
import "../App.css";
import { InputContext } from "../context/InputContext";

export default function TypographyTheme() {
  const context = useContext(ResultContext);
  const contextInput = useContext(InputContext);

  return (
    <h1 style={{ textAlign: "center" }}>
      {context.result === undefined || context.result === 0 ? '' : contextInput.value * context.result}
    </h1>
  );
}
