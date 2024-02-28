import { BrowserRouter } from 'react-router-dom'

import { Provider } from 'react-redux'
import { store } from './store'

import GlobalCss from './styles'
import RoutesConfig from './routes'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalCss />
        <RoutesConfig />
      </BrowserRouter>
    </Provider>
  )
}

export default App
