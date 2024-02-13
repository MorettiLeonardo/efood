import Header from './components/Header'
import RestaurantCard from './components/RestaurantCard'
import GlobalCss from './styles'

import sushi from './assets/images/sushi.svg'

function App() {
  return (
    <>
      <GlobalCss />
      <Header />
      <div className="container">
        <RestaurantCard
          category="Japones"
          description="Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!"
          image={sushi}
          infos={['Destaque da semana', 'Japonesa']}
          name="Hioki Sushi"
        />
      </div>
    </>
  )
}

export default App
