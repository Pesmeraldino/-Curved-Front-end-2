import "./index.css";
import imagem1 from "./assets/imagens/imagem1.jpg";
import imagem2 from "./assets/imagens/imagem2.jpg";
import imagem3 from "./assets/imagens/imagem3.jpg";
import imagem4 from "./assets/imagens/imagem4.jpg";
import imagem5 from "./assets/imagens/imagem5.jpg";
import imagem6 from "./assets/imagens/imagem6.jpg";
import imagem7 from "./assets/imagens/imagem7.jpg";
import imagem8 from "./assets/imagens/imagem8.jpg";
import imagem9 from "./assets/imagens/imagem9.jpg";
import imagem10 from "./assets/imagens/imagem10.jpg";
import imagem11 from "./assets/imagens/imagem11.jpg";
import imagem12 from "./assets/imagens/imagem12.jpg";
import imagem13 from "./assets/imagens/imagem13.jpg";
import imagem14 from "./assets/imagens/imagem14.jpg";
import imagem15 from "./assets/imagens/imagem15.jpg";
import imagem16 from "./assets/imagens/imagem16.jpg";
import imagem17 from "./assets/imagens/imagem17.jpg";
import imagem18 from "./assets/imagens/imagem18.jpg";
import imagem19 from "./assets/imagens/imagem19.jpg";
import imagem20 from "./assets/imagens/imagem20.jpg";
import imagem21 from "./assets/imagens/imagem21.jpg";
import imagem22 from "./assets/imagens/imagem22.jpg";
import imagem23 from "./assets/imagens/imagem23.jpg";
import imagem24 from "./assets/imagens/imagem24.jpg";
import imagem25 from "./assets/imagens/imagem25.jpg";
import imagem26 from "./assets/imagens/imagem26.jpg";
import imagem27 from "./assets/imagens/imagem27.jpg";
import logo from "./assets/imagens/logo512.png";
import React, { useState } from "react";

function App() {
  const [selectBtn, setSelectBtn] = useState();

  function handleClickTabs(tabName) {
    //useState

    setSelectBtn(tabName);
    console.log(selectBtn);
  }
  return (
    <div className="App">
      <div className="App2">
        <div className="logo">
          <img className="imageLogo" src={logo} alt=""/>
          <p className="title">Curved</p>
        </div>

        <div className="header">
          <button
            onClick={() => handleClickTabs("fotos1")}
            className="btn"
            id={`fotos${selectBtn === "fotos1" ? "Selected" : ""}`}
          >
            Animais
          </button>
          <button
            onClick={() => handleClickTabs("fotos2")}
            className="btn"
            id={`fotos${selectBtn === "fotos2" ? "Selected" : ""}`}
          >
            Cidades
          </button>
          <button
            onClick={() => handleClickTabs("fotos3")}
            className="btn"
            id={`fotos${selectBtn === "fotos3" ? "Selected" : ""}`}
          >
            Paisagens
          </button>
        </div>

        <ul className="grid">
          {selectBtn === "fotos1" && (
            <>
              <li>
                <img className="imagens" src={imagem1} alt="fireSpot" />
              </li>
              <li>
                <img className="imagens" src={imagem2} alt="fireSpot" />
              </li>
              <li>
                <img className="imagens" src={imagem6} alt="fireSpot" />
              </li>
              <li>
                <img className="imagens" src={imagem3} alt="fireSpot" />
              </li>
              <li>
                <img className="imagens" src={imagem4} alt="fireSpot" />
              </li>
              <li>
                <img className="imagens" src={imagem5} alt="fireSpot" />
              </li>
              <li>
                <img className="imagens" src={imagem7} alt="fireSpot" />
              </li>
              <li>
                <img className="imagens" src={imagem8} alt="fireSpot" />
              </li>
              <li>
                <img className="imagens" src={imagem9} alt="fireSpot" />
              </li>
            </>
          )}

          {selectBtn === "fotos2" && (
            <>
              <li>
                <img className="imagens" src={imagem10} alt="fireSpot" />
              </li>
              <li>
                <img className="imagens" src={imagem11} alt="fireSpot" />
              </li>
              <li>
                <img className="imagens" src={imagem12} alt="fireSpot" />
              </li>
              <li>
                <img className="imagens" src={imagem13} alt="fireSpot" />
              </li>
              <li>
                <img className="imagens" src={imagem14} alt="fireSpot" />
              </li>
              <li>
                <img className="imagens" src={imagem15} alt="fireSpot" />
              </li>
              <li>
                <img className="imagens" src={imagem16} alt="fireSpot" />
              </li>
              <li>
                <img className="imagens" src={imagem17} alt="fireSpot" />
              </li>
              <li>
                <img className="imagens" src={imagem18} alt="fireSpot" />
              </li>
            </>
          )}

          {selectBtn === "fotos3" && (
            <>
              <li>
                <img className="imagens" src={imagem19} alt="fireSpot" />
              </li>
              <li>
                <img className="imagens" src={imagem20} alt="fireSpot" />
              </li>
              <li>
                <img className="imagens" src={imagem21} alt="fireSpot" />
              </li>
              <li>
                <img className="imagens" src={imagem22} alt="fireSpot" />
              </li>
              <li>
                <img className="imagens" src={imagem23} alt="fireSpot" />
              </li>
              <li>
                <img className="imagens" src={imagem24} alt="fireSpot" />
              </li>
              <li>
                <img className="imagens" src={imagem25} alt="fireSpot" />
              </li>
              <li>
                <img className="imagens" src={imagem26} alt="fireSpot" />
              </li>
              <li>
                <img className="imagens" src={imagem27} alt="fireSpot" />
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
}

export default App;
