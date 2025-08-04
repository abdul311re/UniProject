// CalendarComponent.jsx
import React, { useState, useEffect } from 'react'; // ✅ useEffect included
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import styled from "styled-components";

const FormContainer = styled.div`
  max-width: 500px;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  background: white;

  .fc-direction-ltr .fc-button-group > .fc-button:not(:last-child) {
    border-bottom-right-radius: 0px;
    border-top-right-radius: 0px;
    width: 40px;
    height: 25px;
    font-size: 10px;
    padding: 0;
}
.fc-direction-ltr .fc-button-group > .fc-button:not(:first-child) {
    border-bottom-right-radius: 0px;
    border-top-right-radius: 0px;
    width: 40px;
    height: 25px;
    font-size: 10px;
    padding: 0;
}
.fc .fc-toolbar-title{
    font-size: 20px;
}
.fc .fc-col-header-cell-cushion {
    display: inline-block;
    padding: 2px 2px;
    font-size: 13px;
}
.fc .fc-daygrid-body-unbalanced .fc-daygrid-day-events {
    min-height: 0.1em;
    position: relative;
}
.fc table {
    border-collapse: collapse;
    border-spacing: 0px;
    font-size: 13px;
}
`;
const LOCAL_STORAGE_KEY = 'calendarEvents';

export default function CalendarComponent() {
  const [events, setEvents] = useState(() => {
    const storedEvents = localStorage.getItem(LOCAL_STORAGE_KEY);
    return storedEvents ? JSON.parse(storedEvents) : [];
  });

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(events));
  }, [events]);

  const handleDateClick = (info) => {
    const title = prompt('Enter event title:');
    if (title) {
      setEvents([...events, { title, date: info.dateStr }]);
    }
  };

  const handleEventClick = (clickInfo) => {
    const newTitle = prompt('Enter a new title for this event:', clickInfo.event.title);
    if (newTitle !== null) {
      const trimmedTitle = newTitle.trim();
      const updatedEvents = events.map((event) =>
        event.title === clickInfo.event.title && event.date === clickInfo.event.startStr
          ? { ...event, title: trimmedTitle }
          : event
      );
      setEvents(updatedEvents);
    }
  };

  const eventContent = (eventInfo) => {
    return (
      <div>
        {eventInfo.event.title && <strong>{eventInfo.event.title}</strong>}
      </div>
    );
  };

  return (
    <FormContainer className="p-4">
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          left: 'prev,today,next',
          center: 'title',
          right: 'dayGridMonth,dayGridWeek,dayGridDay'
        }}
        height="auto"
        events={events}
        dateClick={handleDateClick}
        eventClick={handleEventClick}
        eventContent={eventContent}
      />
    </FormContainer>
  );
}
