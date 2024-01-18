import Navigation from './Navigation';
function Header() {
  return (
    <header className='flex flex-wrap p-1 bg-blue-900'>
      <div id='church-logo' className='w-1/12 flex items-center'>
        <img className='w-full m-2' src='/images/church-logo.png' alt='' />
      </div>
      <div id='name-div' className='w-11/12 flex justify-center'>
        <h1 id='church-name'>Saint Aregawi Orthodox Tewahedo Church of San Diego</h1>
      </div>
      <Navigation />
    </header>
  );
}

export default Header;
