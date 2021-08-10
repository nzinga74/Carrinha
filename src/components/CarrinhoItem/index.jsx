import React from 'react';
import Figure from '../../assets/figure.png';
import './styles/index.css';

function CarrinhoItem({ data }) {
  return (
    <>
      {data?.map(values => (
        <div className='carrinho-item'>
          <img src={Figure} />
          <div className='carrinho-description'>
            <h3>{values?.name}</h3>
            <p className='last-value'>{values?.lastValue}</p>
            <p className='current-value'>{values?.currentValue}</p>
          </div>
        </div>
      ))}
    </>
  );
}

export default CarrinhoItem;
