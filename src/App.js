import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import DatabaseJS from './Database';

function App() {
  return (
    <>
    <div className="container-fluid main-container">
      <div className="row">
        <div className="col sidebar-left">
          
        </div>
        <div className="col-8 middle-container">
          <h2>Gebrauchtkunsthandel JASAX</h2>
          <div className="angebote-container">
            <div className="row align-items-center">
              <div className="col">col</div>
              <div className="col">col</div>
              <div className="col">col</div>
              <div className="w-100"></div>
              <div className="col">col</div>
              <div className="col">col</div>
              <div className="col">col</div>
              <div className="w-100"></div>
              <div className="col">col</div>
              <div className="col">col</div>
              <div className="col">col</div>
              <div className="w-100"></div>
              <div className="col">col</div>
              <div className="col">col</div>
              <div className="col">col</div>
              <div className="w-100"></div>
              <div className="col">col</div>
              <div className="col">col</div>
              <div className="col">col</div>
            </div>
          </div>
        </div>
        <div className="col sidebar-right">

        </div>
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
