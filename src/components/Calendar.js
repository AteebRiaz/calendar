import React, { useState } from 'react';
import CalendarCell from './CalendarCell';
import EventList from './EventList';
import AddEventForm from './AddEventForm';
import '../styles/Calendar.css';

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [events, setEvents] = useState([]);
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth() + 1);
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  const getDaysInMonth = (month, year) => {
    return new Date(year, month, 0).getDate();
  };

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  const handleAddEvent = (eventDetails) => {
    setEvents([...events, { date: selectedDate, ...eventDetails }]);
  };

  const getEventPreviews = (date) => {
    const dateEvents = events.filter((event) => event.date === date);
    const eventPreviews = dateEvents.slice(0, 2);

    if (dateEvents.length > 2) {
      const remainingCount = dateEvents.length - 2;
      eventPreviews.push({ remainingCount });
    }

    return eventPreviews;
  };

  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(currentMonth, currentYear);
    const currentDate = new Date(currentYear, currentMonth - 1, 1);
    const startingDay = currentDate.getDay() || 7; // Adjust to start from Monday (1)
  
    return (
      <div className="calendar">
        {Array.from({ length: daysInMonth + startingDay - 1 }).map((_, index) => {
          const day = index + 1 - startingDay + 1;
          return day > 0 ? (
            <CalendarCell
              key={index}
              date={day}
              onClick={() => handleDateClick(day)}
              eventPreviews={getEventPreviews(day)}
            />
          ) : (
            <div key={index} className="empty-cell" />
          );
        })}
      </div>
    );
  };
  
  

  const handleNextMonth = () => {
    setCurrentMonth((prevMonth) => (prevMonth % 12) + 1);
    if (currentMonth === 12) {
      setCurrentYear((prevYear) => prevYear + 1);
    }
  };

  const handlePrevMonth = () => {
    setCurrentMonth((prevMonth) => (prevMonth === 1 ? 12 : prevMonth - 1));
    if (currentMonth === 1) {
      setCurrentYear((prevYear) => prevYear - 1);
    }
  };

  const handleNextYear = () => {
    setCurrentYear((prevYear) => prevYear + 1);
  };

  const handlePrevYear = () => {
    setCurrentYear((prevYear) => prevYear - 1);
  };

  return (
    <div className="calendar-container">
      <div className="calendar-section">
        <div className="month-year">
          <button onClick={handlePrevYear}>&lt;&lt;</button>
          <button onClick={handlePrevMonth}>&lt;</button>
          <h2>{`${new Date(currentYear, currentMonth - 1).toLocaleDateString('en-US', {
            month: 'long',
          })} ${currentYear}`}</h2>
          <button onClick={handleNextMonth}>&gt;</button>
          <button onClick={handleNextYear}>&gt;&gt;</button>
        </div>
        <div className="day-labels">
          {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => (
            <div key={index} className="day-label">{day}</div>
          ))}
        </div>
        {renderCalendar()}
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
