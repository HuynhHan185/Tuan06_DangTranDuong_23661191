import Navbar from "./Navbar"

function Checkout() {
  const product = JSON.parse(localStorage.getItem("cart"))

  if (!product) return <h2>Không có sản phẩm</h2>

  return (
    <>
      <Navbar />

      <div className="container">
        <div className="card">
          <h2>Thanh toán thành công 🎉</h2>
          <p><b>{product.name}</b></p>
          <p>Giá: {product.price}đ</p>
        </div>
      </div>
    </>
  )
}

export default Checkout