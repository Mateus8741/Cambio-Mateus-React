import React from "react";
import Troca from "./Troca";
import Input from "./Input";
import Resultado from "./Resultado";
import Header from "./Header";
import Selects from "./Selects";
import '../App.css';

export default function Cambio() {
    
  return (
    <div>
      <Header />
      <div className="div">
      <div className="box">
        <Input/>
        <Selects />
        <Troca />
        <Selects />
      </div>
      <Resultado />
      </div>
    </div>
  );
}
