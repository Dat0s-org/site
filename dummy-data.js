const DUMMY_EVENTS = [
    {
      id: 'e1',
      title: 'DBT-in-Practice Workshop with Victoria Perez Mola',
      description:
        'We are excited to announce this upcoming event on dbt. This is going to be a great workshop for those of you wanting to take your DBT knowledge to the next level!',
      location: 'https://us02web.zoom.us/j/83296187457?pwd=VG9RR0dSMWZCYU9YSU1rdW8xNDlYQT09',
      date: '2021-09-26',
      time: '11:00am - 12:30pm',
      image: 'images/games-event.jpg',
      isFeatured: true,
    },
    // {
    //   id: 'e2',
    //   title: 'Networking for Data Analyst',
    //   description:
    //     "We know: Networking is no fun if you are an introvert person. That's why we came up with this event - it'll be so much easier. Promised!",
    //   location: 'This event is going to take place over Zoom https://us02web.zoom.us/j/83296187457?pwd=VG9RR0dSMWZCYU9YSU1rdW8xNDlYQT09.',
    //   date: '2021-05-30',
    //   time: '11:00am - 12:30pm',
    //   image: 'images/cafecito-talks.jpg',
    //   isFeatured: true,
    // },
    // {
    //   id: 'e3',
    //   title: 'Networking for Data Scientist',
    //   description:
    //     'You probably need no help with networking in general. But focusing your energy correctly - that is something where most people can improve.',
    //   location: 'This event is going to take place over Zoom https://us02web.zoom.us/j/83296187457?pwd=VG9RR0dSMWZCYU9YSU1rdW8xNDlYQT09.',
    //   date: '2021-09-10',
    //   time: '11:00am - 12:30pm',
    //   image: 'images/social-event.jpg',
    //   isFeatured: true,
    // },
    // {
    //   id: 'e4',
    //   title: 'Programming for everyone',
    //   description:
    //     'Everyone can learn to code! Yes, everyone! In this live event, we are going to go through all the key basics and get you started with programming as well.',
    //   location: 'This event is going to take place over Zoom https://us02web.zoom.us/j/83296187457?pwd=VG9RR0dSMWZCYU9YSU1rdW8xNDlYQT09.',
    //   date: '2021-10-12',
    //   time: '11:00am - 12:30pm',
    //   image: 'images/games-event.jpg',
    //   isFeatured: true,
    // },
    // {
    //   id: 'e5',
    //   title: 'Networking for Data Analyst',
    //   description:
    //     "We know: Networking is no fun if you are an introvert person. That's why we came up with this event - it'll be so much easier. Promised!",
    //   location: 'This event is going to take place over Zoom https://us02web.zoom.us/j/83296187457?pwd=VG9RR0dSMWZCYU9YSU1rdW8xNDlYQT09.',
    //   date: '2022-01-21',
    //   time: '11:00am - 12:30pm',
    //   image: 'images/cafecito-talks.jpg',
    //   isFeatured: true,
    // },
    // {
    //   id: 'e6',
    //   title: 'Networking for Data Scientist',
    //   description:
    //     'You probably need no help with networking in general. But focusing your energy correctly - that is something where most people can improve.',
    //   location: 'This event is going to take place over Zoom https://us02web.zoom.us/j/83296187457?pwd=VG9RR0dSMWZCYU9YSU1rdW8xNDlYQT09.',
    //   date: '2022-02-01',
    //   time: '11:00am - 12:30pm',
    //   image: 'images/social-event.jpg',
    //   isFeatured: true,
    // },
  ];
  
  export function getFeaturedEvents() {
    return DUMMY_EVENTS.filter((event) => event.isFeatured);
  }
  
  export function getAllEvents() {
    return DUMMY_EVENTS;
  }
  
  export function getFilteredEvents(dateFilter) {
    const { year, month } = dateFilter;
  
    let filteredEvents = DUMMY_EVENTS.filter((event) => {
      const eventDate = new Date(event.date);
      return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
    });
  
    return filteredEvents;
  }
  
  export function getEventById(id) {
    return DUMMY_EVENTS.find((event) => event.id === id);
  }