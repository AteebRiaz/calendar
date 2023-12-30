// EventList.js
import React from 'react';
import noEventsImage from '../assets/images/pic1.png'

const EventList = ({ selectedDate, events }) => {
  const filteredEvents = events.filter((event) => event.date === selectedDate);

  return (
    <div className="event-list">
      <h2>Event at: {selectedDate}</h2>
      {filteredEvents.length === 0 ? (
        <div className='imagecenter'>
         <img src={noEventsImage} alt="No events image" />
        <p>No events for the selected date.</p>
        </div>
      ) : (
        <ul>
          {filteredEvents.map((event, index) => (
            <li key={index}>{event.eventName}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default EventList;
