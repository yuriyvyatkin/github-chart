import formatDate from '@/utils/formatDate';

interface TooltipProps {
  contributions: string;
  timestamp?: string;
}

const Tooltip = ({ contributions, timestamp }: TooltipProps) => {
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
            {contributions} contributions
          </span>
          {timestamp && (
            <span className="tooltip__content__timestamp">
              {formatDate(timestamp)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Tooltip;
