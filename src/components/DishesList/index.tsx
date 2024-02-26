import { Restaurant } from '../../pages/Home'
import RestaurantDishes from '../RestaurantDishes'
import { List, ListContainer } from './styles'

type Props = {
  restaurants: Restaurant[]
}

export const DishesList = ({ restaurants }: Props) => {
  return (
    <ListContainer>
      <div className="container">
        <List>
          {restaurants.map((item) => (
            <li key={item.cardapio.id}>
              <RestaurantDishes
                description={item.cardapio.descricao}
                name={item.cardapio.nome}
                portion={item.cardapio.porcao}
                price={item.cardapio.preco}
              />
            </li>
          ))}
        </List>
      </div>
    </ListContainer>
  )
}

export default DishesList
