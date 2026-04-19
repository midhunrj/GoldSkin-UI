import { GiSoap, GiSyringe, GiWaterDrop } from 'react-icons/gi'

const ServiceCare = () => {
  const services = [
    {
      icon: <GiSoap className="text-4xl" />,
      title: "Facial Wash",
      desc: "Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc.",
    },
    {
      icon: <GiSyringe className="text-4xl" />,
      title: "Microneedling",
      desc: "Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc.",
    },
    {
      icon: <GiWaterDrop className="text-4xl" />,
      title: "HydraFacial",
      desc: "Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc.",
    },
  ];

  return (
    <section className="py-20 bg-[#fc9b9b] text-center relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-5xl font-bold mb-16">Our Service Skincare</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl p-10 shadow-lg hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-20 h-20 mx-auto mb-6 bg-[#806ccb] text-white rounded-2xl flex items-center justify-center text-4xl">
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCare;