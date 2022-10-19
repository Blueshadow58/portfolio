import React from "react";
import { Stack } from "react-bootstrap";
import "./Experiences.css";

const Experiences = () => {
  return (
    <div className="card custom-card ">
      <div className="row ">
        <div className="col">
          <div className="card-block px-3 ">
            <div className=" pb-3">
              <span className="h5 cardTitle ">Experiencia</span>
            </div>

            <Stack className=" customStackImg" direction="horizontal" gap={2}>
              <div>
                <img
                  height={84}
                  src="https://media-exp1.licdn.com/dms/image/C4D0BAQF0pwAW3pgsLQ/company-logo_200_200/0/1627478562308?e=2147483647&v=beta&t=8YDHehdjv0_SwYVwYGzCi4AI9B0ZO80QF3IexfbtGOQ"
                  alt=""
                />
              </div>
              <Stack>
                <div className="pb-1">
                  <span className="experienceDate">Abr 2022 - Jul 2022</span>
                </div>
                <div className="pb-3 experiencePosition">
                  Desarrollador Qlik Sense (Practica)
                </div>
                <div>
                  <p>
                    Apoyo en desarrollo de proyectos vinculados a plataformas
                    digitales de inteligencia de negocios y ciencia de datos,
                    mediante código y manipulación de tablas de datos.
                  </p>
                </div>
              </Stack>
            </Stack>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experiences;
