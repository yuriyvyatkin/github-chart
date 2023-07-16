import React, { useEffect, useState } from 'react';
import calculateLevel from '@/utils/calculateLevel';
import getRussianMonthName from '@/utils/getRussianMonthName';
import Error from './Error';
import Months from './Months';
import Days from './Days';
import Square from './Square';
import Tooltip from './Tooltip';
import Squares from './Squares';
import Description from './Description';

function GitHubChart() {
  const [squares, setSquares] = useState<JSX.Element[]>([]);
  const [months, setMonths] = useState<string[]>([]);
  const [selectedSquare, setSelectedSquare] = useState<number>(-1);
  const [error, setError] = useState<string>('');
  const [tooltipData, setTooltipData] = useState<{
    contributions: number;
    date: string;
  } | null>(null);

  const handleSquareClick = (
    index: number,
    date: string,
    contributions: number,
  ) => {
    if (index === selectedSquare) {
      setSelectedSquare(-1);
    } else {
      setSelectedSquare(index);
      setTooltipData({ contributions, date });
    }
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
            <Square
              key={i}
              className={squareClass}
              level={level}
              clickHandler={() =>
                handleSquareClick(i, dateString, data[dateString])
              }
            >
              {isSelected && tooltipData && (
                <Tooltip
                  contributions={
                    tooltipData.contributions
                      ? String(tooltipData.contributions)
                      : '0'
                  }
                  timestamp={tooltipData.date}
                />
              )}
            </Square>,
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
        <Error text={error} />
      ) : (
        <>
          <div className="graph">
            <Months data={months} />
            <Days data={['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']} />
            <Squares data={squares} />
          </div>
          <Description data={['0', '1-9', '10-19', '20-29', '30+']} />
        </>
      )}
    </div>
  );
}

export default GitHubChart;
