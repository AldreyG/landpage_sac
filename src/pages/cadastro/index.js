import React from "react";
import Footer from "../../components/footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faAddressCard,
  faShoppingBasket,
} from "@fortawesome/free-solid-svg-icons";

import estadojson from "./../../mock/state.json";

function Cadastro() {
  const { estado } = estadojson[0];

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <header
            className="d-flex justify-content-center aling-items-center"
            style={{ backgroundColor: "#228B22", height: 60 }}
          >
            <div className="me-3 my-2">
              <FontAwesomeIcon
                icon={faAddressCard}
                mask={["fas", "circle"]}
                size="2x"
                color="white"
              />
            </div>
            <h2 className="text-white p-2">Cadastro</h2>
          </header>
        </div>
      </div>

      <div className="row position-relative">
        <div className="col-5 d-flex justify-content-around mx-5 my-5">
          <div className="card ms-5" style={{ width: "60rem" }}>
            <div className="card-body ">
              <div className="me-3 my-2 d-flex  justify-content-evenly">
                <FontAwesomeIcon
                  icon={faShoppingBasket}
                  mask={["fas", "circle"]}
                  size="2x"
                  color="green"
                />
              </div>
              <h5
                className="card-title mb-2 text-center"
                style={{ color: "	#006400" }}
              >
                {" "}
                Compras online
              </h5>
              <form className="mt-3">
                <input
                  className="form-control mt-2"
                  placeholder="Nome completo"
                  type="text"
                />
                <input
                  className="form-control mt-2"
                  placeholder="CPF"
                  type="cpf"
                />

                <input
                  className="form-control mt-2"
                  placeholder="Email"
                  type="email"
                />
                <input
                  className="form-control mt-2 "
                  placeholder="Telefone"
                  type="phone"
                />

                <input
                  className="form-control mt-2"
                  placeholder="Endereço"
                  type="address"
                />
                <input
                  className="form-control mt-2"
                  placeholder="Bairro"
                  type="district"
                />
                <div className="row d-flex justify-content-between">
                  <div className="col-sm-4 ">
                    <input
                      className="form-control mt-2"
                      placeholder="CEP"
                      type="zip"
                    />
                  </div>
                  <div className="col-sm-4 ">
                    <input
                      className="form-control mt-2"
                      placeholder="Cidade"
                      type="city"
                    />
                  </div>
                  <div className="col-sm-4 ">
                    <select className="form-select mt-2" id="floatingSelect">
                      <option selected placeholder="Estado">
                        Estado
                      </option>
                      {estado.map((item, index) => {
                        return <option key={index}>{item.estadoValue}</option>;
                      })}
                    </select>
                  </div>
                </div>
                <div className="d-flex justify-content-center">
                  <button
                    className="btn btn-success mt-3"
                    style={{ width: "50%", height: "50" }}
                    onClick={() => {}}
                  >
                    Concluir
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="col-5 d-flex justify-content-around mx-5 my-5">
          <div className="card ms-5" style={{ width: "60rem" }}>
            <div className="card-body ">
              <div className="me-3 my-2 d-flex flex-row justify-content-evenly">
                <FontAwesomeIcon
                  icon={faStar}
                  mask={["fas", "circle"]}
                  size="2x"
                  color="green"
                />
              </div>
              <h5
                className="card-title mb-2 text-center"
                style={{ color: "#006400" }}
              >
                {" "}
                Clube de fidelidade
              </h5>

              <form className="mt-5">
                <input
                  className="form-control mt-2"
                  placeholder="Nome completo"
                  type="text"
                />
                <div className="row d-flex justify-content-between">
                  <div className="col-sm-6 ">
                    <input
                      className="form-control mt-2"
                      placeholder="Data de nascimento"
                      type="date"
                    />
                  </div>
                  <div className="col-sm-6 ">
                    <input
                      className="form-control mt-2"
                      placeholder="CPF"
                      type="cpf"
                    />
                  </div>
                </div>
                <input
                  className="form-control mt-2"
                  placeholder="Email"
                  type="email"
                />
                <input
                  className="form-control mt-2"
                  placeholder="Telefone"
                  type="phone"
                />
                <div className="d-flex justify-content-center">
                  <button
                    className="btn btn-success mt-3"
                    style={{ width: "50%", height: "50" }}
                    onClick={() => {}}
                  >
                    Concluir
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="d-fixed fixed-bottom">
        <Footer />
      </div>
    </>
  );
}

export default Cadastro;
