import { BannerContainer, Category } from './styles'

export type Props = {
  name?: string | undefined
  category?: string | undefined
  bgImage?: string | undefined
}

const Banner = ({ category, name, bgImage }: Props) => (
  <BannerContainer bgImage={bgImage}>
    <div className="container">
      <Category>{category}</Category>
      <h2>{name} </h2>
    </div>
  </BannerContainer>
)

export default Banner
