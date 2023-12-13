import React, { useState } from 'react';

const AddEventForm = ({ selectedDate, onAddEvent }) => {
  const [eventName, setEventName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddEvent({ eventName });
    setEventName('');
  };

  return (
    <div className="add-event-form">
      <h3>Add New Event for {selectedDate}</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Event Name:
          <input
            type="text"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
          />
        </label>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default AddEventForm;
