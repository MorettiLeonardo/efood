import { useParams } from 'react-router-dom'

import { useGetRestaurantDishesQuery } from '../../services/api'

import RestaurantDishes from '../RestaurantDishes'

import { List, ListContainer } from './styles'
import Loader from '../Loader'

export const DishesList = () => {
  const { id } = useParams()

  const { data: restaurant } = useGetRestaurantDishesQuery(id!)

  if (!restaurant) return <Loader />

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
