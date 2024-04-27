export default function Activity(props) {
const events = props.eventsData;
return (
<>
<section>
    {events.map((evnt) => (
        <div className='flex flex-col p-4 items-center w-1/4' key={evnt.id}>
            <img src={evnt.img} alt={evnt.alt} />
            <h4>{evnt.eventName}</h4>
        </div>
    ))}
</section>
</>
);
}