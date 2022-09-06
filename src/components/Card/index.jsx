import React from "react";
import "./styles.css";

export const Card = (props) => {
  return (
    <div className="card">
      <img width="100%" src={props.img} alt="Filme 01" />
      <h2>{props.titulo}</h2>
    </div>
  );
};
