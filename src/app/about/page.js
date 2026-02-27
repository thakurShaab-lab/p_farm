import Image from "next/image"
import Link from "next/link"
import { FaGreaterThan } from "react-icons/fa";

export default function AboutPage() {
  return (
    <div className="w-full">

      <div className="relative w-full h-65 md:h-80">
        <Image
          src="https://wlproject.weblink4you.com/poultry_farming/uploaded_files/thumb_cache/thumb_1920_670_inner_bnr.jpg"
          alt="About Banner"
          fill
          priority
          className="object-cover"
        />
      </div>

      <div className="bg-[#dbe4d2] py-3">
        <div className="max-w-6xl mx-auto px-4 text-sm text-[#8cb528] flex items-center gap-2">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <span className="text-gray-500"><FaGreaterThan /></span>
          <span className="text-gray-700">About Us</span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">

        <h1 className="text-4xl font-bold text-[#0f4d63] mb-6">
          About Us
        </h1>

        <p className="leading-relaxed text-[15px] max-w-4xl">
          1Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
          in reprehenderit in voluptate velit esse cillum dolore eu fugiat
          nulla pariatur. Excepteur sint occaecat cupidatat non proident,
          sunt in culpa qui officia deserunt mollit anim id est laborum.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
          in reprehenderit in voluptate velit esse cillum dolore eu fugiat
          nulla pariatur.
        </p>
      </div>
    </div>
  )
}