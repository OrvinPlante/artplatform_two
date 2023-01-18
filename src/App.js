import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import DatabaseJS from './Database';
import Angebote from './Angebote';
import Header from './Header';

function App() {
  return (
    <>
    <div className="main-container">
      <div className="sidebar-left">
        <h2>Sidebar</h2>
      </div>
        <div className="middle-container">
          <Header />
          <Angebote />
      </div>
    </div>
    </>
  );
}

function getAllImages() {
  console.log("function getAllImages");
  const pathToImg = "/fotos/Fotostrecke/";
  let fotosArray = [];
  let i, currentImport;
  for (i = 0; i < 25; i += 1) {
    currentImport = import(pathToImg + i + ".png");
    fotosArray.push(currentImport);
  }

  console.log("reached end of getAllImages");
}

function Gallery(galleryState) {

  let galleryItem = 
    <div className="col galleryItem">
      <img className="galleryItemImage" src="image.jpg" alt=""></img>
    </div>
  ;
  return (
    <>

    </>
  );
}

export default App;
