import React from "react";
import { Stack } from "react-bootstrap";
import { data } from "./StudiesData";

const Studies = () => {
  return (
    <div className="card custom-card ">
      <div className="row ">
        <div className="col">
          <div className="card-block px-3 ">
            <div className=" pb-3">
              <span className="h5 cardTitle ">Estudios</span>
            </div>

            {data.map((element) => {
              return (
                <Stack
                  className=" customStackImg"
                  direction="horizontal"
                  gap={2}
                  key={element.name}
                >
                  <div className="">
                    <img
                      className="imgContainer"
                      height={75}
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
                    <div className="pb-3 ">
                      <span>{element.detail}</span>
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

export default Studies;
