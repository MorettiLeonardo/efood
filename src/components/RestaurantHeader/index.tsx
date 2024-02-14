import { Title, HeaderContainer, HeaderWrapper } from './styles'

import logo from '../../assets/images/logo.svg'

const RestaurantHeader = () => (
  <HeaderContainer>
    <div className="container">
      <HeaderWrapper>
        <Title>Restaurantes</Title>
        <img src={logo} alt="" />
        <Title>0 Produto(s) no carrinho</Title>
      </HeaderWrapper>
    </div>
  </HeaderContainer>
)

export default RestaurantHeader
