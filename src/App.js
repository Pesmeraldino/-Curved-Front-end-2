import "./index.css";

import logo from "./assets/imagens/logo512.png";
import React, { useState, useEffect } from "react";
import axios from 'axios';

const CLIENT_ID = "2QYaRYYSz2Z4l2CdaCu7odjgZk37PceynkV3MEEg2_I";

function App() {
  const [selectBtn, setSelectBtn] = useState('fotos1');
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async (query) => {
      try {
        const response = await axios.get(`https://api.unsplash.com/search/photos`, {
          params: { query, client_id: CLIENT_ID, per_page: 14 },
        });
        console.log('API RESPONDE:', response.data);
        setImages(response.data.results);
      } catch (error) {
        console.error('ERRO NAS IMAGENS', error);
      }
    };

    switch (selectBtn) {
      case 'fotos1':
        fetchImages('animals');
        break;
      case 'fotos2':
        fetchImages('cities');
        break;
      case 'fotos3':
        fetchImages('landscapes');
        break;
      case 'fotos4':
          fetchImages('foods');
        break;
      default:
        fetchImages('random');
        break;
    }
  }, [selectBtn]);

  function handleClickTabs(tabName) {
    setSelectBtn(tabName);
  }

  return (
    <div className="App">
      <div className="App2">
        <div className="logo">
          <img className="imageLogo" src={logo} alt="logo" />
          <p className="title">Curved</p>
        </div>

        <div className="header">
          <button
            onClick={() => handleClickTabs('fotos1')}
            className={`btn ${selectBtn === 'fotos1' ? 'btnSelected' : ''}`}
          >
            Animais
          </button>
          <button
            onClick={() => handleClickTabs('fotos2')}
            className={`btn ${selectBtn === 'fotos2' ? 'btnSelected' : ''}`}
          >
            Cidades
          </button>
          <button
            onClick={() => handleClickTabs('fotos3')}
            className={`btn ${selectBtn === 'fotos3' ? 'btnSelected' : ''}`}
          >
            Paisagens
          </button>
          <button
            onClick={() => handleClickTabs('fotos4')}
            className={`btn ${selectBtn === 'fotos4' ? 'btnSelected' : ''}`}
          >
            Comidas
          </button>
        </div>

        <ul className="grid">
          {images.length > 0 ? (
            images.map((image) => (
              <li key={image.id}>
                <img className="imagens" src={image.urls.small} alt={image.alt_description || 'image'} />
              </li>
            ))
          ) : (
            <p>No images found.</p>
          )}
        </ul>
      </div>
    </div>
  );
}

export default App;