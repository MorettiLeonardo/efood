import RestaurantDishes from '../RestaurantDishes'
import { List, ListContainer } from './styles'

export const DishesList = () => (
  <ListContainer>
    <div className="container">
      <List>
        <li>
          <RestaurantDishes />
        </li>
        <li>
          <RestaurantDishes />
        </li>
        <li>
          <RestaurantDishes />
        </li>
        <li>
          <RestaurantDishes />
        </li>
        <li>
          <RestaurantDishes />
        </li>
        <li>
          <RestaurantDishes />
        </li>
      </List>
    </div>
  </ListContainer>
)

export default DishesList
