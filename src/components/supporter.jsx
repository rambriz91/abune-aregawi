export default function Supporter(props) {
  const supporters = props.data;
  return (
    <>
      <section>
        {supporters.map((supporter) => (
          <div key={supporter.id}>
            <h3>{supporter.supporter}</h3>
            <a href={supporter.url}>
                <img src={supporter.src} alt={supporter.alt} />
            </a>
            <p>{supporter.desc}</p>
          </div>
        ))}
      </section>
    </>
  );
}
