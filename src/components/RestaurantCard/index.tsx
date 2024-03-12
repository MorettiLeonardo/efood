import { Link } from 'react-router-dom'

import star from '../../assets/images/star.svg'

import Tag from '../Tag'

import * as S from './styles'

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
    <S.Card>
      <S.TagContainer>
        <Tag>{type}</Tag>
      </S.TagContainer>
      <S.RestaurantImage src={cover} alt="Foto do restaurante" />
      <S.CardContainer>
        <S.Infos>
          <h3>{title}</h3>
          <div>
            <span>{review}</span>
            <img src={star} alt="estrelas" />
          </div>
        </S.Infos>
        <S.Description>{descMax(description)}</S.Description>
        <Link to={`/restaurante/${id}`}>
          <Tag>Saiba mais</Tag>
        </Link>
      </S.CardContainer>
    </S.Card>
  )
}

export default RestaurantCard
