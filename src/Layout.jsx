import { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

const navLinkClass =
  'font-syne text-[clamp(28px,5.5vw,58px)] font-extrabold text-cream no-underline tracking-[-0.02em] uppercase transition-opacity duration-200 hover:opacity-50'

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false)
  const toggleMenu = () => setMenuOpen(p => !p)
  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      {/* Full-screen menu overlay */}
      <div
        className={`fixed inset-0 bg-wine z-[100] flex flex-col justify-center items-start p-[60px] transition-transform duration-500 ease-[cubic-bezier(0.77,0,0.175,1)] ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Close (X) button */}
        <button
          className="absolute top-9 right-10 bg-transparent border-none cursor-pointer flex flex-col gap-[5px] p-0"
          onClick={closeMenu}
        >
          <span className="block w-7 h-[2px] bg-cream rounded-sm rotate-45 translate-x-[5px] translate-y-[5px]" />
          <span className="block w-7 h-[2px] bg-cream rounded-sm -rotate-45 translate-x-[5px] -translate-y-[5px]" />
        </button>

        <nav className="flex flex-col gap-7">
          <Link to="/"        onClick={closeMenu} className={navLinkClass}>Home</Link>
          <Link to="/about"   onClick={closeMenu} className={navLinkClass}>About</Link>
          <Link to="/work"    onClick={closeMenu} className={navLinkClass}>Work</Link>
          <Link to="/contact" onClick={closeMenu} className={navLinkClass}>Contact</Link>
        </nav>

        <div className="absolute bottom-10 left-[60px] text-[11px] text-cream/35 tracking-[0.08em] uppercase">
          © 2026 Norell PR
        </div>
      </div>

      {/* Sticky top navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between py-[22px] px-8 bg-cream/92 backdrop-blur-md max-md:py-[18px] max-md:px-[14px]">
        <Link to="/" className="flex items-center gap-[9px] no-underline">
          <svg width="20" height="20" viewBox="0 0 100 100" fill="none">
            <path d="M50 2 L54 44 L96 50 L54 56 L50 98 L46 56 L4 50 L46 44 Z" fill="#510113" />
            <path d="M22 22 L46 47 L22 72" stroke="#510113" strokeWidth="3" fill="none" opacity="0.35" />
            <path d="M78 22 L54 47 L78 72" stroke="#510113" strokeWidth="3" fill="none" opacity="0.35" />
          </svg>
          <span className="font-syne text-[13px] font-bold text-wine tracking-[0.08em] uppercase">Norell PR</span>
        </Link>

        <button className="bg-transparent border-none cursor-pointer flex flex-col gap-[6px] p-1" onClick={toggleMenu}>
          <span className="block w-[26px] h-[2px] bg-wine rounded-[2px]" />
          <span className="block w-[26px] h-[2px] bg-wine rounded-[2px]" />
          <span className="block w-[26px] h-[2px] bg-wine rounded-[2px]" />
        </button>
      </header>

      {/* Page content + footer */}
      <div className="px-6 pb-6 max-md:px-3 max-md:pb-3">
        <Outlet />

        <footer className="section bg-dark border border-cream/8 rounded-[20px] py-[clamp(44px,6.5vh,76px)] px-[clamp(28px,4vw,56px)] grid grid-cols-2 gap-10 max-md:grid-cols-1 max-md:gap-7">
          {/* Navigation column */}
          <div>
            <div className="text-[9px] font-semibold tracking-[0.16em] uppercase text-cream/28 mb-4">Navigation</div>
            <div className="flex flex-col gap-[14px]">
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

          {/* Follow / contact column */}
          <div>
            <div className="text-[9px] font-semibold tracking-[0.16em] uppercase text-cream/28 mb-4">Follow</div>
            <div className="flex flex-col gap-3">
              <a href="#" className="text-[13px] text-cream no-underline opacity-50 transition-opacity hover:opacity-100 tracking-[0.02em]">
                Instagram — @thisisnorell
              </a>
              <a href="#" className="text-[13px] text-cream no-underline opacity-50 transition-opacity hover:opacity-100 tracking-[0.02em]">
                LinkedIn — Norell Public Relations
              </a>
              <span className="text-[10px] font-semibold tracking-[0.12em] uppercase text-cream/28 mt-[6px]">
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

          {/* Bottom bar */}
          <div className="mt-[52px] pt-[22px] border-t border-cream/7 flex items-center justify-between col-span-2 max-md:col-span-1">
            <span className="text-[10px] text-cream/20 tracking-[0.07em] uppercase">
              © 2026 Norell PR. All rights reserved.
            </span>
            <svg width="28" height="28" viewBox="0 0 100 100" fill="none" className="opacity-[0.12]">
              <path d="M50 2 L54 44 L96 50 L54 56 L50 98 L46 56 L4 50 L46 44 Z" fill="#eadfc4" />
            </svg>
          </div>
        </footer>
      </div>
    </>
  )
}
