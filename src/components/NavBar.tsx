import '@/styles/components/_navbar.scss'
import Image from 'next/image'
import Logo from '../assets/spotlight-logo.svg'
import HamburgerMenu from '@/components/HamburgerMenu'

export default function NavBar() {
  return (
    <nav className="navbar">
      <a href="">
        <Image className="navbar__logo" src={Logo} alt="Museve Logo" />
      </a>
      <HamburgerMenu />
    </nav>
  )
}
