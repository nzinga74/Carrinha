import logo from './logo.svg';
import './App.css';
import CarrinhoItem from './components/CarrinhoItem';
import Frete from './components/Frete';
import { data } from './components/CarrinhoItem/data';
function App() {
  return (
    <div className='carrinho'>
      <div className='carrinho-card'>
        <h3 className='carrinho-title'>Meu Carrinho</h3>
        <div className='carrinho-body'>
          <CarrinhoItem data={data} />
        </div>
        <div className='carrinho-total'>
          <h3>Total</h3>
          <h3>R$ 9,55</h3>
        </div>
        <Frete data={true} text='Parabéns, sua compra tem frete grátis !' />
        <div className='finaliza-compra'>
          <button className='finalizar-carrinho'>Finalizar compra</button>
        </div>
      </div>
    </div>
  );
}

export default App;
