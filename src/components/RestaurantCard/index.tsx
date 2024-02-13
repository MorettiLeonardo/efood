import star from '../../assets/images/star.svg'
import Tag from '../Tag'
import {
  Card,
  Infos,
  CardContainer,
  Description,
  RestaurantImage,
  Tags
} from './styles'

type Props = {
  name: string
  description: string
  image: string
  infos: string[]
}

const RestaurantCard = ({ name, description, image, infos }: Props) => (
  <Card>
    <RestaurantImage src={image} alt="Foto do restaurante" />
    <Tags>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </Tags>
    <CardContainer>
      <Infos>
        <h3>{name}</h3>
        <div>
          <span>4.9</span>
          <img src={star} alt="estrelas" />
        </div>
      </Infos>
      <Description>{description}</Description>
      <a href="#">
        <Tag>Saiba mais</Tag>
      </a>
    </CardContainer>
  </Card>
)

export default RestaurantCard
