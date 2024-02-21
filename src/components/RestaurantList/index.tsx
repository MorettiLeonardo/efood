import { Restaurant } from '../../pages/Home'

import RestaurantCard from '../RestaurantCard'

import { ListContainer } from './styles'

type Props = {
  restaurants: Restaurant[]
}

const RestaurantList = ({ restaurants }: Props) => (
  <ListContainer>
    {restaurants.map((restaurant) => (
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
