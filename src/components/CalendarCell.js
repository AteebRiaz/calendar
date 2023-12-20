// CalendarCell.js

import React from 'react';

const CalendarCell = ({ date, onClick, eventPreviews, isSelected }) => {
  const handleClick = () => {
    onClick(date);
  };

  return (
    <div className={`calendar-cell ${isSelected ? 'selected-date' : ''}`} onClick={handleClick}>
      <div className={`date ${isSelected ? 'selected-date-text' : ''}`}>{date}</div>
      <ul className="event-previews">
        {eventPreviews.map((event, index) => (
          <li key={index}>
            {event.remainingCount
              ? `+${event.remainingCount} more`
              : event.eventName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CalendarCell;
