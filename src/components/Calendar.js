import React, { useState } from 'react';
import CalendarCell from './CalendarCell';
import EventList from './EventList';
import AddEventForm from './AddEventForm';
import '../styles/Calendar.css';

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [events, setEvents] = useState([]);

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  const handleAddEvent = (eventDetails) => {
    setEvents([...events, { date: selectedDate, ...eventDetails }]);
  };

  const getEventPreviews = (date) => {
    const dateEvents = events.filter((event) => event.date === date);
    const eventPreviews = dateEvents.slice(0, 2); // Show only the first two events as previews

    if (dateEvents.length > 2) {
      const remainingCount = dateEvents.length - 2;
      eventPreviews.push({ remainingCount });
    }

    return eventPreviews;
  };

  return (
    <div className="calendar-container">
      <div className="calendar-section">
        <div className="calendar">
          {[...Array(31)].map((_, index) => (
            <CalendarCell
              key={index}
              date={index + 1}
              onClick={() => handleDateClick(index + 1)}
              eventPreviews={getEventPreviews(index + 1)}
            />
          ))}
        </div>
      </div>

      <div className="event-section">
        <EventList selectedDate={selectedDate} events={events} />

        {selectedDate && (
          <AddEventForm
            selectedDate={selectedDate}
            onAddEvent={handleAddEvent}
          />
        )}
      </div>
    </div>
  );
};

export default Calendar;
