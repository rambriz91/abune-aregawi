export default function Supporter(props) {
  const supporters = props.data;
  return (
    <>
      <section className='flex'>
        {supporters.map((supporter) => (
          <div className='flex flex-col p-5 w-1/2 ' key={supporter.id}>
            <h3 className='p-1'>{supporter.supporter}</h3>
            <a className='w-fit p-3 inline-block' href={supporter.url}>
                <img className= 'rounded-full thumbnail' src={supporter.src} alt={supporter.alt} />
            </a>
            <p>{supporter.desc}</p>
          </div>
        ))}
      </section>
    </>
  );
}
