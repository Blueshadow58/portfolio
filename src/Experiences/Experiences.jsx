import React from "react";

const Experiences = () => {
  return (
    <div className="card custom-card ">
      <div className="row ">
        <div className="col">
          <div className="card-block px-3 ">
            <div className=" pb-2">
              <span className="h6 cardTitle ">Conocimientos</span>
            </div>

            {/* {data.map((element) => {
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
          })} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experiences;
