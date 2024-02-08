import { Link } from 'react-router-dom';
import Transition from './transition';

function Intro() {
  return (
    <div className='container mx-auto text-center my-44 px-4'>
      <Link
        to={'/'}
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
      >
        Intro
      </Link>
      <h1 className='text-6xl'>Introooooo</h1>;
    </div>
  );
}
export default Transition(Intro);
