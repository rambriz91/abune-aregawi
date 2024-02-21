export default function Supporter(props) {
  const supporters = props.data;
  return (
    <>
      <section className='flex w-full'>
        {supporters.map((supporter) => (
          <div className='flex flex-col p-4 w-1/2 items-center' key={supporter.id}>
            <img
              className='rounded-full thumbnail'
              src={supporter.src}
              alt={supporter.alt}
            />
            <h4 className='p-1 text-lg'>{supporter.supporter}</h4>
            <p className='text-base'>{supporter.desc}</p>
          </div>
        ))}
      </section>
    </>
  );
}
