import React, { useState } from 'react';
import './style/App.css';
import DrinkOrderButton from './components/DrinkOrderButton';
import DrinkBillFrame from './components/DrinkBillFrame';

function App() {

  const drinkList = [
    {
      name: 'コーヒー',
      price: 480,
      id: 'coffee'
    },
    {
      name: '紅茶',
      price: 280,
      id: 'tea'
    },
    {
      name: 'ミルク',
      price: 180,
      id: 'milk'
    },
    {
      name: 'コーラ',
      price: 190,
      id: 'coke'
    },
    {
      name: 'ビール',
      price: 580,
      id: 'beer'
    }
  ];

  const [count, setCount] = useState(0);
  const [price, setPrice] = useState(0);

  const handleClick = async (appendPrice) => {
    setCount(PreviousCount => PreviousCount + 1);
    setPrice(PreviousPrice => PreviousPrice + appendPrice);
  };

  return (
    <div className="App">
      <div className="button-list-container">
        { drinkList.map((item, index) => (
          <DrinkOrderButton item={item} key={index} callback={handleClick} />
        )) }
      </div>
      <DrinkBillFrame count={count} price={price} />
    </div>
  );
}

export default App;
