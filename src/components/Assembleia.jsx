import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Container } from "react-bootstrap";
import img from "../assets/img/publico-resultados.png";

function Assembleia() {
  return (
    <Container fluid>
      <img
        src={img}
        alt="imagem assembleia"
        style={{ width: "100%", marginTop: "30vh" }}
      />
    </Container>
  );
}

export default Assembleia;
