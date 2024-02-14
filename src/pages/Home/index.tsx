import Footer from '../../components/Footer'
import Header from '../../components/Header'
import RestaurantList from '../../components/RestaurantList'

const Home = () => (
  <>
    <Header />
    <div className="container">
      <RestaurantList />
    </div>
    <Footer />
  </>
)

export default Home
