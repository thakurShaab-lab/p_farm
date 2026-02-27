"use client"
import { useEffect, useState } from "react"
import Image from "next/image"
import { FaSearchPlus, FaArrowLeft, FaArrowRight } from "react-icons/fa"

export default function GallerySection() {

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

    const [count1, setCount1] = useState(1)
    const [count2, setCount2] = useState(1)
    const [count3, setCount3] = useState(1)

    useEffect(() => {
        animateCount(180, setCount1)
        animateCount(10000, setCount2)
        animateCount(100, setCount3)
    }, [])

    const animateCount = (target, setter) => {
        let start = 1
        const duration = 2000
        const increment = target / (duration / 16)

        const counter = setInterval(() => {
            start += increment
            if (start >= target) {
                setter(target)
                clearInterval(counter)
            } else {
                setter(Math.floor(start))
            }
        }, 16)
    }

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
        <section className="bg-white py-20">

            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8 mb-20">
                <CounterCard number={count1} title="Completed" />
                <CounterCard number={count2} title="Satisfied Customers" />
                <CounterCard number={count3} title="Success Rates" suffix="%" />
            </div>

            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center mb-10">
                <div>
                    <p className="text-[#8bb825] font-semibold uppercase">
                        Image Gallery
                    </p>
                    <h2 className="text-4xl font-bold text-[#0f4c5c]">
                        Life Inside Our Poultry Farm
                    </h2>
                </div>

                <button className="bg-linear-to-r from-[#3f9d3b] to-[#8bb825]
                           text-white px-6 py-3 rounded-md">
                    VIEW MORE
                </button>
            </div>

            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-6">

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
                            className="w-full h-70 object-cover 
                         transition duration-500 
                         group-hover:scale-110"
                        />

                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className=" absolute inset-0 bg-black/60 scale-0 group-hover:scale-100 transition-transform duration-700 ease-in-out origin-center"></div>
                            <div onClick={() => setSelectedIndex(index)} className="relative z-10 opacity-0 group-hover:opacity-100 transition duration-300 bg-[#8bb825] border border-white rounded-full p-3 cursor-pointer">
                                <FaSearchPlus className="text-white text-[25px]" />
                            </div>
                        </div>
                    </div>
                ))}

            </div>

            {selectedIndex !== null && (
                <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">
                    <button onClick={() => setSelectedIndex(null)} className="absolute top-6 right-6 text-white text-2xl">
                        ✕
                    </button>
                    <button onClick={prevImage} className="absolute left-6 text-white text-[15px] p-2">
                        <FaArrowLeft />
                    </button>
                    <Image
                        src={images[selectedIndex]}
                        alt="Preview"
                        width={400}
                        height={400}
                        className="rounded-xl object-contain max-h-[80vh]"
                    />
                    <button onClick={nextImage} className="absolute right-6 text-white text-[15px] p-2">
                        <FaArrowRight />
                    </button>

                </div>
            )}

        </section>
    )
}

function CounterCard({ number, title, suffix = "" }) {
    return (
        <div className="bg-[#f3f4ec] rounded-3xl p-10 text-center">
            <h3 className="text-5xl font-bold text-[#8bb825] mb-4">
                {number}{suffix}
            </h3>
            <p className="text-lg font-semibold text-[#0f4c5c]">
                {title}
            </p>
            <p className="text-gray-600 mt-2">
                Nulla viverra tortor eu nulla pulvinar dignissim.
            </p>
        </div>
    )
}