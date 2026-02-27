"use client"
import Image from "next/image"

export default function AboutSection() {
    return (
        <section className="bg-[#eff2e8] pt-40">
            <div className="max-w-7xl mx-auto px-6 pb-10 grid lg:grid-cols-2 gap-12 items-center">

                <div>
                    <p className="text-[#8bb825] font-semibold mb-3 uppercase tracking-wider">
                        About Company
                    </p>

                    <h2 className="text-4xl lg:text-5xl font-bold text-[#0f4c5c] mb-6 leading-tight">
                        Hatch to Harvest for <br /> Best Poultry Products
                    </h2>

                    <p className="text-gray-600 leading-relaxed mb-8">
                        1Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor...
                    </p>

                    <button className="px-8 py-3 text-white rounded-md 
                             bg-linear-to-r from-[#3f9d3b] to-[#8bb825]
                             hover:from-[#8bb825] hover:to-[#3f9d3b]
                             transition duration-300">
                        READ MORE
                    </button>
                </div>

                <div className="flex justify-center">

                    <div className="w-72 h-72 bg-[#8bb825] rounded-full -z-10"></div>

                    <Image
                        src="https://wlproject.weblink4you.com/poultry_farming/assets/designer/themes/default/images/wlcm_img.jpg"
                        alt="Poultry Farm"
                        width={450}
                        height={550}
                        className="rounded-3xl"
                    />

                </div>
            </div>
        </section>
    )
}