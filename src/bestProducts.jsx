// components/BestProducts.jsx
const BestProducts = () => {
  const products = [
    {
      category: "Sunscreen",
      price: "$55.00",
      color: "from-pink-100 to-purple-100",
    },
    {
      category: "Anti-Aging",
      price: "$75.00",
      color: "from-purple-100 to-pink-100",
    },
    {
      category: "Cleansers",
      price: "$10.00",
      color: "from-pink-100 to-rose-100",
    },
    {
      category: "Moisturizers",
      price: "$15.00",
      color: "from-rose-100 to-purple-100",
    },
  ];

  return (
    <section className="py-20 bg-[#fee3e3] relative">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="flex items-center gap-4">
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900">
                Our Best Skin Product
              </h2>
              <span className="text-5xl">✦</span>
            </div>
            <p className="mt-4 text-gray-600 max-w-md text-lg">
              Li Europan lingues es membres del sam familie. Lor separat existentie es un myth.
            </p>
          </div>
        </div>


        <div className="grid md:grid-cols-4 gap-6 relative">
          {products.map((product, index) => (
            <div
              key={index}
              className={`relative bg-white p-6 rounded-t-full rounded-s-4xl rounded-b-4xl shadow-4xl hover:shadow-2xl transition-all duration-300 overflow-hidden `}
              style={{
    marginTop: `${(3-index) * 40}px`,
  }}
            >

              <div className="grid grid-cols-2 gap-3 mb-6">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div
                    key={i}
                    className="aspect-square bg-gray-100 rounded-2xl overflow-hidden border border-white"
                  >
                    <img
                      src={`https://picsum.photos/id/${180 + index * 10 + i}/300/300`}
                      alt="product"
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>

              <div className="text-center">
                <p className="text-xl font-medium text-gray-800">{product.category}</p>
                <p className="text-3xl font-bold text-purple-600 mt-1">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-end gap-4 mt-10">
          <button className="w-12 h-12 border-2 border-gray-400 rounded-full flex items-center justify-center text-2xl hover:border-purple-600 hover:text-purple-600 transition-all">
            ←
          </button>
          <button className="w-12 h-12 border-2 border-gray-400 rounded-full flex items-center justify-center text-2xl hover:border-purple-600 hover:text-purple-600 transition-all">
            →
          </button>
        </div>
      </div>
    </section>
  );
};

export default BestProducts;