import React from "react";
import Hint from "../../components/csCard";
import CSMain from "../../components/csMain";

function Sac() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <header
            className="d-flex justify-content-center aling-items-center"
            style={{ backgroundColor: "#228B22" }}
          >
            <h1 className="text-white"> Atendimento ao cliente</h1>
          </header>
        </div>
      </div>
      <div className="container">
        <div className="container mt-4">
          <div className="row mt-4 text-center">
            <h4>Olá, como podemos te ajudar?</h4>
          </div>
        </div>

        <div className="d-flex flex-column mt-4">
          <Hint />
        </div>
        <div className="d-flex flex-column mt-5">
          <CSMain />
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <footer
            className="d-flex justify-content-center aling-items-center mt-5"
            style={{ height: 60, backgroundColor: "#228B22" }}
          >
            <p className="text-white m-0 p-3"> Tela SAC by Aldrey</p>
          </footer>
        </div>
      </div>
    </>
  );
}

export default Sac;
