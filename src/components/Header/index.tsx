import { HeaderContainer, Title, HeaderImage } from './styles'

import logo from '../../assets/images/logo.svg'

const Header = () => (
  <HeaderContainer>
    <HeaderImage src={logo} alt="Efood" />
    <Title>Viva experiências gastronômicas no conforto da sua casa</Title>
  </HeaderContainer>
)

export default Header
