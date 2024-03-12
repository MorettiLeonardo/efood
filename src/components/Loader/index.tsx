import { SyncLoader } from 'react-spinners'

import { colors } from '../../styles'

import { Container } from './styles'

const Loader = () => (
  <Container>
    <SyncLoader color={colors.darkBeige} />
  </Container>
)

export default Loader
