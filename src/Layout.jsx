import { useState, useEffect } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'motion/react'
import LogoMark, { LogoFull } from './components/LogoMark'

const navLinkClass =
  'font-syne text-[clamp(28px,5.5vw,58px)] font-extrabold text-cream no-underline tracking-[-0.02em] uppercase transition-opacity duration-200 hover:opacity-50'

const menuNav = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.28 } },
}
const menuLink = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.38, ease: [0.25, 0.46, 0.45, 0.94] } },
}

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const toggleMenu = () => setMenuOpen(p => !p)
  const closeMenu = () => setMenuOpen(false)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <>
      {/* Full-screen menu overlay */}
      <div
        className={`fixed inset-0 bg-wine z-100 flex flex-col justify-center items-start p-15 transition-transform duration-500 ease-[cubic-bezier(0.77,0,0.175,1)] ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="absolute top-9 left-15">
          <LogoFull variant="dark" height={44} />
        </div>

        <button
          className="absolute top-9 right-10 bg-transparent border-none cursor-pointer flex flex-col gap-1.25 p-0"
          onClick={closeMenu}
        >
          <span className="block w-7 h-0.5 bg-cream rounded-sm rotate-45 translate-x-1.25 translate-y-1.25" />
          <span className="block w-7 h-0.5 bg-cream rounded-sm -rotate-45 translate-x-1.25 -translate-y-1.25" />
        </button>

        <motion.nav
          className="flex flex-col gap-7"
          variants={menuNav}
          initial="hidden"
          animate={menuOpen ? 'show' : 'hidden'}
        >
          {[['/', 'Home'], ['/about', 'About'], ['/work', 'Work'], ['/contact', 'Contact']].map(([to, label]) => (
            <motion.div key={to} variants={menuLink}>
              <Link to={to} onClick={closeMenu} className={navLinkClass}>{label}</Link>
            </motion.div>
          ))}
        </motion.nav>

        <div className="absolute bottom-10 left-15 text-[11px] text-cream/35 tracking-[0.08em] uppercase">
          © 2026 Norell PR
        </div>
      </div>

      {/* Sticky top navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between py-4 px-8 bg-cream/92 backdrop-blur-md max-md:py-3.5 max-md:px-3.5">
        <Link to="/" className="flex items-center no-underline">
          <LogoFull variant="light" height={88} />
        </Link>

        <button className="bg-transparent border-none cursor-pointer flex flex-col gap-1.5 p-1" onClick={toggleMenu}>
          <span className="block w-6.5 h-0.5 bg-wine rounded-xs" />
          <span className="block w-6.5 h-0.5 bg-wine rounded-xs" />
          <span className="block w-6.5 h-0.5 bg-wine rounded-xs" />
        </button>
      </header>

      {/* Page content + footer */}
      <div className="px-6 pb-6 max-md:px-3 max-md:pb-3">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>

        <footer className="section bg-dark border border-cream/8 rounded-[20px] py-[clamp(44px,6.5vh,76px)] px-[clamp(28px,4vw,56px)] grid grid-cols-2 gap-10 max-md:grid-cols-1 max-md:gap-7">
          <div>
            <div className="text-[9px] font-semibold tracking-[0.16em] uppercase text-cream/28 mb-4">Navigation</div>
            <div className="flex flex-col gap-3.5">
              {[['/', 'Home'], ['/about', 'About'], ['/work', 'Work'], ['/contact', 'Contact']].map(([to, label]) => (
                <Link
                  key={to}
                  to={to}
                  className="font-syne text-[clamp(14px,1.4vw,18px)] font-bold text-cream no-underline opacity-65 transition-opacity hover:opacity-100 uppercase tracking-[-0.01em]"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div className="text-[9px] font-semibold tracking-[0.16em] uppercase text-cream/28 mb-4">Follow</div>
            <div className="flex flex-col gap-3">
              <a href="https://www.instagram.com/thisisnorell?igsh=ZTV4Z3lkODgyYjV0" target="_blank" rel="noopener noreferrer" className="text-[13px] text-cream no-underline opacity-50 transition-opacity hover:opacity-100 tracking-[0.02em]">
                Instagram — @thisisnorell
              </a>
              <a href="https://www.linkedin.com/company/norell-public-relationss/" target="_blank" rel="noopener noreferrer" className="text-[13px] text-cream no-underline opacity-50 transition-opacity hover:opacity-100 tracking-[0.02em]">
                LinkedIn — Norell Public Relations
              </a>
              <span className="text-[10px] font-semibold tracking-[0.12em] uppercase text-cream/28 mt-1.5">
                Send us a mail
              </span>
              <a
                href="mailto:admin@norellpr.com"
                className="text-[13px] text-cream no-underline opacity-50 transition-opacity hover:opacity-100 tracking-[0.02em]"
              >
                admin@norellpr.com
              </a>
            </div>
          </div>

          <div className="mt-13 pt-5.5 border-t border-cream/7 flex items-center justify-between col-span-2 max-md:col-span-1">
            <span className="text-[10px] text-cream/20 tracking-[0.07em] uppercase">
              © 2026 Norell PR. All rights reserved.
            </span>
            <LogoFull variant="dark" height={44} opacity={0.35} />
          </div>
        </footer>
      </div>
    </>
  )
}
