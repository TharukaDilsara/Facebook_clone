import React from 'react';
import './birthdayReminders.css';
import CakeIcon from '@mui/icons-material/Cake';
import EventIcon from '@mui/icons-material/Event';

const BirthdayReminders = () => {
  // Mock data for birthdays and events
  const birthdays = [
    {
      id: 1,
      name: 'Jessica Lee',
      profilePicture: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face',
      date: 'Today'
    },
    {
      id: 2,
      name: 'David Kim',
      profilePicture: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=150&h=150&fit=crop&crop=face',
      date: 'Tomorrow'
    }
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: 'Tech Conference 2025',
      date: 'Oct 15, 2025',
      type: 'Conference',
      attendees: 120
    },
    {
      id: 2,
      title: 'Local Community Meetup',
      date: 'Oct 20, 2025',
      type: 'Meetup',
      attendees: 45
    }
  ];

  return (
    <div className="birthday-reminders">
      {/* Birthdays Section */}
      <div className="section">
        <div className="section-header">
          <CakeIcon className="section-icon" />
          <h3>Birthdays</h3>
        </div>
        <div className="birthdays-list">
          {birthdays.map(person => (
            <div key={person.id} className="birthday-item">
              <div className="birthday-avatar">
                <img src={person.profilePicture} alt={person.name} />
              </div>
              <div className="birthday-info">
                <span className="birthday-name">{person.name}</span>
                <span className="birthday-date">{person.date}</span>
              </div>
              <button className="wish-button">
                Wish Happy Birthday
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Events Section */}
      <div className="section">
        <div className="section-header">
          <EventIcon className="section-icon" />
          <h3>Upcoming Events</h3>
        </div>
        <div className="events-list">
          {upcomingEvents.map(event => (
            <div key={event.id} className="event-item">
              <div className="event-info">
                <h4 className="event-title">{event.title}</h4>
                <p className="event-date">{event.date}</p>
                <p className="event-attendees">{event.attendees} people interested</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BirthdayReminders;