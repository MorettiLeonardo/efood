import styled from 'styled-components'

import sushi from '../../assets/images/sushi.svg'
import { colors } from '../../styles'

export const BannerContainer = styled.div`
  background-image: url(${sushi});
  height: 280px;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  color: ${colors.white};
  font-size: 32px;
  line-height: 37px;
`

export const Category = styled.h3`
  font-weight: 100;
  padding-top: 25px;
  margin-bottom: 156px;
`

export const Name = styled.h2`
  font-weight: 900;
  font-size: 32px;
  padding-bottom: 32px;
`
