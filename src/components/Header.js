import React from "react";

export default function Header() {
  return (
    <div >
      <h1 style={{display:"flex", justifyContent:"center", color: "black", paddingTop: "168px" }}>
        Conversor de Moedas
      </h1>

      <hr />

      <div>
        <h2 style={{ color: "white" }} id="Input">
          {" "}
        </h2>
      </div>
    </div>
  );
}
