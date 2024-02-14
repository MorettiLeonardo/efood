import { FooterContainer, Logo, P, SocialLinks } from './styles'

import logo from '../../assets/images/logo.svg'
import instagram from '../../assets/images/instagram_logo.svg'
import facebook from '../../assets/images/facebook_logo.svg'
import twitter from '../../assets/images/twitter_logo.svg'

const Footer = () => (
  <FooterContainer>
    <Logo src={logo} alt="efood" />
    <SocialLinks>
      <a href="#">
        <img src={instagram} alt="instagram logo" />
      </a>
      <a href="#">
        <img src={facebook} alt="facebook logo" />
      </a>
      <a href="#">
        <img src={twitter} alt="twitter logo" />
      </a>
    </SocialLinks>
    <P>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.
    </P>
  </FooterContainer>
)

export default Footer
