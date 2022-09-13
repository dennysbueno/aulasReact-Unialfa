import React from "react";
import "./styles.css"

export const Header = (props) => {
  return(
    <header
      style={{
        background: '#1d1d1d'
      }}
    >
      <div className="divHeader">
        <h1>{props.nomeSite}</h1>
      </div>
    </header>
  )
}