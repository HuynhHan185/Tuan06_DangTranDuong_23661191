import { useNavigate, useLocation } from "react-router-dom"

function Login() {
  const navigate = useNavigate()
  const location = useLocation()

  const handleLogin = () => {
    localStorage.setItem("user", JSON.stringify({ name: "Dương" }))

    const from = location.state?.from?.pathname || "/"
    navigate(from)
  }

  return (
    <div>
      <h2>Login</h2>
      <button onClick={handleLogin}>Đăng nhập</button>
    </div>
  )
}

export default Login