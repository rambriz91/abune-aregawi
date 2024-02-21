export default function Contact() {
  return (
    <div className='w-full'>
      <h2 className='text-center m-5 georgia w-full'>ተገናኝ / Contact</h2>
      <div className='flex w-full justify-around'>
        <div className='m-5 p-5 flex flex-col georgia text-2xl w-1/2'>
          <p>Email: SaintAbuneAregawiOrthodox@gmail.com</p>
          <p>Phone: (619) 567-9416</p>
          <p>Worship Service Address: 5202 Orange Ave, San Diego, CA 92115</p>
          <p>Mailing Address: PO Box 153047 San Diego CA 92195</p>
        </div>
        <div className='m-5 flex flex-wrap justify-start w-1/2'>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3355.446921646841!2d-117.0856721229388!3d32.75387387367327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d95421d81d5441%3A0x6c729a0aa446ee35!2s5202%20Orange%20Ave%2C%20San%20Diego%2C%20CA%2092115!5e0!3m2!1sen!2sus!4v1707444184902!5m2!1sen!2sus'
            width='600'
            height='450'
            allowfullscreen=''
            loading='lazy'
            referrerpolicy='no-referrer-when-downgrade'
          ></iframe>
          <img className= 'm-2' width='600' src="/images/Screenshot 2024-02-20 170643.jpg" alt="" />
        </div>
        </div>
    </div>
  );
}
