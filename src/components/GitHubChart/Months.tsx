interface MonthsProps {
  data: string[];
}

const Months = ({ data }: MonthsProps) => {
  return (
    <ul className="months">
      {data.map((month, index) => (
        <li key={`month-${index}`}>{month}</li>
      ))}
    </ul>
  );
};

export default Months;
