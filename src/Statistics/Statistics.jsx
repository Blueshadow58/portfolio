import React from "react";
import { Stack } from "react-bootstrap";
import ProgressBar from "react-bootstrap/ProgressBar";
import "./Statistics.css";
import { data } from "./data";

const Statistics = () => {
  return (
    <div className="card custom-card ">
      <div className="row ">
        <div className="col">
          <div className="card-block px-3 ">
            <div className=" pb-3">
              <span className="h5 cardTitle ">Conocimientos</span>
            </div>

            {data.map((element) => {
              return (
                <Stack
                  key={element.name}
                  className="pb-1"
                  direction="horizontal"
                  gap={2}
                >
                  <span className="">{element.name}</span>
                  <div className="ms-auto">
                    <ProgressBar
                      className="progressBarSize"
                      now={element.value}
                    />
                  </div>
                </Stack>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
