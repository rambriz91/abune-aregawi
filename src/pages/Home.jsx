export default function Home() {
  return (
    <div id= 'home-div' className='flex'>
      <div id='left-div' className='flex flex-col justify-center items-center w-1/2 my-10'>
        <img className='w-3/4' src='/images/Abune-Aregawi-12-1200x802.jpg' alt='' />
        <img className='w-3/4 mt-5' src='/images/aregawi-mural.jpg' alt='' />
      </div>
      <div id='right-div' className='w-1/2 my-10'>
        <h2 className='text-center georgia'>Our Faith</h2>
        <p className='text-2xl p-5 m-5 georgia '>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
  );
}
