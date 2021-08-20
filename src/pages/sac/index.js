import React from "react";
import Hint from "../../components/csCard";
import CSMain from "../../components/csMain";
import Footer from "../../components/footer";

function Sac() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <header
            className="d-flex justify-content-center aling-items-center"
            style={{ backgroundColor: "#228B22", height: 60 }}
          >
            <h2 className="text-white p-2"> Atendimento ao cliente</h2>
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
      <div className="d-fixed">
        <Footer />
      </div>
    </>
  );
}

export default Sac;
