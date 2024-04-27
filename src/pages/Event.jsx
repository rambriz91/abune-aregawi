import Activity from '../components/EventsDiv';
import eventsData from '../assets/data/events-data';

export default function Event() {
  return (
    <div className='flex flex-col text-2xl georgia items-center'>
      <h2 className='text-center m-5'>ክስተት / Events</h2>
      <Activity eventsData={eventsData} />
      <div className='m-4 text-center'>
        <p>
          *Illustrations are from the Ethiopian Bible, the world’s oldest
          surviving illustrated Gospels:
        </p>
        <a className='text-indigo-800 underline font-bold text-3xl p-1 m-3 georgia' href='https://en.wikipedia.org/wiki/Garima_Gospels#:~:text=The%20Garima%20Gospels%20are%20two,surviving%20complete%20illuminated%20Christian%20manuscript'>
          The Garima Gospels
        </a>
      </div>
    </div>
  );
}
