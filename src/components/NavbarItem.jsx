"use client"
import Link from 'next/link'
import React from 'react'
import { useSearchParams } from 'next/navigation'

const NavbarItem = ({title, param}) => {
    const searchParams = useSearchParams()
    const genre = searchParams.get('genre')
  return (
    <div className='hover:text-emerald-100'>
        <Link className={`${genre === param ? 'underline underline-offset-8 decoration-4 decoration-emerald-900 rounded-lg' : ""}`} href={`/?genre=${param}`}>{title}</Link>
    </div>
  )
}

export default NavbarItem