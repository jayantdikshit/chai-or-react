import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-7xl">
      <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
        <div className="relative z-10 max-w-screen-xl px-4 pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
          <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
            <h2 className="text-4xl font-bold sm:text-5xl">
              React Developer
              <span className="hidden sm:block text-4xl">"Bring Your Ideas to Life with Fast, Modern, and Interactive React Websites!"</span>
            </h2>

            <Link
              className="inline-flex text-white items-center px-6 py-3 font-medium bg-orange-700 rounded-lg hover:opacity-75"
              to="/download"
            >
              <svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="white"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M12 3v12m0 0l-4-4m4 4l4-4M4 19h16"
    stroke="white"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    fill="none"
  />
</svg>

              &nbsp; Demo Website
            </Link>
          </div>
        </div>

        <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full">
        <img
  className="w-96"
  src="https://media.licdn.com/dms/image/v2/D5635AQHmZe44SYb0Hw/profile-framedphoto-shrink_400_400/B56ZbfO_ZaHgAc-/0/1747501971401?e=1759582800&v=beta&t=Rz1Got4dSngduVU3tzX7-Qhqzk71NKOlD0SwUeuCFi8"
  alt="Remote Control"
/>

        </div>
      </aside>

      <div className="grid place-items-center sm:mt-20">
        <img
          className="sm:w-96 w-48"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMKEOcBxdChLlH9V9_yIVUmu61093Vwg2HLg&s"
          alt="Coder"
        />
      </div>

      <h1 className="text-center text-2xl sm:text-5xl py-10 font-medium">
        Jayant Kumar Dikshit
      </h1>
    </div>
  );
}
