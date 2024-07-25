import React, { Suspense } from 'react'
import NavbarItem from './NavbarItem'

const Navbar = () => {
  return (
    <Suspense fallback={<h1>Loading</h1>}>
      <div className='flex gap-10 justify-center p-3 font-bold bg-emerald-400 text-gray-700'>
        <NavbarItem title="Trending" param="fetchTrending"/>
        <NavbarItem title="Top Rated" param="fetchTopRated"/>
    </div>
    </Suspense>
  )
}

export default Navbar