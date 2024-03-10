import { Link } from 'react-router-dom'

import star from '../../assets/images/star.svg'

import Tag from '../Tag'

import {
  Card,
  Infos,
  CardContainer,
  Description,
  RestaurantImage,
  TagContainer
} from './styles'

type Props = {
  id: number
  title: string
  highlighted: boolean
  type: string
  review: number
  description: string
  cover: string
}

export const descMax = (desc: string) => {
  if (desc.length > 200) {
    return desc.slice(0, 190) + '...'
  }

  return desc
}

const RestaurantCard = ({
  description,
  cover,
  title,
  review,
  type,
  id
}: Props) => {
  return (
    <Card>
      <TagContainer>
        <Tag>{type}</Tag>
      </TagContainer>
      <RestaurantImage src={cover} alt="Foto do restaurante" />
      <CardContainer>
        <Infos>
          <h3>{title}</h3>
          <div>
            <span>{review}</span>
            <img src={star} alt="estrelas" />
          </div>
        </Infos>
        <Description>{descMax(description)}</Description>
        <Link to={`/restaurante/${id}`}>
          <Tag>Saiba mais</Tag>
        </Link>
      </CardContainer>
    </Card>
  )
}

export default RestaurantCard
