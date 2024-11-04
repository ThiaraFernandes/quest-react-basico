import React, { useState } from "react";
import Card from "./Components/Cards/Card";
import Button from "./Components/Button/Button"



function App() {
  //Inicializar o estado com a label Clique aqui
  const[buttonLabel, setButtonLabel] = useState('Clique aqui');
  const[fontColor, setFontColor] = useState('#000');

  const handleClick = () => {
    //Atualiza a label do botão
    setButtonLabel('Baixar CV');

    alert('A label desse botão é Baixar CV');

    //alterar a cor do botão, após o alert
    setFontColor('#ff6347')
  }

  return (
    <>
      <Card text="Este é um parágrafo estilizado em React" color="#ff6347" />
      <Button onClick={handleClick} label={buttonLabel} fontColor={fontColor}/>
    </>

  );
}

export default App;
