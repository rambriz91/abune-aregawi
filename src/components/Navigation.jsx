import { Link, useLocation } from 'react-router-dom';

function Navigation() {
    //To Do: Current page should be highlighted on the navbar.
  const currentPage = useLocation().pathname;

  return (
    <nav>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/About'>About</Link>
        </li>
        <li>
          <Link to='/Services'>Services</Link>
        </li>
        <li>
          <Link to='/Supporters'>Supporters</Link>
        </li>
        <li>
          <Link to='/Contact'>Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
