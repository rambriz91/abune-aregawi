export default function Business(props) {
  const bizes = props.bizData;
  return (
    <>
      <section className='flex flex-col flex-wrap w-full'>
        {bizes.map((biz) => (
          <div className='flex flex-col p-4 items-center w-1/2' key={biz.id}>
            <img
              className='rounded-full thumbnail w-1/2'
              src={biz.src}
              alt={biz.alt}
            />
            <div>
              <h4 className='p-1 text-lg w-full text-center'>{biz.bizName}</h4>
              <p className='p-3 w-full text-base'>{biz.desc}</p>
              <a className='text-indigo-800 underline font-bold text-xl p-1 m-1 georgia' href={biz.url}>{biz.flavText}</a>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
