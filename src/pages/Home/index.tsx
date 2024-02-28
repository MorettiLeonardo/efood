import Footer from '../../components/Footer'
import Header from '../../components/Header'
import RestaurantList from '../../components/RestaurantList'

import { useGetRestaurantsQuery } from '../../services/api'

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
  const { data: restaurants, isLoading } = useGetRestaurantsQuery()

  if (!restaurants) {
    return <h4>Carregando...</h4>
  }

  return (
    <>
      <Header />
      <div className="container">
        <RestaurantList restaurant={restaurants} />
      </div>
      <Footer />
    </>
  )
}

export default Home
