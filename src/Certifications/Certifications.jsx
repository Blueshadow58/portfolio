import React from "react";
import { Stack } from "react-bootstrap";
import { FaExternalLinkAlt } from "react-icons/fa";
import "./Certifications.css";
import { data } from "./CertificationsData";

const Certifications = () => {
  return (
    <div className="card custom-card ">
      <div className="row ">
        <div className="col">
          <div className="card-block px-3 ">
            <div className=" pb-3">
              <span className="h5 cardTitle ">Cursos y Certificados</span>
            </div>

            {data.map((element) => {
              return (
                <Stack
                  className="pb-3 customStackImg"
                  direction="horizontal"
                  gap={2}
                >
                  <div className="">
                    <img
                      className="imgContainer"
                      height={84}
                      src={element.img}
                      alt=""
                    />
                  </div>
                  <Stack>
                    <div className="pb-1">
                      <span className="experienceDate">{element.date}</span>
                    </div>
                    <div className="pb-3 experiencePosition">
                      {element.name}
                    </div>
                    <div>
                      {element.link ? (
                        <a
                          className="customLink"
                          href={element.link}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Certificado online <FaExternalLinkAlt size={15} />
                        </a>
                      ) : (
                        <></>
                      )}
                    </div>
                  </Stack>
                </Stack>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certifications;
