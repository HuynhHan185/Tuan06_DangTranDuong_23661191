import { Link } from "react-router-dom"

function Navbar() {
  return (
    <div className="navbar">
      <div>
        <b>MyShop</b>
      </div>

      <div>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/dashboard">Dashboard</Link>
      </div>
    </div>
  )
}

export default Navbar