import Activity from '../components/EventsDiv';
import data from '../assets/data/events-data';

export default function Event() {
  return (
    <div className='flex flex-col text-2xl georgia items-center'>
      <h2 className='text-center m-5'>ክስተት / Events</h2>
      <Activity data ={data} />
    </div>
  );
}
