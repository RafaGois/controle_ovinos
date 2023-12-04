import Image from 'next/image';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div className="h-screen flex">
      <div className="h-full lg:w-2/3 md:w-1/2 bg-[url('../../public/ovelhas.jpg')]"></div>
      <div className="h-full w-1/3 md:w-1/2 sm:w-full bg-white">
        <p>Auth</p>
      </div>
    </div>
  );
}
