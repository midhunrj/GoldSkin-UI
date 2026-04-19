import React from 'react'
import { FiFacebook, FiInstagram, FiTwitter, FiYoutube } from 'react-icons/fi';

const Footer = () => {
    const Sections = [
    {
      heading: "Sitemap",
      items: ["About us", "Services", "Blog", "Contact us"],
    },
    {
      heading: "Product",
      items: ["Powder", "Skin Gel", "Cosmetics", "Toning"],
    },
    {
      heading: "Help",
      items: ["Guide", "Tips & Trick", "FAQ"],
    },
  ];
  const icons=[
    <FiTwitter className='hover:fill-white hover:text-black'/>,
    <FiInstagram className='hover:fill-white hover:text-black'/>,
    <FiFacebook className='hover:fill-white hover:text-black'/>,
    <FiYoutube className='hover:fill-white hover:text-black'/>
  ]
  return (
    <>
    <div className='bg-black p-8'>
      <div className='grid grid-cols-4 py-6 px-2 gap-4'>
        {Sections.map((data,index)=>(
        <div key={index}>
            <h3 className='text-lg font-semibold text-white italic mb-4'>
               {data.heading}   
            </h3>
            <ul className='space-y-2'>
                {data.items.map((list,i)=>(
            <li key={i} className='text-sm text-gray-300 hover:text-white cursor-pointer'>{list}</li>
                ))}
        </ul>
        
      </div>
            ))}
            <div>
          <h4 className="font-semibold mb-4 text-lg">Subscribe</h4>
          <div className="flex rounded-full  overflow-hidden">
            <input
              type="email"
              placeholder="Enter email address"
              className="text-white bg-gray-600 px-5 py-4 flex-1 outline-none text-sm"
            />
            <button className="bg-pink-400 px-8 text-sm font-medium">Send</button>
          </div>

          <div className="flex gap-4 px-6 sm:px-4 mt-8">
            {icons.map((icon, i) => (
              <div key={i} className="w-9 h-9 text-gray-200 hover:  rounded-full flex items-center justify-center text-xl cursor-pointer hover:text-white transition-colors">
                {icon }
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="text-center text-gray-500 text-sm mt-16 border-t border-gray-800 pt-8">
        © 2023 All rights reserved. This is Your Company
      </div>
      </div>
    </>
  )
}

export default Footer