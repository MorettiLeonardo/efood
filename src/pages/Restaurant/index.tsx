import { useParams } from 'react-router-dom'
import Banner from '../../components/Banner'
import DishesList from '../../components/DishesList'
import Footer from '../../components/Footer'
import RestaurantHeader from '../../components/RestaurantHeader'
import { useGetRestaurantDishesQuery } from '../../services/api'

const RestaurantPage = () => {
  const { id } = useParams()

  const { data: restaurant } = useGetRestaurantDishesQuery(id!)

  return (
    <>
      <RestaurantHeader />
      <Banner
        bgImage={restaurant?.capa}
        category={restaurant?.tipo}
        name={restaurant?.titulo}
      />
      <DishesList />
      <Footer />
    </>
  )
}

export default RestaurantPage
