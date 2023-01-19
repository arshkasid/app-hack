import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EventTable = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get('https://app-hack-541eb-default-rtdb.firebaseio.com/app-hack.json')
      .then(response => {
        setEvents(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Event Date</th>
          <th>Entry Date</th>
          <th>Organizer</th>
          <th>Attendees</th>
          <th>Report</th>
          <th>Entry By</th>
        </tr>
      </thead>
      <tbody>
        {events.map(event => (
          <tr key={event.name}>
            <td>{event.name}</td>
            <td>{event.eventDate}</td>
            <td>{event.entryDate}</td>
            <td>{event.organizer}</td>
            <td>{event.attendees}</td>
            <td>{event.report}</td>
            <td>{event.entryBy}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default EventTable;
