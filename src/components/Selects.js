import React from "react";

class Selects extends Component {
  render() {
    return (
      <div>
        <div class="row">
          <div class="form-group">
            <input
              style="border: 1px solid rgb(221, 221, 221);;"
              type="text"
              class="form-control"
              placeholder="Valor para conversão"
              id="valor1"
              onkeydown="calculate();"
            />
          </div>
          <div class="col-sm-3">
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                {/* <span class="input-group-text"><img id="img1" src="https://flagcdn.com/48x36/br.png" alt="flag"></span> */}
              </div>
              <select class="form-control from" id="moeda1">
                <option value="BRL">BRL</option>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
              </select>
            </div>
          </div>



          <div class="col-sm-3">
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                {/* <span class="input-group-text" id="flag"><img id="img2" src="https://flagcdn.com/48x36/us.png" alt="flag"></span> */}
              </div>
              <select class="form-control to" id="moeda2">
                <option value="USD">USD </option>
                <option value="BRL">BRL</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Selects;
