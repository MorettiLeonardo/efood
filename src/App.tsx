import Header from './components/Header'
import GlobalCss from './styles'

import RestaurantList from './components/RestaurantList'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <GlobalCss />
      <Header />
      <div className="container">
        <RestaurantList />
      </div>
      <Footer />
    </>
  )
}

export default App
