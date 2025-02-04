import { assets } from '../../assets/assets'
import Image from 'next/image'
import React from 'react'

export default function Footer({ isDarkMode }) {
  return (
    <div className='mt-20'>
      <div className='text-center '>
        <Image src={isDarkMode ? assets.logo_dark : assets.logo} alt='' className='w-72 mx-auto mb-2' />
        <div className='w-max flex flex-col  items-center gap-2 mx-auto'>
          <div className='w-max flex items-center gap-2 mx-auto'>
              <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt='' className='w-6' />
              dwivedisomnath61@gmail.com
          </div>
          <p>Mob.No.: +91 9918196761</p>
        </div>
      </div>

      <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
        <p>© 2025 Somnath Dwivedi, All rights reserved.</p>
        <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
          <li><a target='_blank' href="https://github.com/Somnathdwivedi">Github</a></li>
          <li><a target='_blank' href="https://www.linkedin.com/in/somnath-dwivedi-489895298">Linkedin</a></li>
          <li><a target='_blank' href="https://leetcode.com/u/somnath--010/">Leetcode</a></li>
          <li><a target='_blank' href="https://www.geeksforgeeks.org/user/dwivedisoq01g/">GFG</a></li>
        </ul>
      </div>
    </div>
  )
}
