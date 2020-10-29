import React, { useState } from "react";
import '../core/core.scss'
import { navbarButtons } from "../types/navbarButtons.type";

function Navbar() {
  const [Visible, setVisible] = useState(false);

  const navbarButtons: Array<navbarButtons> = [
    { title: "1st button",
    acordeonOptions: [{ title: "huehue" }, { title: "huehue2" }],
  },
    { title: "2nd button" },
    {
      title: "3rd button",
      acordeonOptions: [{ title: "huehue" }, { title: "huehue2" }],
    },
    { title: "4rd button"}
  ];

  return (
    <div className="Navbar">
      <div className="logo">LOGO</div>
      {navbarButtons.map((el) => (
        <div className="button"> {el.title}
         {el.acordeonOptions?.map((el) =>  <div hidden>{el.title}</div> )}
        </div>
      ))}
    </div>
  );
}

export default Navbar;
