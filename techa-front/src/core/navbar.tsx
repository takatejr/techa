import React, { useState } from "react";
import './core.scss'
import { navbarButtons } from "../types/navbarButtons.type";

function Navbar() {
  const [Visible, setVisible] = useState(false);

  const navbarButtons: Array<navbarButtons> = [
    { title: "Front-End",
    acordeonOptions: [{ title: "huehue" }, { title: "huehue2" }],
  },
    { title: "Back-End" },
    {
      title: "Data Science",
      acordeonOptions: [{ title: "huehue" }, { title: "huehue2" }],
    },
    { title: "Other"}
  ];

  return (
    <div className="Navbar">
      <div className="logo">LOGO</div>
      {navbarButtons.map((el) => (
        <div className="button" key={el.title}> {el.title}
         {el.acordeonOptions?.map((el) =>  <div key={el.title} className='drop'>{el.title}</div> )}
        </div>
      ))}
    </div>
  );
}

export default Navbar;
