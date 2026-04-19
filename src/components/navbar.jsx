
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';        

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#fee3e3] backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8  rounded-full" />
          <span className="text-2xl font-semibold text-[#8671cc] tracking-tight">GoldSkin</span>
        </div>

        <div className="hidden md:flex items-center gap-10 text-sm font-medium">
          <a href="#Home" className="hover:text-[#8671cc] transition-colors hover:underline decoration-[#8671cc] decoration-4 decoration-solid underline-offset-8">Home</a>
          <a href="#About-Us" className="hover:text-[#8671cc] transition-colors hover:underline decoration-[#8671cc] decoration-4 decoration-solid underline-offset-8">About Us</a>
          <a href="#Services" className="hover:text-[#8671cc] transition-colors hover:underline decoration-[#8671cc] decoration-4 decoration-solid underline-offset-8">Services</a>
          <a href="#Contact-Us" className="hover:text-[#8671cc] hover:underline decoration-[#8671cc] decoration-4 decoration-solid underline-offset-8 transition-colors">Contact Us</a>
        </div>

        <div className="flex items-center gap-4">
          <button className="px-6 py-2.5 border border-gold text-gold rounded-full bg-[#fc9b9b] text-white/80 hover:bg-gold hover:text-white transition-all text-sm font-medium">
            Contact US
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-2xl">
            {isOpen ? <FiX /> : <FiMenu/>}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t py-6 px-6 space-y-6 text-center">
          {/* mobile links */}
        </div>
      )}
    </nav>
  );
};

export default Navbar;