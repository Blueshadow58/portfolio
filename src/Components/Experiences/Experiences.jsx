import React from "react";
import { Stack } from "react-bootstrap";
import "./Experiences.css";
import { data } from "./data";

const ExperienceCard = ({ date, title, description, image }) => (
  <Stack className=" customStackImg" direction="horizontal" gap={2}>
    <div>
      <img
        style={{
          borderRadius: 15,
          maxWidth: 80,
          maxHeight: 100,
          objectFit: "scale-down",
        }}
        height={84}
        src={image}
        alt=""
      />
    </div>
    <Stack>
      <div className="pb-1">
        <span className="experienceDate">{date}</span>
      </div>
      <div className="pb-3 experiencePosition">{title}</div>
      <div>
        <p>{description}</p>
      </div>
    </Stack>
  </Stack>
);

const Experiences = () => {
  return (
    <div className="card custom-card ">
      <div className="row ">
        <div className="col">
          <div className="card-block px-3 ">
            <div className=" pb-3">
              <span className="h5 cardTitle ">Experiencia</span>
              {data.map((item) => (
                <ExperienceCard
                  date={item.date}
                  title={item.title}
                  description={item.description}
                  image={item.image}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experiences;
