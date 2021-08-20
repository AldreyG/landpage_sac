import React from "react";
import Footer from "../../components/footer";

// import { Container } from './styles';

function WhatsPage() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <header
            className="d-flex justify-content-center aling-items-center"
            style={{ backgroundColor: "#228B22", height: 60 }}
          >
            <h2 className="text-white p-2">Conecte-se via WhatsApp</h2>
          </header>
        </div>
      </div>
      <div className="row">
        <div className="col-12 mt-5">
          <div
            className="card position-relative top-50 start-50 translate-middle"
            style={{ width: "65rem" }}
          >
            <img src="/assets/image/logowhats.png" className="" alt="logo" />
            <div className="row">
              <div className="mx-5 my-5">
                <h2
                  className="d-flex justify-content-center aling-items-center text-center"
                  style={{ color: "#006400" }}
                >
                  {" "}
                  Envie suas dúvidas para o número (11) 98888-8888
                  <br /> e fale com a Gilda.
                </h2>
              </div>
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

export default WhatsPage;
