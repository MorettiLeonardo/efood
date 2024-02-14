import { Title, HeaderContainer, HeaderWrapper } from './styles'

import logo from '../../assets/images/logo.svg'
import { Link } from 'react-router-dom'

const RestaurantHeader = () => (
  <HeaderContainer>
    <div className="container">
      <HeaderWrapper>
        <Link to={'/'}>
          <Title>Restaurantes</Title>
        </Link>
        <img src={logo} alt="" />
        <Title>0 Produto(s) no carrinho</Title>
      </HeaderWrapper>
    </div>
  </HeaderContainer>
)

export default RestaurantHeader
