import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <main className='flex justify-center w-full'>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
