import React from "react";
import { Button, Stack } from "react-bootstrap";
import { data } from "./ProyectsData";
import "./Proyects.css";

const Proyects = () => {
  return data.map(() => {
    return (
      <div className="card custom-card proyectSeparation">
        <div className="row ">
          <div className="col">
            <div className=" px-3 ">
              <Stack className=" " direction="horizontal" gap={2}>
                <div className="">
                  <img
                    height={280}
                    src="https://media-exp1.licdn.com/dms/image/C4D0BAQF0pwAW3pgsLQ/company-logo_200_200/0/1627478562308?e=2147483647&v=beta&t=8YDHehdjv0_SwYVwYGzCi4AI9B0ZO80QF3IexfbtGOQ"
                    alt=""
                  />
                </div>
                <Stack>
                  <div className="pb-3">
                    <span className="experienceDate">Abr 2022 - Jul 2022</span>
                  </div>
                  <div className="pb-3 experiencePosition">
                    Desarrollador Qlik Sense (Practica)
                  </div>
                  <div className="pb-3 ">
                    <p>
                      Apoyo en desarrollo de proyectos vinculados a plataformas
                      digitales de inteligencia de negocios y ciencia de datos,
                      mediante código y manipulación de tablas de datos.
                    </p>
                  </div>
                  <Stack
                    className="proyectButtons"
                    gap={2}
                    direction="horizontal"
                  >
                    <Button variant="primary">Ver Demo</Button>
                    <Button variant="outline-primary">Codigo</Button>
                  </Stack>
                </Stack>
              </Stack>
            </div>
          </div>
        </div>
      </div>
    );
  });
};

export default Proyects;
