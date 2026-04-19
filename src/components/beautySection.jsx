
const BeautySection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-[#fdf7f4] via-[#fff0f5] to-[#f8e8f0] relative overflow-hidden">
                 <div className="flex justify-between items-center px-4 space-y-8 gap-6 text-center md:text-left">
            <h2 className="text-6xl px-8 font-bold  leading-none text-gray-900">
              Every Woman<br />Deserves Beauty
            </h2>
            <p className="text-gray-700    max-w-xl ">Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. 
                Por scientie, musica, sport etc, litot Europa usa li sam vocabular</p>
            </div>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          

          <div className="md:col-span-5 relative">
            <div 
              className="bg-white p-4 rounded-t-full shadow-xl relative"
              
            >
              <div className="grid grid-cols-1  gap-4">

                  <div  className="  h-full w-full rounded-2xl overflow-hidden">
                    <img 
                      src={`https://images.unsplash.com/photo-1506003094589-53954a26283f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGJlYXV0eXxlbnwwfHwwfHx8MA%3D%3D`} 
                      alt="product" 
                      className="w-full h-full rounded-t-full object-fill"
                    />
                  </div>

              </div>
            </div>


            <div className="absolute -top-6 -right-6 text-5xl">✦</div>
          </div>


          <div className="md:col-span-4 space-y-8 text-center md:text-left">

            <div>
              <h3 className="text-3xl font-semibold mb-4">
                The Simplified Skincare Routine Fits Perfectly
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. 
                Por scientie, musica, sport etc, litot Europa usa li sam vocabular.
              </p>
            </div>

            <div className="text-3xl font-medium">
              Get to Your Goals,<br />
              <span className="font-bold">Fast Skincare</span>
            </div>
          </div>


          <div className="md:col-span-3 space-y-10">
            

            <div className="relative mx-auto md:ml-auto w-52">
              <div 
                className="bg-white border-2 border-purple-200 px-10 py-8 text-center rounded-full shadow-lg"
              >
                <p className="text-sm font-medium tracking-widest">UP TO DISCOUNT</p>
                <p className="text-6xl font-bold text-purple-600">25%</p>
              </div>
              <div className="absolute -top-3 -right-3 text-4xl">✦</div>
            </div>


            <div className="relative mx-auto md:ml-auto">
              <div 
                className="bg-white rounded-full p-4 w-80 h-80 shadow-2xl"
                
              >
                <div className="grid grid-cols-1 gap-3 h-full">

                    <div  className="  rounded-xl overflow-hidden border border-white">
                      <img 
                        src={`https://images.unsplash.com/photo-1598528738936-c50861cc75a9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YmVhdXR5JTIwcHJvZHVjdHN8ZW58MHx8MHx8fDA%3D`} 
                        alt="product" 
                        className="w-full h-full rounded-full object-cover"
                      />
                    </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="absolute bottom-12 left-12 text-5xl opacity-70">✦</div>
    </section>
  );
};

export default BeautySection;