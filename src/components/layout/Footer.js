"use client"
import Image from "next/image"
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaPhoneAlt
} from "react-icons/fa"

import { MdEmail } from "react-icons/md"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="mt-20">

      <div className="bg-linear-to-r from-[#3f9d3b] to-[#8bb825] text-white">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4">

          <div className="flex items-center gap-4">
            <div>
              <p className="font-semibold text-[16px]">Download Our App,</p>
              <span className="text-[14px]">Farm Fresh Anywhere</span>
            </div>

            <Image
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="App Store"
              width={120}
              height={40}
            />

            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Google Play"
              width={135}
              height={40}
            />
          </div>

          <div className="flex items-center gap-3">
            <span className="font-medium">Follow us on</span>
            <div className="flex gap-2">
              <SocialIcon><FaFacebookF size={14} /></SocialIcon>
              <SocialIcon><FaTwitter size={14} /></SocialIcon>
              <SocialIcon><FaInstagram size={14} /></SocialIcon>
              <SocialIcon><FaLinkedinIn size={14} /></SocialIcon>
              <SocialIcon><FaYoutube size={14} /></SocialIcon>
            </div>
          </div>

        </div>
      </div>

      <div className="bg-[#054864] text-white">
        <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-10">

          <div>
            <Image
              src="https://wlproject.weblink4you.com/poultry_farming/assets/designer/themes/default/images/ft_logo.jpg"
              alt="Logo"
              width={100}
              height={100}
              className="mb-4"
            />
            <p className="text-sm mt-4">
              Copyright © {new Date().getFullYear()}, Poultry Farm.
              <br />
              All rights reserved.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2 text-[16px]">Contact Details</h3>
            <p className="font-bold text-[14px]">Anaam Ferme</p>
            <p className="text-[14px]">Algeria Algiers hydra</p>

            <div className="flex items-center gap-2 mt-4 text-[14px]">
              <MdEmail size={16} className="text-[#8bb825]" />
              <a href="mailto:info@poweratlas.com">info@poweratlas.com</a>
            </div>

            <div className="flex items-center gap-2 mt-2 text-[14px]">
              <FaPhoneAlt size={16} className="text-[#8bb825]" />
              <a href="tel:+9910506665">9910506665</a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-[16px]">Quick Links</h3>
            <FooterLink href="/" className='text-[14px]'>Home</FooterLink>
            <FooterLink href="/about" className='text-[14px]'>About Us</FooterLink>
            <FooterLink href="/gallery/photos" className='text-[14px]'>Image Gallery</FooterLink>
            <FooterLink href="/gallery/videos" className='text-[14px]'>Video Gallery</FooterLink>
            <FooterLink href="/contact" className='text-[14px]'>Contact Us</FooterLink>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-[16px]">Info Links</h3>
            <FooterLink href="#" className='text-[14px]'>Terms and condition</FooterLink>
            <FooterLink href="#" className='text-[14px]'>Privacy Policy</FooterLink>
            <FooterLink href="#" className='text-[14px]'>Legal Disclaimer</FooterLink>
            <FooterLink href="#" className='text-[14px]'>Sitemap</FooterLink>
          </div>

        </div>

        <div className="border-t border-white/20 py-4 text-center text-sm">
          Developed and Managed by{" "}
          <span className="underline cursor-pointer">
            WeblinkIndia.NET
          </span>
        </div>

      </div>
    </footer>
  )
}

function FooterLink({ href, children }) {
  return (
    <Link
      href={href}
      className="block mb-2 hover:text-[#8bb825] transition"
    >
      {children}
    </Link>
  )
}

function SocialIcon({ children }) {
  return (
    <div className="bg-white text-[#0f4c5c] p-2 rounded-md cursor-pointer hover:scale-110 transition">
      {children}
    </div>
  )
}