import { useState } from 'react'

import Banner from '../../components/Banner'
import DishesList from '../../components/DishesList'
import Footer from '../../components/Footer'
import RestaurantHeader from '../../components/RestaurantHeader'
import { Restaurant } from '../Home'

const RestaurantPage = () => {
  const [restaurant, setRestaurant] = useState<Restaurant>()

  return (
    <>
      <RestaurantHeader />
      <Banner name={restaurant?.titulo} category={restaurant?.tipo} />
      <DishesList />
      <Footer />
    </>
  )
}

export default RestaurantPage
