import React from 'react';

const EventList = ({ selectedDate, events }) => {
  return (
    <div className="event-list">
      <h2>Event at : <br></br>{selectedDate}</h2>
      <ul>
        {events
          .filter((event) => event.date === selectedDate)
          .map((event, index) => (
            <li key={index}>{event.eventName}</li>
          ))}
      </ul>
    </div>
  );
};

export default EventList;
