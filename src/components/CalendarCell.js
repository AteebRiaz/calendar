import React from 'react';

const CalendarCell = ({ date, onClick, eventPreviews }) => {
  return (
    <div className="calendar-cell" onClick={onClick}>
      <div className="date">{date}</div>
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
