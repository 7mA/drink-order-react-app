import React from 'react';
import '../style/index.css';

const DrinkBillFrame = ({ count, price }) => {
  return (
    <div className="frame-container">
      <h3>お会計</h3>
      <hr />
      <p>商品数：<span id="count">{count}</span> 個</p>
      <p>合計金額：<span id="price">{price}</span> 円</p>
    </div>
  );
};

export default DrinkBillFrame;