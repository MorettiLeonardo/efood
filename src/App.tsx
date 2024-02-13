import Header from './components/Header'
import GlobalCss from './styles'

import RestaurantList from './components/RestaurantList'

function App() {
  return (
    <>
      <GlobalCss />
      <Header />
      <div className="container">
        <RestaurantList />
      </div>
    </>
  )
}

export default App
