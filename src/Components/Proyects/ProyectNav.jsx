import React from "react";
import { Button, Container } from "react-bootstrap";
import Stack from "react-bootstrap/Stack";

import "../Statistics/Statistics.css";

function ProyectNav(props) {
  return (
    <Container className="card custom-card proyectSeparation ">
      <Stack direction="horizontal" gap={3} className="mx-auto">
        <div className="">
          <Button
            onClick={() => props.proyectsType("Mobile")}
            variant="outline-light"
            className="btn-md"
          >
            Proyectos Mobile
          </Button>
        </div>
        <div className="">
          <Button
            onClick={() => props.proyectsType("FrontEnd")}
            variant="outline-light"
            className="btn-md"
          >
            Proyectos FrontEnd
          </Button>
        </div>
        <div className="">
          <Button
            onClick={() => props.proyectsType("BackEnd")}
            variant="outline-light"
            className="btn-md"
          >
            Proyectos BackEnd
          </Button>
        </div>
      </Stack>
    </Container>
  );
}

export default ProyectNav;
