import React from 'react';

interface SquareProps {
  className: string;
  level: number;
  clickHandler: () => void;
  children?: JSX.Element | false | null;
}

const Square = ({ className, level, clickHandler, children }: SquareProps) => {
  return (
    <li className={className} data-level={level} onClick={clickHandler}>
      {children}
    </li>
  );
};

export default Square;
