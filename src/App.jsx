import React, { useState } from "react";
import axios from "axios";
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
    "imagem": card1
  },
  {
    "id": 2,
    "titulo": 'Thor',
    "imagem": card2
  },
  {
    "id": 3,
    "titulo": 'Ooops!',
    "imagem": card3
  },
  {
    "id": 4,
    "titulo": 'Top Gun Maverick',
    "imagem": card4
  },
]

function App() {

  const [cards, setCards] = useState(requisicao)
  const [qualquerNome, setQualquerNome] = useState('Categorias')
  const [nomeSite, setNomeSite] = useState('Cinema em casa')

  function alterarInterface() {
    setQualquerNome('Filmes')
    setNomeSite('Cinema Shopping Palladium Umuarama')
    axios.get('https://back-filmes.herokuapp.com/filmes')
      .then((resposta) => {
        console.log(resposta.data)
        setCards(resposta.data)
      })
  }
  return (
    <>
      <Header 
        nomeSite={nomeSite}
      />
      <button onClick={alterarInterface}>Alterar Interface</button>
      <img width="100%" src={banner} alt="Sala de Cinema" />
      <h2>{qualquerNome}</h2>

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
                img={element.imagem}
              />
            )
          })
        }
        
      </div>

      <Footer 
        titulo={"Desenvolvido por Dennys Bueno"}
      />
    </>
  );
}

export default App;
