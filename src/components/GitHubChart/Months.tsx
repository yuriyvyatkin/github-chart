import React from 'react';

interface MonthsProps {
  data: string[];
}

const Months = ({ data }: MonthsProps) => {
  return (
    <ul className="months">
      {data.map((month) => (
        <li key={month}>{month}</li>
      ))}
    </ul>
  );
};

export default Months;
