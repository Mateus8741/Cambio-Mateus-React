import React from "react";

class Header extends Component {
  render() {
    return (
      <div>
        <div class="back">
          {/* <img  src="./src/img/poligonal-geom-trico-do-logotipo-3d-by_vexels.svg" alt="">
      <img src="./src/img/icone-plano-de-moedas-de-dolar-by_vexels.svg" alt="">
      <img  src="./src/img/poligonal-geom-trico-do-logotipo-3d-by_vexels.svg" alt="">
      <img src="./src/img/icone-plano-de-moedas-de-dolar-by_vexels.svg" alt="">
      <img  src="./src/img/poligonal-geom-trico-do-logotipo-3d-by_vexels.svg" alt=""> */}
        </div>
        <h1
          class="heading text-center display-4"
          style="color: white;padding-top: 168px;"
        >
          Conversor de Moedas
        </h1>

        <hr />

        <div>
          <h2
            class="heading text-center display-5"
            style="color: white;"
            id="Input"
          >
            {" "}
          </h2>
        </div>
      </div>
    );
  }
}

export default Header;
