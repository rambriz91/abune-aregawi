import { Link, useLocation } from 'react-router-dom';

function Navigation() {
    //To Do: Current page should be highlighted on the navbar.
  const currentPage = useLocation().pathname;

  return (
    <nav className='w-full bg-blue-800'>
      <ul className='flex justify-end georgia'>
        <li>
          <Link to='/' className={currentPage === '/' ? 'glow' : ''}>ቤት / Home</Link>
        </li>
        <li>
          <Link to='/About' className={currentPage === '/About' ? 'glow' : ''}>ስለ / About</Link>
        </li>
        <li>
          <Link to='/Services' className={currentPage === '/Services' ? 'glow' : ''}>አገልግሎቶች / Services</Link>
        </li>
        <li><Link to= '/Event' className={currentPage === '/Event' ? 'glow': ''}>ክስተት / Events</Link> </li>
        <li>
          <Link to='/Supporters' className={currentPage === '/Supporters' ? 'glow' : ''}>ደጋፊዎች / Supporters</Link>
        </li>
        <li>
          <Link to='/Contact' className={currentPage === '/Contact' ? 'glow' : ''}>ተገናኝ / Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
