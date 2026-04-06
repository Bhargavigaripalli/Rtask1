 import React, { useState } from "react";
import "./task3.css";

function Task3() {
  const [show, setShow] = useState(true);
  const [search, setSearch] = useState("");

  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Laptop",
      category: "Electronics",
      image:
        "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/13-laptop-platinum-right-render-fy25:VP4-1260x795?fmt=png-alpha"
    },
    {
      id: 2,
      name: "Shoes",
      category: "Fashion",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff"
    },
    {
      id: 3,
      name: "Watch",
      category: "Accessories",
      image:
        "https://jokerandwitch.com/cdn/shop/products/AMWW397_hand.jpg"
    },
    {
      id: 4,
      name: "Phone",
      category: "Electronics",
      image:
        "https://blogassets.airtel.in/wp-content/uploads/2024/12/Exploring-Android.png"
    },
    {
      id: 5,
      name: "Bag",
      category: "Fashion",
      image:
        "https://static.vecteezy.com/system/resources/thumbnails/020/221/141/small_2x/1514-blue-bag-isolated-on-a-transparent-background-photo.jpg"
    }
  ]);

  // ✅ Improved Search (name + category)
  const filteredProducts = products.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()) ||
    item.category.toLowerCase().includes(search.toLowerCase())
  );

  // Remove item
  const removeItem = (id) => {
    setProducts(products.filter((item) => item.id !== id));
  };

  return (
    <div className="container">
      <h1 className="title">🛍 Product Dashboard</h1>

      {/* Toggle Button */}
      <button className="btn" onClick={() => setShow(!show)}>
        {show ? "Hide Products" : "Show Products"}
      </button>

      {/* Search */}
      <input
        type="text"
        placeholder="Search by name or category..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Conditional Rendering */}
      {show && (
        <div className="grid">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((item) => (
              <div key={item.id} className="card">
                <img src={item.image} alt={item.name} />

                <div className="card-content">
                  <h2>{item.name}</h2>
                  <p>{item.category}</p>

                  <button
                    className="remove"
                    onClick={() => removeItem(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))
          ) : (
            <h2 className="noData">🚫 No Matching Products</h2>
          )}
        </div>
      )}
    </div>
  );
}

export default Task3;