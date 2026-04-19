
const Testimonials = () => {
  const reviews = [
    {
      name: "Dandi Sambu",
      text: "Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot...",
      color: "bg-white",
      textcolor: "text-yellow-500",
    },
    {
      name: "Siscka Khuly",
      text: "Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot....",
      color: "bg-[#fc9b9b] text-white",
      textcolor:"text-white"
    },
    {
      name: "Marisa Osewa",
      text: "Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot...",
      color: "bg-white",
      textcolor:"text-yellow-500"
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-[#fff0f5]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-5xl font-bold">Our Clients Say</h2>
          <div className="text-4xl">✦</div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <div
              key={i}
              className={`${review.color} ${review.textcolor} p-8 rounded-3xl shadow-xl`}
            >
              <div className="text-6xl text-gray-300 mb-6"><img src="empty-dp.jpeg" alt="testimonial-DP" className="rounded-full w-12 h-12 "/></div>
              <p className={`${review.color=="bg-white"?"text-gray-700":"text-white"} leading-relaxed mb-8`}>{review.text}</p>
              <div className="flex items-center justify-between">
                <p className="font-semibold">{review.name}</p>
                <div>★★★★★</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;