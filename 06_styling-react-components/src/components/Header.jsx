/** @format */

import logo from '../assets/logo.png';

export default function Header() {
  return (
    <header className='flex flex-col items-center justify-center mt-4 mb-4 md:mb-16'>
      <img
        src={logo}
        className='object-contain mb-4 w-44 h-44'
        alt='A canvas'
      />
      <h1 className='text-4xl font-bold text-center uppercase tracking-wider font-pacifico m-0 text-red md:text-4xl'>
        ReactArt
      </h1>
      <p className='text-center m-0 text-grey'>
        A community of artists and art-lovers.
      </p>
    </header>
  );
}
