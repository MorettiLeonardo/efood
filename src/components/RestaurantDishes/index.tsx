import sushi from '../../assets/images/sushi.svg'
import {
  Card,
  CardButton,
  CardDescription,
  CardImage,
  CardTitle
} from './styles'

const RestaurantDishes = () => (
  <Card>
    <CardImage src={sushi} alt="prato de sushi" />
    <CardTitle>Nome do prato</CardTitle>
    <CardDescription>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti
      possimus perspiciatis sapiente vero deleniti ipsum, nihil quibusdam earum
      voluptatum minus alias inventore error numquam minima consequuntur maiores
      consectetur porro cupiditate.
    </CardDescription>
    <CardButton>Adicionar ao carrinho</CardButton>
  </Card>
)

export default RestaurantDishes
