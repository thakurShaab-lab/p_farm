"use client"

import { useState } from "react"
import Image from "next/image"

export default function FeatureCard() {
  const [activeIndex, setActiveIndex] = useState(null)

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  const faqs = [
    {
      question: "Architectural and structural steel installation services",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id quam sed eros tincidunt luctus.",
    },
    {
      question: "What is Lorem Ipsum TEST????????",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      question: "What is Lorem Ipsum?",
      answer:
        "It has been the industry's standard dummy text ever since the 1500s.",
    },
  ]

  return (
    <div className="bg-[#e7e9e1] py-16 px-6">
      <div className="relative max-w-6xl mx-auto">
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          
          <div>
            <p className="uppercase text-sm tracking-widest text-gray-600 mb-2">
              We Always Help
            </p>

            <h1 className="text-4xl md:text-5xl font-bold text-[#0e4b5f] leading-tight mb-6">
              You've got questions,
              <br />
              we've got answers.
            </h1>

            <div className="flex gap-6">
              <div className="rounded-xl overflow-hidden w-56 h-56 relative">
                <Image
                  src="https://wlproject.weblink4you.com/poultry_farming/assets/designer/themes/default/images/qs_img.jpg"
                  alt="Eggs"
                  fill
                  className="object-cover"
                />
              </div>

              <p className="text-gray-700 leading-relaxed max-w-xs">
                Suspendisse finibus urna mauris, vitae consequat quam vel.
                Vestibulum leo ligula, vitae commodo nisl lorem ipsum is simply free text.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between p-4 text-left"
                >
                  <div className="flex items-center gap-3">
                    <div className="bg-green-600 text-white w-8 h-8 flex items-center justify-center rounded-full font-bold">
                      ?
                    </div>
                    <span className="font-medium text-gray-800">
                      {faq.question}
                    </span>
                  </div>

                  <span
                    className={`text-gray-500 text-xl transition-transform duration-300 ${
                      activeIndex === index ? "rotate-180" : ""
                    }`}
                  >
                    ⌄
                  </span>
                </button>

                <div
                  className={`px-4 transition-all duration-300 ease-in-out ${
                    activeIndex === index
                      ? "max-h-40 py-4 opacity-100"
                      : "max-h-0 opacity-0"
                  } overflow-hidden`}
                >
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute top-85 mt-20 z-50">
          <div className="bg-[#0e4b5f] text-white md:p-14 rounded-2xl p-10 shadow-lg overflow-hidden border-b-8 border-green-600">
            
            <div className="absolute left-[-25] top-[-20] z-50">
              <Image
                src="https://wlproject.weblink4you.com/poultry_farming/assets/designer/themes/default/images/rays.svg"
                alt="Rays"
                width={60}
                height={60}
              />
            </div>

            <div className="grid md:grid-cols-3 gap-8 items-center">
              
              <div className="md:col-span-2">
                <h2 className="text-3xl md:text-4xl font-bold text-[#8dc63f] mb-4">
                  Partner With Us, Request Poultry Quote
                </h2>

                <p className="text-gray-200 leading-relaxed max-w-2xl">
                  Aliquam viverra arcu. Donec aliquet blandit enim feugiat.
                  Suspendisse id quam sed eros tincidunt luctus sit amet eu nibh egestas tempus turpis.
                </p>
              </div>

              <div className="flex items-center gap-6 md:justify-end">
                <div className="text-right">
                  <p className="text-sm">Call Now</p>
                  <p className="text-xl font-bold">9910506665</p>
                </div>

                <button className="bg-[#8dc63f] text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition">
                  CONTACT US
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}