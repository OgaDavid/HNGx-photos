"use client";

import "./styles/hamburger.css";

const Hamburger = ({ open }: { open: boolean }) => {
  return (
    <button className="fancy-burger">
      <span
        className={`${
          open ? "open" : ""
        } rectangle rectangle--top rectangle--small`}
      ></span>
      <span
        className={`${open ? "open" : ""} rectangle rectangle--middle`}
      ></span>
      <span
        className={`${
          open ? "open" : ""
        } rectangle rectangle--bottom rectangle--small`}
      ></span>
    </button>
  );
};

export default Hamburger;
