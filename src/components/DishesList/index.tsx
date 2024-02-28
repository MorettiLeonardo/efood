import RestaurantDishes from '../RestaurantDishes'
import { List, ListContainer } from './styles'
import { useParams } from 'react-router-dom'
import { useGetRestaurantDishesQuery } from '../../services/api'

interface CardapioItem {
  id: number
  foto: string
  preco: number
  nome: string
  porcao: string
  descricao: string
}

export interface RestaurantWithCardapio {
  cardapio: CardapioItem[]
}

export const DishesList = () => {
  const { id } = useParams()

  const { data: restaurant } = useGetRestaurantDishesQuery(id!)

  if (!restaurant) return <h4>Carregando...</h4>

  return (
    <ListContainer>
      <div className="container">
        <List>
          {restaurant &&
            restaurant.cardapio &&
            restaurant.cardapio.map((item) => (
              <li key={item.id}>
                <RestaurantDishes
                  cover={item.foto}
                  description={item.descricao}
                  name={item.nome}
                  portion={item.porcao}
                  price={item.preco}
                />
              </li>
            ))}
        </List>
      </div>
    </ListContainer>
  )
}

export default DishesList
