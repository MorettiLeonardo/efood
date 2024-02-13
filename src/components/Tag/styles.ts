import styled from 'styled-components'
import { colors } from '../../styles'
import { Props } from '.'

export const TagContainer = styled.div<Props>`
  background-color: ${colors.salmon};
  color: ${colors.darkBeige};
  font-weight: bold;
  padding: 4px 6px;
  font-size: ${(props) => (props.size === 'small' ? '14px' : '16px')};
  display: inline-block;
`
