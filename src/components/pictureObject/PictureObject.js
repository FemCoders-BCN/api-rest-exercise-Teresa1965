

import React from 'react';
import './pictureObject.css';

function PictureObject({ image }) {
  return (
    <div className='productObject'>
      <img id='image' src={image.download_url} alt="Imagen" />
      <h4>Autor: {image.author}</h4>
      <p>ID de la imagen: {image.id}</p>
    </div>
  );
}



export default PictureObject;