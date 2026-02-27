"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { FaGreaterThan, FaSearchPlus, FaArrowLeft, FaArrowRight } from "react-icons/fa"

export default function PhotosPage() {
    const images = [
        "https://wlproject.weblink4you.com/poultry_farming/uploaded_files/thumb_cache/thumb_296_296_ph_img1.jpg",
        "https://wlproject.weblink4you.com/poultry_farming/uploaded_files/thumb_cache/thumb_296_296_ph_img21.jpg",
        "https://wlproject.weblink4you.com/poultry_farming/uploaded_files/thumb_cache/thumb_296_296_ph_img4.jpg",
        "https://wlproject.weblink4you.com/poultry_farming/uploaded_files/thumb_cache/thumb_296_296_ph_img8.jpg",
        "https://wlproject.weblink4you.com/poultry_farming/uploaded_files/thumb_cache/thumb_296_296_ph_img5.jpg",
        "https://wlproject.weblink4you.com/poultry_farming/uploaded_files/thumb_cache/thumb_296_296_ph_img7.jpg",
        "https://wlproject.weblink4you.com/poultry_farming/uploaded_files/thumb_cache/thumb_296_296_ph_img8-1.jpg",
        "https://wlproject.weblink4you.com/poultry_farming/uploaded_files/thumb_cache/thumb_296_296_ph_img3.jpg",
    ]

    const [selectedIndex, setSelectedIndex] = useState(null)

    const nextImage = () => {
        setSelectedIndex((prev) =>
            prev === images.length - 1 ? 0 : prev + 1
        )
    }

    const prevImage = () => {
        setSelectedIndex((prev) =>
            prev === 0 ? images.length - 1 : prev - 1
        )
    }

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
                    <span className="text-gray-700">Image Gallery</span>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 pt-10">
                <h1 className="text-3xl md:text-4xl font-bold text-[#054864] mb-4">
                    Image Gallery
                </h1>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-4 gap-6">
                {images.map((img, index) => (
                    <div
                        key={index}
                        className="relative overflow-hidden rounded-2xl group"
                    >
                        <Image
                            src={img}
                            alt="Gallery"
                            width={400}
                            height={400}
                            className="w-full h-64 object-cover transition duration-500 group-hover:scale-110"
                        />

                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="absolute inset-0 bg-black/60 scale-0 group-hover:scale-100 transition-transform duration-500 origin-center"></div>

                            <div
                                onClick={() => setSelectedIndex(index)}
                                className="relative z-10 opacity-0 group-hover:opacity-100 transition duration-300 bg-[#8bb825] border border-white rounded-full p-3 cursor-pointer"
                            >
                                <FaSearchPlus className="text-white text-[22px]" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {selectedIndex !== null && (
                <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">
                    <button
                        onClick={() => setSelectedIndex(null)}
                        className="absolute top-6 right-6 text-white text-2xl"
                    >
                        ✕
                    </button>

                    <button
                        onClick={prevImage}
                        className="absolute left-6 text-white text-xl p-2"
                    >
                        <FaArrowLeft />
                    </button>

                    <Image
                        src={images[selectedIndex]}
                        alt="Preview"
                        width={800}
                        height={800}
                        className="rounded-xl object-contain max-h-[80vh]"
                    />

                    <button
                        onClick={nextImage}
                        className="absolute right-6 text-white text-xl p-2"
                    >
                        <FaArrowRight />
                    </button>
                </div>
            )}
        </div>
    )
}