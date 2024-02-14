import styled from 'styled-components'
import { colors } from '../../styles'

import headerImage from '../../assets/images/bg-header.svg'

export const HeaderContainer = styled.header`
  background-image: url(${headerImage});
`

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 65px;
`

export const Title = styled.h2`
  font-weight: 900;
  color: ${colors.salmon};
  font-size: 18px;
  line-height: 21px;
`
