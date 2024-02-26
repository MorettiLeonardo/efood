import { BannerContainer, Category } from './styles'

type Props = {
  name: string | undefined
  category: string | undefined
}

const Banner = ({ category, name }: Props) => (
  <BannerContainer>
    <div className="container">
      <Category>{category}</Category>
      <h2>{name} </h2>
    </div>
  </BannerContainer>
)

export default Banner
