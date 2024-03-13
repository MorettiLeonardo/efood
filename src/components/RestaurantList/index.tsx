import RestaurantCard from '../RestaurantCard'

import { ListContainer } from './styles'

type Props = {
  restaurant: Restaurant[]
}

const RestaurantList = ({ restaurant }: Props) => (
  <ListContainer>
    {restaurant.map((restaurant) => (
      <li key={restaurant.id}>
        <RestaurantCard
          title={restaurant.titulo}
          description={restaurant.descricao}
          cover={restaurant.capa}
          id={restaurant.id}
          review={restaurant.avaliacao}
          type={restaurant.tipo}
          highlighted={restaurant.destacado}
        />
      </li>
    ))}
  </ListContainer>
)

export default RestaurantList
