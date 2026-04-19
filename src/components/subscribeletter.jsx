import React from 'react'

const Subscribeletter = () => {
  return (
    <>
    <div className="bg-[#fc9b9b] py-24 px-6 font-sans text-center">
  <h2 className="text-white text-4xl font-sans font-normal mb-5">
    Subscribe Newsletter
  </h2>

  <p className="text-white/80 text-[15px] font-semibold max-w-3xl mx-auto leading-7 mb-12">
    “Li Europan lingues es membres del sam familie. Lor separat existentie es un myth.
    Por scientie, musica, sport etc, litot.”
  </p>

  <div className="max-w-2xl mx-auto flex overflow-hidden rounded-xl">
    <input
      type="email"
      placeholder="Enter email address"
      className="flex-1 px-6 py-4 bg-[#f7b4b4] text-white placeholder:text-white/70 outline-none"
    />

    <button className="bg-[#7c67d9] text-white px-10 font-medium hover:bg-[#6b57c8] transition-colors">
      Subscribe
    </button>
  </div>
</div>
    </>
  )
}

export default Subscribeletter