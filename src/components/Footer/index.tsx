import * as S from './styles'

import logo from '../../assets/images/logo.svg'
import instagram from '../../assets/images/instagram_logo.svg'
import facebook from '../../assets/images/facebook_logo.svg'
import twitter from '../../assets/images/twitter_logo.svg'

const Footer = () => (
  <S.FooterContainer>
    <S.Logo src={logo} alt="efood" />
    <S.SocialLinks>
      <a href="#">
        <img src={instagram} alt="instagram logo" />
      </a>
      <a href="#">
        <img src={facebook} alt="facebook logo" />
      </a>
      <a href="#">
        <img src={twitter} alt="twitter logo" />
      </a>
    </S.SocialLinks>
    <S.P>
      A E-FOOD é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.
    </S.P>
  </S.FooterContainer>
)

export default Footer
