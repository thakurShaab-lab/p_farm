"use client"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { FaPhoneVolume } from "react-icons/fa6"

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50 h-18.5">
      <div className="relative max-w-7xl mx-auto px-6 flex items-center justify-center h-24 gap-50">
        <div className="absolute left-10 top-full -translate-y-24 z-50 rounded-full">
          <Link href="/">
            <Image
              src="https://wlproject.weblink4you.com/poultry_farming/assets/designer/themes/default/images/logo.jpg"
              alt="Logo"
              width={100}
              height={50}
              className="border-4 border-white rounded-full"
            />
          </Link>
        </div>

        <nav className="ml-44 hidden md:flex items-center gap-8 font-medium text-gray-700">
          <Link href="/" className="text-[#636363] text-[13px] font-bold hover:text-[#8cb528]">
            HOME
          </Link>

          <Link href="/about" className="text-[#636363] text-[13px] font-bold hover:text-[#8cb528]">
            ABOUT US
          </Link>

          <div
            className="relative"
          >
            <button className="text-[#636363] text-[13px] font-bold hover:text-[#8cb528]" onClick={() => setOpen(!open)}>
              GALLERY ▾
            </button>

            {open && (
              <div className="absolute top-8 left-0 bg-white shadow-lg w-44">
                <Link href="/gallery/photos" onClick={() => setOpen(false)} className="border-b block px-4 py-2 text-[#636363] text-[12px] font-bold hover:bg-[#8cb528] hover:text-white">
                  PHOTO GALLERY
                </Link>
                <Link href="/gallery/videos" onClick={() => setOpen(false)} className="block px-4 py-2 text-[#636363] text-[12px] font-bold hover:bg-[#8cb528] hover:text-white">
                  VIDEO GALLERY
                </Link>
              </div>
            )}
          </div>

          <Link href="/contact" className="text-[#636363] text-[13px] font-bold hover:text-[#8cb528]">
            CONTACT US
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-6">
          <div className="flex items-center gap-3">

            <div className="rounded-full">
              <FaPhoneVolume className="text-green-600 w-8.75 h-8.75" />
            </div>

            <div className="text-left leading-tight">
              <p className="text-xs text-black">CALL FOR HELP</p>
              <p className="text-black font-semibold text-sm">
                9910506665
              </p>
            </div>

          </div>

          <Link
            href="/login"
            className="py-2 px-4 border border-[#43a238] text-[#8cb528] rounded-md hover:bg-[#43a238] hover:text-white transition-all duration-300 text-sm font-bold"
          >
            LOGIN
          </Link>

          <Link
            href="/register"
            className="py-2 px-4 text-white rounded-md font-bold text-sm
                       bg-linear-to-r from-[#3f9d3b] to-[#8bb825]
                       hover:from-[#8bb825] hover:to-[#3f9d3b]
                       transition-all duration-300"
          >
            REGISTER
          </Link>
        </div>

      </div>
    </header>
  )
}