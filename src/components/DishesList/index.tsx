import { useParams } from 'react-router-dom'

import { useGetRestaurantDishesQuery } from '../../services/api'

import RestaurantDishes from '../RestaurantDishes'

import { List, ListContainer } from './styles'

export const DishesList = () => {
  const { id } = useParams()

  const { data: restaurant } = useGetRestaurantDishesQuery(id!)
  console.log(restaurant)

  if (!restaurant) return <h4>Carregando...</h4>

  return (
    <ListContainer>
      <div className="container">
        <List>
          {restaurant?.cardapio.map((item) => (
            <li key={item.id}>
              <RestaurantDishes cardapio={item} />
            </li>
          ))}
        </List>
      </div>
    </ListContainer>
  )
}

export default DishesList
