// CalendarComponent.jsx
import React, { useState, useEffect } from 'react'; // ✅ useEffect included
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

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
    <div className="p-4">
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
    </div>
  );
}
