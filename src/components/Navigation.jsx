import { Link, useLocation } from 'react-router-dom';

function Navigation() {
    //To Do: Current page should be highlighted on the navbar.
  const currentPage = useLocation().pathname;

  return (
    <nav className='w-full bg-blue-800'>
      <ul className='flex justify-end'>
        <li>
          <Link to='/'>ቤት / Home</Link>
        </li>
        <li>
          <Link to='/About'>ስለ / About</Link>
        </li>
        <li>
          <Link to='/Services'>አገልግሎቶች / Services</Link>
        </li>
        <li>
          <Link to='/Supporters'>ደጋፊዎች / Supporters</Link>
        </li>
        <li>
          <Link to='/Contact'>ተገናኝ / Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
