
const BestProducts = () => {
  const products = [
    {
      category: "Sunscreen",
      price: "$55.00",
      color: "from-pink-100 to-purple-100",
      img:"https://images.unsplash.com/photo-1594527964562-32ed6eb11709?q=80&w=997&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      category: "Anti-Aging",
      price: "$75.00",
      color: "from-purple-100 to-pink-100",
      img:"https://images.unsplash.com/photo-1708477199100-e4d5f56a8eb2?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      category: "Cleansers",
      price: "$10.00",
      color: "from-pink-100 to-rose-100",
      img:"https://images.unsplash.com/photo-1649073005971-37babef31983?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2xlYW5zZXJzfGVufDB8fDB8fHww"
    },
    {
      category: "Moisturizers",
      price: "$15.00",
      color: "from-rose-100 to-purple-100",
      img:"https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW9pc3R1cmlzZXJ8ZW58MHx8MHx8fDA%3D"
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
              className={`relative  p-8 rounded-t-full rounded-s-4xl rounded-b-4xl shadow-4xl hover:shadow-2xl transition-all duration-300 overflow-hidden `}
              style={{
    marginTop: `${(3-index) * 40}px`,
  }}
            >

              <div className="grid grid-cols-1 h-72 bg-white rounded-t-full gap-3 mb-6">
                  <div
                     className="  rounded-2xl overflow-hidden  p-2 "
                  >
                    <img
                      src={`${product.img}`}
                      alt="product"
                      className="w-full h-full  rounded-t-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>
              </div>

              <div className="text-center flex justify-between gap-4">
                <p className="text-2xl font-medium text-gray-800">{product.category}</p>
                <p className="text-2xl font-semibold text-purple-600 mt-1">
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