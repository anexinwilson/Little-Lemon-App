import { BrowserRouter,Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home'
import { Layout } from './pages/Layout'
import { Login } from './pages/Login'
import { OrderOnline } from './pages/OrderOnline'
import { Reservations } from './pages/Reservations'


function App() {


  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="reservations" element={<Reservations />} />
          <Route path="order" element={<OrderOnline />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
