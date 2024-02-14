import { BrowserRouter } from 'react-router-dom'

import GlobalCss from './styles'
import RoutesConfig from './routes'

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <RoutesConfig />
    </BrowserRouter>
  )
}

export default App
