
const Marquee = () => {
  const logos = ["Skincare Product","Cream","Moisturizer","Toner","Secret Alchemy","Vogue"]; 

  return (
    <div className="bg-white py-6 border-b border-t overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap gap-16 items-center">
        {logos.map((logo, i) => (<>
          <span key={i} className="text-3xl font-bold tracking-widest text-gray-900 opacity-70">{logo}</span>
          <span className="text-[#9e8ed3] text-3xl">✦</span>
          </>
        ))}
        {logos.map((logo, i) => (<>
          <span key={i+100} className="text-3xl font-bold text-gray-900 tracking-widest opacity-70">{logo}</span>
          <span className="text-[#9e8ed3] text-3xl">✦</span>
          </>
        ))}
      </div>
    </div>
  );
};

export default Marquee