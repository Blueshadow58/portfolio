import React from "react";
import { Button, Stack } from "react-bootstrap";
import { proyectsData } from "./ProyectsData";
import "./Proyects.css";

const Proyects = () => {
  return proyectsData.map((proyect) => {
    return (
      <div key={proyect.title} className="card custom-card proyectSeparation">
        <div className="row ">
          <div className="col">
            <div className=" px-3 ">
              <Stack className=" " direction="horizontal" gap={2}>
                <div className="">
                  <img
                    height={350}
                    src={proyect.vImg}
                    alt=""
                    className="rounded"
                  />
                </div>
                <Stack className=" ">
                  {proyect.hImg.map((img, index) => {
                    return (
                      <div key={index} className="pb-2">
                        <img
                          src={img}
                          height={100}
                          alt=""
                          className="rounded"
                        />
                      </div>
                    );
                  })}
                </Stack>

                <Stack>
                  <div className="pb-3">
                    <span className="experienceDate">Abr 2022 - Jul 2022</span>
                  </div>
                  <div className="pb-3 experiencePosition">{proyect.title}</div>
                  <div className="pb-3 ">
                    <p>{proyect.content}</p>
                  </div>
                  <Stack
                    className="proyectButtons"
                    gap={2}
                    direction="horizontal"
                  >
                    <div>
                      <Button variant="primary">Ver Demo</Button>
                    </div>
                    <div>
                      <Button variant="outline-primary">Codigo</Button>
                    </div>
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
