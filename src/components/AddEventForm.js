import React, { useState } from 'react';

const AddEventForm = ({ selectedDate, onAddEvent }) => {
  const [eventName, setEventName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if eventName is not empty
    if (!eventName.trim()) {
      setErrorMessage('Event Name cannot be empty');
      return;
    }

    // Clear any previous error messages
    setErrorMessage('');

    // Call onAddEvent only if eventName is not empty
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
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </form>
    </div>
  );
};

export default AddEventForm;
