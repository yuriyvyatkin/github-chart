import React, { useState, useEffect } from 'react';
import calculateLevel from '@/utils/calculateLevel';
import getRussianMonthName from '@/utils/getRussianMonthName';

function GitHubChart() {
  const [squares, setSquares] = useState<JSX.Element[]>([]);
  const [months, setMonths] = useState<string[]>([]);
  const [selectedSquare, setSelectedSquare] = useState<number>(-1);
  const [error, setError] = useState<string>('');

  const handleSquareClick = (index: number) => {
    setSelectedSquare(index);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://dpg.gg/test/calendar.json');
        const data = await response.json();
        const squaresArray: JSX.Element[] = [];
        const monthsArray: string[] = [];
        const currentDate = new Date();

        for (let i = 0; i < 357; i++) {
          const date = new Date(currentDate);
          date.setDate(currentDate.getDate() - i);
          const dateString = date.toISOString().split('T')[0];

          const level = data[dateString] ? calculateLevel(data[dateString]) : 1;
          const isSelected = selectedSquare === i;
          const squareClass = isSelected ? 'square square_selected' : 'square';
          squaresArray.unshift(
            <li
              key={i}
              className={squareClass}
              data-level={level}
              onClick={() => handleSquareClick(i)}
            ></li>
          );

          if (i % 30 === 0) {
            const monthIndex = date.getMonth();
            const monthName = getRussianMonthName(monthIndex);
            monthsArray.unshift(monthName);
          }
        }

        setSquares(squaresArray);
        setMonths(monthsArray);
      } catch (error) {
        setError(`Ошибка при получении данных: ${error}`);
      }
    };

    fetchData();
  }, [selectedSquare]);

  return (
    <div className="github-chart">
      {error ? (
        <div className="error">{error}</div>
      ) : (
        <div className="graph">
          <ul className="months">
            {months.map((month) => (
              <li key={month}>{month}</li>
            ))}
          </ul>
          <ul className="days">
            <li>Пн</li>
            <li></li>
            <li>Ср</li>
            <li></li>
            <li>Пт</li>
            <li></li>
            <li></li>
          </ul>
          <ul className="squares">{squares}</ul>
        </div>
      )}
    </div>
  );
}

export default GitHubChart;
