import React, { useState, useEffect } from 'react';
import Square from './Square';
import Squares from './Squares';
import Tooltip from './Tooltip';
import calculateLevel from '@/utils/calculateLevel';

interface DescriptionProps {
  data: string[];
}

const Description = ({ data }: DescriptionProps) => {
  const [selectedSquare, setSelectedSquare] = useState<number>(-1);
  const [squares, setSquares] = useState<JSX.Element[]>([]);

  const handleSquareClick = (index: number) => {
    if (index === selectedSquare) {
      setSelectedSquare(-1);
    } else {
      setSelectedSquare(index);
    }
  };

  useEffect(() => {
    const squaresArray: JSX.Element[] = [];

    for (let i = 0; i < data.length; i++) {
      const level = calculateLevel(parseInt(data[i]));
      const isSelected = selectedSquare === i;
      const squareClass = isSelected ? 'square square_selected' : 'square';
      squaresArray.push(
        <Square
          key={i}
          className={squareClass}
          level={level}
          clickHandler={() => handleSquareClick(i)}
        >
          {isSelected && <Tooltip contributions={data[i]} />}
        </Square>,
      );
    }

    setSquares(squaresArray);
  }, [selectedSquare]);

  return (
    <div className="description">
      <span className="description__start-text">Меньше</span>
      <Squares data={squares} />
      <span className="description__end-text">Больше</span>
    </div>
  );
};

export default Description;
