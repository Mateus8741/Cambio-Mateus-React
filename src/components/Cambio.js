import React from "react";
import Troca from "./Troca";
import Input from "./Input";
import Resultado from "./Resultado";
import Header from "./Header";
import Select from "./Select";
import Select2 from "./Select2";
import "../App.css";
import { Result } from "../context/ResultContext";
import { SelectResult } from "../context/SelectContext";
import { InputValue } from "../context/InputContext";

export default function Cambio() {
  return (
    <Result>
      <div>
        <Header />
        <InputValue>
          <div className="div">
            <div className="box">
              <Input />
              <SelectResult>
                <Select />
                <Troca />
                <Select2 />
              </SelectResult>
            </div>
            <Resultado />
          </div>
        </InputValue>
      </div>
    </Result>
  );
}
