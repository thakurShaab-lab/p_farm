"use client"

import { useState } from "react"
import Image from "next/image"
import { FaPhoneAlt, FaPlay, FaTimes } from "react-icons/fa"

export default function PoultrySection() {
  const [isOpen, setIsOpen] = useState(false)

  const thumbnails = [
    "https://wlproject.weblink4you.com/poultry_farming/uploaded_files/thumb_cache/thumb_296_296_ph_img1.jpg",
    "https://wlproject.weblink4you.com/poultry_farming/uploaded_files/thumb_cache/thumb_296_296_ph_img21.jpg",
    "https://wlproject.weblink4you.com/poultry_farming/uploaded_files/thumb_cache/thumb_296_296_ph_img4.jpg",
    "https://wlproject.weblink4you.com/poultry_farming/uploaded_files/thumb_cache/thumb_296_296_ph_img8.jpg",
  ]

  const youtubeUrl =
    "https://www.youtube.com/embed/dQw4w9WgXcQ"

  return (
    <section className="min-h-130 relative">
      <div className="absolute top-40 left-95 max-w-6xl mx-auto px-4">

        <div className="mt-16">
          <div className="flex justify-between items-center mb-6">
            <div>
              <p className="text-sm uppercase tracking-wider text-green-600 font-medium">
                Video Gallery
              </p>
              <h3 className="text-3xl font-bold text-[#0f4d63] mt-2">
                Experience Poultry Farming In Motion
              </h3>
            </div>

            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition">
              VIEW MORE
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
  )
}