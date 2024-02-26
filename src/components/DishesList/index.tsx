import { useEffect, useState } from 'react'
import { Restaurant } from '../../pages/Home'
import RestaurantDishes from '../RestaurantDishes'
import { List, ListContainer } from './styles'
import { useParams } from 'react-router-dom'

interface CardapioItem {
  id: number
  foto: string
  preco: number
  nome: string
  porcao: string
  descricao: string
}

interface RestaurantWithCardapio {
  cardapio: CardapioItem[]
}

export const DishesList = () => {
  const { id } = useParams()
  const [restaurant, setRestaurant] = useState<RestaurantWithCardapio>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setRestaurant(res))
  }, [id])

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
