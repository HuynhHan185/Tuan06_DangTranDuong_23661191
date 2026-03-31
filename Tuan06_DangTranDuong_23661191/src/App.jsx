import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'
import Notfound from './components/Notfound'
import {Route,BrowserRouter,Routes,Link} from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Profile from './components/Profile'
import Orders from './components/Orders'
import Settings from './components/Settings'
import Products from './components/Products'
import ProductDetail from './components/ProductDetail'
import Checkout from './components/Checkout'
import Login from './components/Login'
import ProtectedRoute from './components/ProtectedRoute'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      {/* <nav>
        <Link to='/' >Home</Link>|
        <Link to='/About' >About</Link>|
        <Link to='/Contact' >Contact</Link>|
        <Link to='/Notfound' >NotFound</Link>|
      </nav>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/About' element={<About/>}></Route>
        <Route path='/Contact' element={<Contact/>}></Route>
        <Route path="*" element={<Notfound />} />
      </Routes> */}
        
        {/* <nav>
        <Link to='/' >Home</Link>|
        <Link to="/products">Products</Link>|
        <Link to='/dashboard'>Dashboard</Link>
        
      </nav> */}
      <Routes>

  {/* ===== PUBLIC ===== */}
  <Route path='/' element={<Home/>} />
  <Route path='/login' element={<Login/>} />

  {/* ===== PRODUCTS (CHO XEM - KHÔNG CẦN LOGIN) ===== */}
  <Route path='/products' element={<Products/>} />
  <Route path='/products/:id' element={<ProductDetail/>} />

  {/* ===== CHECKOUT (BẮT BUỘC LOGIN) ===== */}
  <Route path='/checkout' element={
    <ProtectedRoute>
      <Checkout/>
    </ProtectedRoute>
  } />

  {/* ===== DASHBOARD (BẮT BUỘC LOGIN) ===== */}
  <Route path='/dashboard' element={
    <ProtectedRoute>
      <Dashboard/>
    </ProtectedRoute>
  }>
    <Route path='profile' element={<Profile/>} />
    <Route path='orders' element={<Orders/>} />
    <Route path='settings' element={<Settings/>} />
  </Route>

  {/* ===== 404 ===== */}
  <Route path='*' element={<Notfound />} />

</Routes>
      </BrowserRouter>
    </>
  )
}

export default App
