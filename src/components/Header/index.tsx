import * as S from './styles'

import logo from '../../assets/images/logo.svg'

const Header = () => (
  <S.HeaderContainer>
    <S.HeaderImage src={logo} alt="Efood" />
    <S.Title>Viva experiências gastronômicas no conforto da sua casa</S.Title>
  </S.HeaderContainer>
)

export default Header
