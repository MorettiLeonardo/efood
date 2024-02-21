import { useEffect, useState } from 'react'

import Footer from '../../components/Footer'
import Header from '../../components/Header'
import RestaurantList from '../../components/RestaurantList'

export type Restaurant = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: {
    id: number
    foto: string
    preco: number
    nome: string
    porcao: string
    descricao: string
  }
}

const Home = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes').then(
      (res) => res.json().then((res) => setRestaurants(res))
    )
  }, [])
  return (
    <>
      <Header />
      <div className="container">
        <RestaurantList restaurants={restaurants} />
      </div>
      <Footer />
    </>
  )
}

export default Home
