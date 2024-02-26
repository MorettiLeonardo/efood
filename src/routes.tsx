import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import RestaurantPage from './pages/Restaurant'

const RoutesConfig = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/restaurante/:id" element={<RestaurantPage />} />
  </Routes>
)

export default RoutesConfig
