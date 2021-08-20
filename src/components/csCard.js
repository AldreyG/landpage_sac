import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressCard,
  faTruck,
  faStoreAlt,
  faSyncAlt,
  faStar,
  faHandHoldingUsd,
} from "@fortawesome/free-solid-svg-icons";

function Hint() {
  return (
    <>
      <div className="row text-center">
        <div className="col-4">
          <div className="card" style={{ width: "26rem" }}>
            <div className="card-body d-flex justify-content-between">
              <div className="me-3 my-2">
                <FontAwesomeIcon
                  icon={faAddressCard}
                  mask={["fas", "circle"]}
                  size="3x"
                  color="green"
                />
              </div>
              <div className="#">
                <h5
                  className="card-title mb-2 text-center"
                  style={{ color: "	#006400" }}
                >
                  Cadastro
                </h5>

                <p className="card-text">
                  Para compras online ou em nosso clube
                  <br /> de fidelidade{" "}
                  <a href="/cadastro" className="card-link link-success">
                    clique aqui
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="card" style={{ width: "26rem" }}>
            <div className="card-body d-flex justify-content-between ">
              <div className="me-3 my-2">
                <FontAwesomeIcon
                  icon={faTruck}
                  mask={["fas", "circle"]}
                  size="3x"
                  color="green"
                />
              </div>
              <div className="#">
                <h5
                  className="card-title mb-2 text-center"
                  style={{ color: "	#006400" }}
                >
                  Pedido
                </h5>
                <p className="card-text">
                  Para mais informações sobre pedidos{" "}
                  <a href="/#" className="card-link link-success">
                    clique aqui
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="card" style={{ width: "26rem" }}>
            <div className="card-body d-flex justify-content-between">
              <div className="me-3 my-2">
                <FontAwesomeIcon
                  icon={faStoreAlt}
                  mask={["fas", "circle"]}
                  size="3x"
                  color="green"
                />
              </div>
              <div className="#">
                <h5
                  className="card-title mb-2 text-center"
                  style={{ color: "	#006400" }}
                >
                  Lojas
                </h5>
                <p className="card-text">
                  Para maiores informações sobre lojas{" "}
                  <a href="/#" className="card-link link-success">
                    clique aqui
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-4 mt-4">
          <div className="card" style={{ width: "26rem" }}>
            <div className="card-body d-flex justify-content-between">
              <div className="me-3 my-2">
                <FontAwesomeIcon
                  icon={faSyncAlt}
                  mask={["fas", "circle"]}
                  size="3x"
                  color="green"
                />
              </div>
              <div className="#">
                <h5
                  className="card-title mb-2 text-center"
                  style={{ color: "	#006400" }}
                >
                  Devolução e reembolso
                </h5>
                <p className="card-text">
                  Para informações sobre devolução e reembolso{" "}
                  <a href="/#" className="card-link link-success">
                    clique aqui
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-4 mt-4">
          <div className="card" style={{ width: "26rem" }}>
            <div className="card-body d-flex justify-content-between">
              <div className="me-3 my-2">
                <FontAwesomeIcon
                  icon={faHandHoldingUsd}
                  mask={["fas", "circle"]}
                  size="3x"
                  color="green"
                />
              </div>
              <div className="#">
                <h5
                  className="card-title mb-2 text-center"
                  style={{ color: "	#006400" }}
                >
                  Formas de pagamento
                </h5>
                <p className="card-text">
                  Para informações sobre formas de pagamento{" "}
                  <a href="/#" className="card-link link-success">
                    clique aqui
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-4 mt-4">
          <div className="card" style={{ width: "26rem" }}>
            <div className="card-body d-flex justify-content-between">
              <div className="me-3 my-2">
                <FontAwesomeIcon
                  icon={faStar}
                  mask={["fas", "circle"]}
                  size="3x"
                  color="green"
                />
              </div>
              <div className="#">
                <h5
                  className="card-title mb-2 text-center"
                  style={{ color: "#006400" }}
                >
                  Clube de fidelidade
                </h5>
                <div>
                  <p className="card-text">
                    Para informações sobre clube de fidelidade{" "}
                    <a href="/#" className="card-link link-success">
                      clique aqui
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hint;
