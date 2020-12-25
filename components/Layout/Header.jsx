import Link from "next/link";
import { MenuIcon } from '../../src/icons'
import { useState } from 'react'

const pages = [
    'home',
    'services',
    'team',
    'reviews',
    'contact'
]

const Header = () => {
  const [open, setOpen] = useState(false)

  const onMenuClick = () => {
    console.log('click')
    setOpen( o => !o )
  }
  return (
    <div className="absolute top-0 w-full flex text-white font-medium p-4 xs:p-8 shade pointer-events-none">
      <div className="flex-grow font-bold pointer-events-auto"><Link href="/">IC Auto Tek</Link></div>
      <nav className="pointer-events-auto">
        <div onClick={onMenuClick}>
            <MenuIcon className="w-6 h-6 sm:hidden cursor-pointer block" open={open}/>
            <ul className={open ? "fixed top-0 left-0 w-screen h-screen bg-indigo-900 pointer-events-auto flex flex-col" : 'hidden'}>
            {
                pages.map( page => {
                    return (
                        <MenuItem page={page} key={page} className="flex-grow w-full text-center"/>
                    )
                })
            }
          </ul>
        </div>
        
        <ul className="hidden sm:flex pointer-events-auto">
          {
              pages.map( page => {
                  return (
                      <MenuItem page={page} key={page}/>
                  )
              })
          }
        </ul>
      </nav>
    </div>
  );
};

const MenuItem = ({ page = 'home', className }) => {
    const link = page == 'home' ? '' : page

    return <li className={className ? className : "mx-2"}><Link href={'/' + link}>{page}</Link></li>
}

export default Header;
