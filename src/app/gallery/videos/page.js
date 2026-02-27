"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { FaGreaterThan, FaSearchPlus, FaArrowLeft, FaArrowRight, FaPlay, FaTimes } from "react-icons/fa"

export default function VideoPage() {
    const [isOpen, setIsOpen] = useState(false)

  const thumbnails = [
    "https://wlproject.weblink4you.com/poultry_farming/uploaded_files/thumb_cache/thumb_296_296_ph_img1.jpg",
    "https://wlproject.weblink4you.com/poultry_farming/uploaded_files/thumb_cache/thumb_296_296_ph_img21.jpg",
    "https://wlproject.weblink4you.com/poultry_farming/uploaded_files/thumb_cache/thumb_296_296_ph_img4.jpg",
    "https://wlproject.weblink4you.com/poultry_farming/uploaded_files/thumb_cache/thumb_296_296_ph_img8.jpg",
  ]

    return (
        <div className="w-full">

            <div className="relative w-full h-64 md:h-80">
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
                    <span className="text-gray-500">
                        <FaGreaterThan />
                    </span>
                    <span className="text-gray-700">Video Gallery</span>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 pt-10">
                <h1 className="text-3xl md:text-4xl font-bold text-[#054864] mb-4">
                    Video Gallery
                </h1>
            </div>

            <section className="relative">
                <div className="max-w-7xl mx-auto px-4">

                    <div className="mt-10">
                        <div className="flex items-center gap-4">
                            {thumbnails.map((thumb, index) => (
                                <div
                                    key={index}
                                    onClick={() => setIsOpen(true)}
                                    className="relative rounded-xl overflow-hidden group cursor-pointer"
                                >
                                    <Image
                                        src={thumb}
                                        alt="video-thumb"
                                        width={300}
                                        height={300}
                                        className="w-full h-64 object-cover group-hover:scale-105 transition duration-300"
                                    />

                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="bg-white p-4 rounded-full shadow-lg group-hover:scale-110 transition">
                                            <FaPlay className="text-black" fill="black" />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {isOpen && (
                    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 px-4">

                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-6 right-6 text-white hover:text-gray-300"
                        >
                            <FaTimes size={30} />
                        </button>

                        <div className="relative w-full max-w-5xl aspect-video">
                            <iframe
                                src={`${youtubeUrl}?autoplay=1`}
                                title="YouTube video"
                                allow="autoplay encrypted-media"
                                allowFullScreen
                                className="w-full h-full rounded-lg"
                            />
                        </div>
                    </div>
                )}
            </section>
        </div>
    )
}