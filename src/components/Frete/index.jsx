import React from 'react';
import Figure from '../../assets/figure.png';
import './styles/index.css';

function Frete({ data, text }) {
  return (
    <>
      {data && (
        <div className='frete-container'>
          <p className='frete-text'>{text}</p>
        </div>
      )}
    </>
  );
}

export default Frete;
