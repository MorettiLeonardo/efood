import styled from 'styled-components'

import bgHeader from '../../assets/images/bg-header.svg'
import { colors } from '../../styles'

export const FooterContainer = styled.footer`
  background-image: url(${bgHeader});
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 0px;
`

export const Logo = styled.img`
  margin-bottom: 32px;
`

export const SocialLinks = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 80px;
`

export const P = styled.p`
  max-width: 680px;
  text-align: center;
  font-size: 14px;
  color: ${colors.salmon};
`
