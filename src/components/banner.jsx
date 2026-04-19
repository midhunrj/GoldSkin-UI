// components/Hero.jsx
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="pt-24 min-h-screen relative flex flex-col items-center bg-[#fee3e3] overflow-hidden">
        
      {/* Background Blob / Shape */}
      <div className="absolute right-0 top-20 w-[600px] h-[600px] bg-gradient-to-br from-amber-200/40 to-pink-200/30 rounded-[50%] blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className=" space-y-4 flex flex-col text-5xl font-bold ">
          <span> Happy Future </span>
          <span>Skincare Shop </span>
          </div>

          <h1 className="text-6xl md:text-7xl font-semibold leading-tight tracking-tighter">
            Radiant skin,<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-yellow-600">naturally</span>
          </h1>

          <p className="text-xl text-gray-600 max-w-md">
            Premium skincare crafted with 24K gold and natural botanicals for visible glow.
          </p>

          <div className="flex gap-4">
            <button className="px-8 py-4 bg-black text-white rounded-full text-lg font-medium hover:scale-105 transition-transform">
              Shop Collection
            </button>
            <button className="px-8 py-4 border-2 border-black rounded-full text-lg font-medium">
              Watch Video
            </button>
          </div>

          <div className="flex items-center gap-8 pt-4">
            <div>4.9 ★★★★☆</div>
            <div>12k+ Happy Skins</div>
          </div>
        </div>

        
        {/* <div className="relative  border border-gray-200"
        style={{
                borderRadius: */}
                {/* //   index === 0
                     "55% 45% 60% 40% / 50% 60% 45% 55%"
                    // : index === 1
                    // ? "45% 55% 40% 60% / 60% 40% 55% 45%"
                    // : index === 2
                    // ? "50% 50% 45% 55% / 55% 45% 50% 60%"
                    // : "60% 40% 55% 45% / 45% 55% 40% 60%", */}
              {/* }}>
          <img 
            src="testi-img.png" 
            alt="GoldSkin Product" 
            className="w-full h-full border shadow-2xl"
            style={{
                borderRadius:
                   "55% 45% 60% 40% / 50% 60% 45% 55%"
                    
              }}
          /> */}
<div className="relative">
          {/* Outer Glow / Border Layer */}
          <div 
            className="absolute -inset-1 border-[2px] h-full border-black rounded-[45%_55%_40%_60%] scale-[1.02] "
            style={{ borderRadius: "45% 55% 40% 60% / 60% 45% 55% 40%" }}
          />

          {/* Main Big Blob */}
          <div 
            className="relative inset-0 bg-white/90 h-full backdrop-blur-xl p-2 shadow-2xl border-[2px] border-black "
            style={{ borderRadius: "45% 55% 40% 60% / 60% 45% 55% 40%" }}
          >
            {/* <div className="grid grid-cols-3 gap-4"> */}
            {/* <div className=''> */}
               {/* {Array.from({ length: 9 }).map((_, i) => (  */}
                 <div
                  //key={i}
                  className="  rounded-2xl overflow-hidden  border-white/70 hover:scale-105 transition-transform"
                > 
                {/* <img
                    src={`https://picsum.photos/id/${60 + i}/300/300`}
                    alt={`product ${i}`}
                    className="w-full h-full object-cover"
                  /> */}
                   <img
                    src={`https://picsum.photos/id/${65}/300/300`}
                    alt={`product `}
                   className="w-full h-full  object-cover overflow-hidden hover:scale-105 transition-transform duration-700" 
                   style={{ borderRadius: "45% 55% 40% 60% / 60% 45% 55% 40%" }} 
                    /> 
                 </div>
               {/* ))}  */}
            {/* </div> */}
          </div>

          {/* Sparkles on Big Blob */}
          <div className="absolute -top-8 -left-8 text-5xl drop-shadow">✦</div>
          <div className="absolute -bottom-6 right-8 text-4xl drop-shadow">✦</div>
        </div>
      
          <div className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl">
            24K Gold Infused
          </div>
        </div>
      
    </section>
  );
};

export default Hero;