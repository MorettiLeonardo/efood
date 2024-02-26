import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import Banner from '../../components/Banner'
import DishesList from '../../components/DishesList'
import Footer from '../../components/Footer'
import RestaurantHeader from '../../components/RestaurantHeader'
import { Restaurant } from '../Home'

const RestaurantPage = () => {
  const { id } = useParams()
  const [rest, setRest] = useState<Restaurant[]>([])

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setRest(res))
  }, [id])

  if (!rest) {
    return <div>Carregando...</div>
  }

  return (
    <>
      <RestaurantHeader />
      <Banner />
      <DishesList restaurants={rest} />
      <Footer />
    </>
  )
}

export default RestaurantPage
