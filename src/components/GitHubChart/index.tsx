import React from 'react';

function GitHubChart() {
  const squares = [];

  for (var i = 1; i < 365; i++) {
    const level = Math.floor(Math.random() * 5);
    squares.push(<li data-level={level}></li>);
  }

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
