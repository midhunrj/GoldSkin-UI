
import { motion } from 'framer-motion';
import { FiStar } from 'react-icons/fi';

const Hero = () => {
  return (
    <section className="pt-28  w-full min-h-screen relative flex flex-col items-center bg-[#fee3e3] overflow-hidden">
        

      {/* <div className="absolute right-0 top-20 w-[600px] h-[600px] bg-gradient-to-br from-amber-200/40 to-pink-200/30 rounded-[50%] blur-3xl -z-10" /> */}

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className=" space-y-4 flex flex-col text-5xl font-bold ">
          <span> Happy Future </span>
          <span>Skincare Shop </span>
          </div>

          {/* <h1 className="text-6xl md:text-7xl font-semibold leading-tight tracking-tighter">
            Radiant skin,<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-yellow-600">naturally</span>
          </h1> */}
          <div 
              className=" px-4 py-2  relative"
              
            >
              <div className="grid grid-cols-2 h-80  gap-4">

                  <div  className="   h-72 w-full rounded-t-full shadow-2xl px-2 bg-white overflow-hidden">
                    <img 
                      src={`https://images.unsplash.com/photo-1506003094589-53954a26283f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGJlYXV0eXxlbnwwfHwwfHx8MA%3D%3D`} 
                      alt="product" 
                      className="w-full h-full rounded-t-full object-fill"
                    />
                  </div>
                  <p className='-rotate-90  py-2 origin-center text-5xl font-semibold '>Our Product</p>
            
              </div>
            


            <div className="absolute -top-6 -right-6 text-5xl">✦</div>
          </div>
           <div className='flex text-3xl px-4  font-semibold gap-4'> <span>Cream Light</span><span className='text-[#806ccb]'>$20.00</span></div>
         



          <div className="flex items-center justify-start   px-6 ">
            <div className='text-gray-600  flex gap-1 text-2xl'><FiStar />
  <FiStar />
  <FiStar />
  <FiStar />
  <FiStar /> </div>
           
          </div>

                    <div className="flex mb-6 gap-4">
            <p className=' text-gray-800'>Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc,.</p>
            <button className="py-8 w-full -rotate-12 border-2 border-black rounded-tr-full rounded-tl-[100%] rounded-br-[100%] rounded-bl-full text-sm md:text-lg font-medium">
              Shop Now
            </button>
          </div>
        </div>

<div className="relative">

          <div 
            className="absolute -inset-1 border-[2px] h-full border-black rounded-[45%_55%_40%_60%] scale-[1.02] "
            style={{ borderRadius: "45% 55% 40% 60% / 60% 45% 55% 40%" }}
          />

          <div 
            className="relative inset-0 bg-white/90 h-full backdrop-blur-xl p-2 shadow-2xl border-[2px] border-black "
            style={{ borderRadius: "45% 55% 40% 60% / 60% 45% 55% 40%" }}
          >

                 <div
                  
                  className="  rounded-2xl overflow-hidden  border-white/70 hover:scale-105 transition-transform"
                > 

                   <img
                    src={`https://picsum.photos/id/${65}/300/300`}
                    alt={`product `}
                   className="w-full h-full  object-cover overflow-hidden hover:scale-105 transition-transform duration-700" 
                   style={{ borderRadius: "45% 55% 40% 60% / 60% 45% 55% 40%" }} 
                    /> 
                 </div>

          </div>
          

          <div className="absolute -top-8 -left-8 text-5xl drop-shadow">✦</div>
          <div className="absolute -bottom-6 right-8 text-4xl drop-shadow">✦</div>
        </div>
{/*       
          <div className="absolute top-15 right-0 bg-white p-4 rounded-2xl shadow-xl">
            24K Gold Infused
          </div> */}
        </div>
      
    </section>
  );
};

export default Hero;