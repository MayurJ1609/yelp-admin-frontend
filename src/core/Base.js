import React from "react";
import Menu from "./Menu";

const Base = ({
  title = "My Title",
  description = "My Description",
  className = "bg-dark text-white p-4",
  children,
}) => {
  return (
    <div>
      <Menu />
      <div className="container-fluid">
        <div className="bg-dark text-white text-center">
          <h2 className="display-4">{title}</h2>
          <p className="lead">{description}</p>
        </div>
        <div className={className}>{children}</div>
      </div>
      <footer className="">
        <div className="">
          <h4>If you got any questions, feel free to reach out</h4>
          <button className="">Contact Us</button>
        </div>
        <div className="container">
          <span className="text-muted">
            Designed and developed by <span className="text-white">Mayur</span>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Base;
