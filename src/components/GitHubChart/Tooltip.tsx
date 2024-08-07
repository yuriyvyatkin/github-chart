import formatDate from '@/utils/formatDate';

interface TooltipProps {
  contributions: string;
  timestamp?: string;
  timeZone?: string;
}

const Tooltip = ({ contributions, timestamp, timeZone }: TooltipProps) => {
  return (
    <div className="tooltip">
      <div className="tooltip__body">
        <div className="tooltip__arrow"></div>
        <div
          className={`tooltip__content ${
            !timestamp && 'tooltip__content_shortened'
          }`}
        >
          <span className="tooltip__content__contributions">
            {contributions} {Number(contributions) === 1 ? 'contribution' : 'contributions'}
          </span>
          {timestamp && timeZone && (
            <span className="tooltip__content__timestamp">
              {formatDate(timestamp, timeZone)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Tooltip;
