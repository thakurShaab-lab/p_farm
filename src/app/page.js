import Image from "next/image"
import banner from "../../public/banner.jpg"
import AboutSection from "@/components/about/AboutSection"
import GallerySection from "@/components/gallary/GallerySection"
import FaqSection from "@/components/faq/FaqSection"
import PoultrySection from "@/components/poultry/PoultrySection"

export default function Home() {
  return (
    <div>
      <section className="relative h-[85vh] flex items-center">
        <Image src={banner} alt="Farm" fill priority className="object-cover" />

        <div className="absolute inset-0 bg-linear-to-r from-[#0f4c5c]/90 via-[#0f4c5c]/70 to-transparent"></div>

        <div className="relative px-15 text-white">
          <p className="text-[#8cb528] font-semibold text-[19px] tracking-wide mb-4">
            ANAAM FERME 1
          </p>

          <h1 className="mt-2 md:text-6xl font-semibold mb-6">
            Poultry Performance & Productivity<br /> Challenges
          </h1>

          <div className="text-lg mb-8 text-gray-200 flex items-center gap-4">
            <div className="w-1 h-4 bg-[#8cb528]"></div>We make it a priority to offer flexible services to accommodate your needs
          </div>

          <button className="bg-linear-to-r from-[#3f9d3b] to-[#8bb825] 
                             px-6 py-3 rounded-md font-semibold 
                             hover:opacity-90 transition">
            GET A QUOTE NOW
          </button>
        </div>

      </section>

      <section className="relative z-20 -mt-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">
          <FeatureCard
            icon="https://wlproject.weblink4you.com/poultry_farming/assets/designer/themes/default/images/icon_feats1.svg"
            title="Organic Product"
          />
          <FeatureCard
            icon="https://wlproject.weblink4you.com/poultry_farming/assets/designer/themes/default/images/icon_feats2.svg"
            title="Certified Team Expert"
          />
          <FeatureCard
            icon="https://wlproject.weblink4you.com/poultry_farming/assets/designer/themes/default/images/icon_feats3.svg"
            title="Hygenic Farm"
          />
          <FeatureCard
            icon="https://wlproject.weblink4you.com/poultry_farming/assets/designer/themes/default/images/icon_feats4.svg"
            title="24/7 Premium Support"
          />
        </div>
      </section>

      <div className="-mt-26">
        <AboutSection />
      </div>
      <div>
        <GallerySection />
      </div>
      <div>
        <FaqSection />
      </div>
      <div>
        <PoultrySection />
      </div>
    </div>
  )
}


function FeatureCard({ icon, title }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-4 text-center hover:shadow-2xl hover:transition-all duration-300">

      <div className="w-16 h-16 mx-auto mb-6 
                      bg-linear-to-r from-[#3f9d3b] to-[#8bb825] 
                      text-white rounded-full 
                      flex items-center justify-center">
        <Image src={icon} alt={title} width={40} height={40} className="object-contain" />
      </div>

      <h3 className="text-xl font-semibold text-[#0f4c5c] mb-3">
        {title}
      </h3>

      <p className="text-gray-600 text-sm">
        We make it a priority to offer flexible services to accommodate
      </p>
    </div>
  )
}