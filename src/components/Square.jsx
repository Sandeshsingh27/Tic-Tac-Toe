import React from 'react';

const Square = ({ value, onClick, isWinningSquares }) => {
  //   console.log(value);
  return (
    <button
      type="button"
      onClick={onClick}
      className={`square ${isWinningSquares ? 'winning' : ''} ${
        value === 'X' ? 'text-green' : 'text-orange'
      }`}
    >
      {value}
    </button>
  );
};

export default Square;
