import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Navbar from "./Navbar"

function Products() {
  const [products, setProducts] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    fetch("/data/products.json")
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])

  const handleBuy = (product) => {
    localStorage.setItem("cart", JSON.stringify(product))
    navigate("/checkout")
  }

  return (
    <>
      <Navbar />

      <div className="container">
        <h2>🔥 Danh sách sản phẩm</h2>

        <div className="grid">
          {products.map(p => (
            <div className="product-card" key={p.id}>
              <h3>{p.name}</h3>

              <p className="price">
                {p.price}đ
              </p>

              <button 
                className="btn"
                onClick={() => handleBuy(p)}
              >
                🛒 Mua ngay
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Products