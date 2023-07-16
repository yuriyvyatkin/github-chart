import React from 'react';

interface DaysProps {
  data: string[];
  odd?: boolean;
}

const Days = ({ data, odd = true }: DaysProps) => {
  return (
    <ul className={`days ${odd ? 'days_odd' : 'days_even'}`}>
      {data.map((weekDayName, index) => (
        <li key={`${weekDayName}-${index}`} className="day">
          {weekDayName}
        </li>
      ))}
    </ul>
  );
};

export default Days;
