import React, { useState } from 'react';
import '../style/index.css';

const DrinkOrderButton = ({ item, callback }) => {

  const [count, setCount] = useState(0);

  const handleClick = async () => {
    setCount(prevCount => prevCount + 1);
    await callback(item.price);
  };

  return (
    <div className="button-container">
      <button className="custom-button" id={item.id} onClick={handleClick}>
        <span className="left-text">{item.name} </span>
        <span className="right-text">{item.price}円</span>
        <div className="counter" id={`${item.id}-count`}>{count}</div>
      </button>
    </div>
  );
};

export default DrinkOrderButton;