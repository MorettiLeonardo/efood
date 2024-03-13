import { useParams } from 'react-router-dom'

import { useGetRestaurantDishesQuery } from '../../services/api'

import Banner from '../../components/Banner'
import DishesList from '../../components/DishesList'
import Footer from '../../components/Footer'
import RestaurantHeader from '../../components/RestaurantHeader'

export type RestaurantParams = {
  id: string
}

const RestaurantPage = () => {
  const { id } = useParams() as RestaurantParams

  const { data: restaurant } = useGetRestaurantDishesQuery(id)

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
