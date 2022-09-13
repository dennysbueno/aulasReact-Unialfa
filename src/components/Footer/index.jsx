import React from "react";

export const Footer = (props) => {
  return (
    <footer
      style={{
        background: "#0d6efd",
        paddingTop: 15,
        paddingBottom: 15,
        marginTop: 15,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <p>{props.titulo}</p>
    </footer>
  );
};
