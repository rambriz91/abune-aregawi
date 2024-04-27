export default function Activity(props) {
const events = props.eventsData;
return (
<>
<section className='flex flex-wrap w-full'>
    {events.map((evnt) => (
        <div className='flex flex-col p-1 items-center w-1/4' key={evnt.id}>
            <img className='thumbnail' src={evnt.img} alt={evnt.alt} />
            <h4>{evnt.eventName}</h4>
        </div>
    ))}
</section>
</>
);
}