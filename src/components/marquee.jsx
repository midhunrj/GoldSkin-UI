import {motion} from "framer-motion";

const Marquee = () => {
  const logos = ["Skincare Product","Cream","Moisturizer","Toner","Secret Alchemy","Vogue"]; 

  return (
    <div className="bg-white py-6 border-b border-t overflow-hidden">
      <motion.div
        className="flex whitespace-nowrap gap-8 items-center"
        animate={{
          x: [0, -1920], 
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
      >
        {[...logos, ...logos].map((logo, i) => (
          <div key={i} className="flex items-center gap-16">
            <span className="text-3xl font-bold tracking-widest text-gray-900 opacity-70">
              {logo}
            </span>
            <span className="text-[#9e8ed3] text-3xl">✦</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee