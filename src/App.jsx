import React, { useState } from "react";
import { Card } from "./components/Card";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

import card1 from "./images/card1.jpg";
import card2 from "./images/card2.jpg";
import card3 from "./images/card3.jpg";
import card4 from "./images/card4.jpg";

import banner from "./images/banner.jpeg";

import "./styles/global.css";

const requisicao = [
  {
    "id": 1,
    "titulo": 'Trem Bala',
    "img": card1
  },
  {
    "id": 2,
    "titulo": 'Thor',
    "img": card2
  },
  {
    "id": 3,
    "titulo": 'Ooops!',
    "img": card3
  },
  {
    "id": 4,
    "titulo": 'Top Gun Maverick',
    "img": card4
  },
]

function App() {

  const [cards, setCards] = useState(requisicao)

  return (
    <>
      <Header />
      <img width="100%" src={banner} alt="Sala de Cinema" />

      <h2>Filmes</h2>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {
          cards.map((element, index) => {
            return (
              <Card
                key={element.id}
                titulo={element.titulo}
                img={element.img}
              />
            )
          })
        }
        
      </div>

      <Footer />
    </>
  );
}

export default App;
