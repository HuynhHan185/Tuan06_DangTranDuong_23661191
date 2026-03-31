import Navbar from "./Navbar"
import { useNavigate } from "react-router-dom"

function Home() {
  const navigate = useNavigate()

  return (
    <>
      <Navbar />

      <div className="container">

        {/* HERO */}
        <div className="hero">
          <h1>🔥 MyShop - Mua sắm cực chất</h1>
          <p>Giá rẻ - Nhanh - Uy tín số 1 Việt Nam</p>

          <button 
            className="btn"
            onClick={() => navigate("/products")}
          >
            Mua ngay
          </button>
        </div>

        {/* FEATURES */}
        <h2 className="section-title">Tại sao chọn chúng tôi?</h2>

        <div className="features">
          <div className="feature-box">
            <h3>🚀 Giao hàng nhanh</h3>
            <p>Nhận hàng trong 24h</p>
          </div>

          <div className="feature-box">
            <h3>💰 Giá rẻ</h3>
            <p>Cam kết rẻ nhất thị trường</p>
          </div>

          <div className="feature-box">
            <h3>🔒 An toàn</h3>
            <p>Thanh toán bảo mật 100%</p>
          </div>
        </div>

        {/* FEATURED PRODUCTS */}
        <h2 className="section-title">Sản phẩm nổi bật</h2>

        <div className="grid">
          <div className="card">
            <h3>iPhone 15</h3>
            <p>25.000.000đ</p>
          </div>

          <div className="card">
            <h3>Laptop Gaming</h3>
            <p>30.000.000đ</p>
          </div>

          <div className="card">
            <h3>Tai nghe Bluetooth</h3>
            <p>1.000.000đ</p>
          </div>
        </div>

      </div>
    </>
  )
}

export default Home