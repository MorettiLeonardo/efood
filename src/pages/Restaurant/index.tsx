import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import Banner from '../../components/Banner'
import DishesList from '../../components/DishesList'
import Footer from '../../components/Footer'
import RestaurantHeader from '../../components/RestaurantHeader'
import { Restaurant } from '../Home'

const RestaurantPage = () => {
  const { id } = useParams()
  const [restaurant, setRestaurant] = useState<Restaurant>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setRestaurant(res))
  }, [id])

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
