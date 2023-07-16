import React, { useState, useEffect } from 'react';
import calculateLevel from '@/utils/calculateLevel';

function GitHubChart() {
  const [squares, setSquares] = useState<JSX.Element[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://dpg.gg/test/calendar.json');
        const data = await response.json();
        const squaresArray: JSX.Element[] = [];
        const currentDate = new Date();

        for (let i = 0; i < 357; i++) {
          const date = new Date(currentDate);
          date.setDate(currentDate.getDate() - i);
          const dateString = date.toISOString().split('T')[0];

          const level = data[dateString] ? calculateLevel(data[dateString]) : 1;
          squaresArray.unshift(<li data-level={level}></li>);
        }

        setSquares(squaresArray);
      } catch (error) {
        console.error('Ошибка при получении данных', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="github-chart">
      <div className="graph">
        <ul className="months">
          <li>Янв.</li>
          <li>Февр.</li>
          <li>Март</li>
          <li>Апр.</li>
          <li>Май</li>
          <li>Июнь</li>
          <li>Июль</li>
          <li>Авг.</li>
          <li>Сент.</li>
          <li>Окт.</li>
          <li>Нояб.</li>
          <li>Дек.</li>
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
    </div>
  );
}

export default GitHubChart;
