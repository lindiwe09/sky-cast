import React from 'react'
import { BsCloudSun } from "react-icons/bs";
import { ImLocation2 } from "react-icons/im";
import { GrLocationPin } from "react-icons/gr";
import SearchBox from './SearchBox';

type Props = {}

const Navbar = (props: Props) => {
  return (
    <nav className='shadow-sm sticky top-0 left-0 z-50 bg-white'>
        <div className='h-[80px] w-full flex justify-between items-center max-w-7xl px-3 mx-auto'>
          <p className='flex items-center justify-center gap-2 '>
            <h2 className='text-gray-900 text-3xl'>Weather</h2>
            <BsCloudSun className='text-3xl mt-1 mb-5 text-yellow-200'/>
          </p>
          {/* */}
          <section className='flex gap-2 items-center'>
          <ImLocation2 className='text-2xl text-gray-900 hover:opacity-80 cursor-pointer'/>
          <GrLocationPin className='text-3xl'/>
          <p className='text-slate-900/80 text-sm'>South Africa</p>
          <div>
            <SearchBox />
          </div>
          </section>
        </div>
    </nav>
  )
}

export default Navbar