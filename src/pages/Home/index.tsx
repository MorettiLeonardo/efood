import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Loader from '../../components/Loader'
import RestaurantList from '../../components/RestaurantList'

import { useGetRestaurantsQuery } from '../../services/api'

const Home = () => {
  const { data: restaurants } = useGetRestaurantsQuery()

  if (!restaurants) {
    return <Loader />
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
