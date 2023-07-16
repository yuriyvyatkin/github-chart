import React from 'react';

interface SquaresProps {
  data: JSX.Element[];
}

const Squares = ({ data }: SquaresProps) => {
  return <ul className="squares">{data}</ul>;
};

export default Squares;
