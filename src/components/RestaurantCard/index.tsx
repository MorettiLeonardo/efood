import start from '../../assets/images/star.svg'
import sushi from '../../assets/images/sushi.svg'
import Tag from '../Tag'
import {
  Card,
  Infos,
  CardContainer,
  Description,
  RestaurantImage,
  Tags
} from './styles'

const RestaurantCard = () => (
  <Card>
    <RestaurantImage src={sushi} alt="Foto do restaurante" />
    <CardContainer>
      <Infos>
        <h3>Hioki Sushi</h3>
        <div>
          <span>4.9</span>
          <img src={start} alt="Nota" />
        </div>
      </Infos>
      <Description>
        Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis
        frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega
        rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão
        sem sair do lar com nosso delivery!
      </Description>
      <Tag>Saiba mais</Tag>
    </CardContainer>
  </Card>
)

export default RestaurantCard
