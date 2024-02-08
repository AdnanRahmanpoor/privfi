import { Link } from 'react-router-dom';
import Transition from './transition';

function Home() {
  return (
    <div className='container mx-auto px-4'>
      <div className='flex flex-col md:flex-row items-center md:justify-evenly h-screen px-10 md:px-2'>
        {/* Left */}
        <div className='flex flex-col items-start w-full mt-4 md:mt-0 md:w-1/2'>
          <h1 className='text-3xl font-bold mb-4'>
            Demystifying Privacy and DeFi: Learn, Explore, and Take Control.
          </h1>
          <p className='mb-4'>
            Navigate the exciting world of decentralized finance (DeFi) with
            confidence. Understand the key privacy considerations and empower
            yourself to make informed decisions. Explore innovative DeFi
            applications and unlock new financial possibilities.
          </p>
          <Link
            to={'./Intro'}
            className='bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold py-2 px-10 rounded'
          >
            Explore Now
          </Link>
        </div>
        {/* Right */}
        <div className='mt-4'>
          <img src='./privacy-shield.png' alt='' width={384} height={384} />
        </div>
      </div>
    </div>
  );
}
export default Transition(Home);
