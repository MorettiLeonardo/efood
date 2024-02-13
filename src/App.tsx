import Header from './components/Header'
import RestaurantCard from './components/RestaurantCard'
import GlobalCss from './styles'

function App() {
  return (
    <>
      <GlobalCss />
      <Header />
      <div className="container">
        <RestaurantCard />
      </div>
    </>
  )
}

export default App
