import * as S from './styles'

export type Props = {
  name?: string | undefined
  category?: string | undefined
  bgImage?: string | undefined
}

const Banner = ({ category, name, bgImage }: Props) => (
  <S.BannerContainer style={{ backgroundImage: `url(${bgImage})` }}>
    <div className="container">
      <S.Category>{category}</S.Category>
      <h2>{name} </h2>
    </div>
  </S.BannerContainer>
)

export default Banner
