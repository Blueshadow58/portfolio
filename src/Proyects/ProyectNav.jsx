import React from "react";
import { Button, Container } from "react-bootstrap";
import Stack from "react-bootstrap/Stack";

import "../Statistics/Statistics.css";

function ProyectNav() {
  return (
    <Container className="card custom-card proyectSeparation ">
      <Stack direction="horizontal" gap={3} className="mx-auto">
        <div className="">
          <Button variant="outline-light" className="btn-md">
            Proyectos personales
          </Button>
        </div>
        <div className="">
          <Button variant="outline-light" className="btn-md">
            Micro Proyectos
          </Button>
        </div>
      </Stack>
    </Container>
  );
}

export default ProyectNav;
