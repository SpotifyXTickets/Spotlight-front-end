import '@/styles/components/_hamburger-menu.scss'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

import Logo from '../assets/spotlight-logo.svg'

const path01Variants = {
  open: { d: 'M3.06061 2.99999L21.0606 21' },
  closed: { d: 'M0 9.5L24 9.5' },
}

const path02Variants = {
  open: { d: 'M3.00006 21.0607L21 3.06064' },
  moving: { d: 'M0 14.5L24 14.5' },
  closed: { d: 'M10 14.5L24 14.5' },
}

const navItems = [
  { id: 1, title: 'Home', link: '/home-page' },
  { id: 2, title: 'Recommended Events', link: '/recommendations' },
  { id: 3, title: 'Recommended Artists' },
  { id: 4, title: 'Favourite Events', link: '/favourite-events' },
  { id: 5, title: 'Settings', link: '/settings' },
  { id: 6, title: 'Log Out' },
]

export default function HamburgerMenu() {
  const [animation, setAnimation] = useState('closed')
  const onClick = () => {
    setAnimation('moving')
    setTimeout(() => {
      setAnimation(animation === 'closed' ? 'open' : 'closed')
    }, 200)
  }

  return (
    <>
      <AnimatePresence>
        {animation === 'open' && (
          <motion.nav
            className="hamburger-menu"
            key="navmenu"
            initial={{ opacity: 0, x: 175, y: -175 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, x: 175, y: -175 }}
            transition={{
              duration: 0.25,
              velocity: 100,
            }}
          >
            <Image
              className="hamburger-menu__logo"
              src={Logo}
              alt="Museve Logo"
            />

            {navItems.map((item) => (
              <Link
                href={`${item.link}`}
                key={item.id}
                className="hamburger-menu__item"
              >
                {item.title}
              </Link>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>

      <button className="hamburger-menu__button" onClick={onClick}>
        <svg width="24" height="24" viewBox="0 0 24 24">
          <motion.path
            strokeWidth="1.75"
            stroke="#FFFFFF"
            animate={animation}
            variants={path01Variants}
          />
          <motion.path
            strokeWidth="1.75"
            stroke="#FFFFFF"
            animate={animation}
            variants={path02Variants}
          />
        </svg>
      </button>
    </>
  )
}
