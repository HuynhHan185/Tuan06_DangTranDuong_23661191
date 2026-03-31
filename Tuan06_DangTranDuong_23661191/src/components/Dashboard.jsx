import { Link, Outlet } from "react-router-dom"
import Navbar from "./Navbar"

function Dashboard() {
  return (
    <>
      <Navbar />

      <div className="dashboard">

        {/* SIDEBAR */}
        <div className="sidebar">
          <h3>📊 Dashboard</h3>

          <Link to="profile">👤 Profile</Link>
          <Link to="orders">📦 Orders</Link>
          <Link to="settings">⚙️ Settings</Link>
        </div>

        {/* CONTENT */}
        <div className="content">
          <h2>Trang quản lý</h2>

          {/* STATS */}
          <div className="stats">
            <div className="stat-box">
              <h3>10</h3>
              <p>Đơn hàng</p>
            </div>

            <div className="stat-box">
              <h3>5</h3>
              <p>Sản phẩm</p>
            </div>

            <div className="stat-box">
              <h3>1M</h3>
              <p>Doanh thu</p>
            </div>
          </div>

          <br />

          <div className="card">
            <Outlet />
          </div>
        </div>

      </div>
    </>
  )
}

export default Dashboard