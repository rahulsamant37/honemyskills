"use client"
import { AuthContext } from '@/context/AuthContext'
import Image from 'next/image'
import React, { useContext } from 'react'

function Header() {
    const {user} = useContext(AuthContext);
    return (
      <div className='p-2 shadow-sm flex justify-between items-center px-7 dark:bg-gray-900'>
          <Image src={'/logo.svg'} alt='logo'
            width={30}
            height={30}
          />

          {user?.picture && <Image src={user?.picture} alt='logo'
            width={30}
            height={30}
            className='rounded-full'
          />}
      </div>
    )
}

export default Header