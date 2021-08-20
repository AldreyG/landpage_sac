import React from "react";
import { useHistory } from "react-router-dom";

function CSMain() {
  const history = useHistory();
  const goWhatsPage = () => {
    history.push("/whats");
  };

  return (
    <>
      <div className="row">
        <div className="col-3">
          <div className="card" style={{ width: "19rem", minHeight: 569 }}>
            <img
              src="/assets/image/whats.jpeg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5
                className="card-title text-center"
                style={{ color: "	#006400" }}
              >
                Central de atendimento virtual
              </h5>
              <p className="card-text">
                Tire suas duvidas diretamente com nossa assistente virtual
                Gilda.
              </p>

              <ul className="list">
                <p className="list-item">Problemas no pedido?</p>
                <p className="list-item">Duvidas sobre cadastro?</p>
              </ul>
              <p>
                A Gilda pode ajudar com essas entre muitas outras duvidas.
                <br /> Atendimento 24 horas por dia
              </p>
            </div>
            <div className="d-flex justify-content-center mb-2">
              <button
                className="btn btn-success w-50"
                style={{ backgroundColor: "#008000" }}
                onClick={goWhatsPage}
              >
                É só clicar aqui
              </button>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="card" style={{ width: "19rem", minHeight: 569 }}>
            <img
              src="/assets/image/sac_3.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5
                className="card-title text-center"
                style={{ color: "	#006400" }}
              >
                Central de atendimento do site
              </h5>
              <p className="card-text">
                De segunda a domingo das 8:00 as 21:30 (horário de Brasilia)
              </p>
            </div>
            <div className="card-body text-center d-flex justify-content-around">
              {" "}
              <a href="/#" className="card-link link-success">
                Chat
              </a>{" "}
              <a href="/#" className="card-link link-success">
                Email
              </a>
            </div>
            <div className="card-body">
              <p className="card-text">
                Ficaremos felizes em poder ajudar <br />
                você a ter a melhor experiência
                <br /> em nosso site.
              </p>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="card" style={{ width: "19rem", minHeight: 569 }}>
            <img
              src="/assets/image/sac2.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5
                className="card-title text-center"
                style={{ color: "	#006400" }}
              >
                Compras por telefone
              </h5>
              <p className="card-text">
                De segunda a domingo das 8:00 as 21:30 (horário de Brasilia)
              </p>
            </div>
            <div className="card-body">
              <ul className="list">
                <p className="list-item">(19) 99999-9999</p>
                <p className="list-item">(19) 3333-3333</p>
              </ul>
            </div>
            <div className="card-body">
              <p className="card-text">
                Ficamos felizes em ajudar.
                <br /> Todos os nossos produtos são de <br />
                qualidade selecionados a dedo para <br />
                nossos clientes.
              </p>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="card" style={{ width: "19rem", minHeight: 569 }}>
            <img
              src="/assets/image/ouvidoria.png"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5
                className="card-title text-center"
                style={{ color: "	#006400" }}
              >
                Ouvidoria
              </h5>
              <p className="card-text">
                De segunda a domingo das 8:00 as 21:30 (horário de Brasilia)
              </p>
            </div>
            <div className="card-body">
              <ul className="list">
                <p className="list-item">
                  0800-08000800 <br />
                  <span className="text-muted"> Capitais</span>
                </p>
                <p className="list-item">
                  3000-3000
                  <br />
                  <span className="text-muted">Demais localidades</span>
                </p>
              </ul>
            </div>
            <div className="card-body">
              <p className="card-text">
                Sugestões e/ou reclamações, entre em contato
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CSMain;
