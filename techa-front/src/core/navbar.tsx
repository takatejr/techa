import React, { useState } from "react";
import "./core.scss";
import { navbarButtons } from "../types/navbarButtons.type";
import src from "*.avif";

function Navbar() {
  const [Visible, setVisible] = useState(false);

  const navbarButtons: Array<navbarButtons> = [
    {
      title: "Front-End",
      acordeonOptions: [{ title: "huehue" }, { title: "huehue2" }],
    },
    { title: "Back-End" },
    {
      title: "Data Science",
      acordeonOptions: [{ title: "huehue" }, { title: "huehue2" }],
    },
    { title: "Other" },
  ];

  return (
    <div className="Navbar">
      <div className="logo"></div>
      {navbarButtons.map((el) => (
        <div className="button" key={el.title}>
          <div className="buttonText">{el.title}</div>
          <div className="buttonTextStick">|</div>
          {el.acordeonOptions?.map((el) => (
            <div key={el.title} className="drop" hidden>
              {el.title}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Navbar;
