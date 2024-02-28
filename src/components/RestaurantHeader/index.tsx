import { Title, HeaderContainer, HeaderWrapper } from './styles'

import logo from '../../assets/images/logo.svg'
import { Link } from 'react-router-dom'

import { open } from '../../store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

const RestaurantHeader = () => {
  const { items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const openCart = () => {
    dispatch(open())
  }

  return (
    <HeaderContainer>
      <div className="container">
        <HeaderWrapper>
          <Link to={'/'}>
            <Title>Restaurantes</Title>
          </Link>
          <img src={logo} alt="EPLAY" />
          <Title onClick={openCart} style={{ cursor: 'pointer' }}>
            {items.length} Produto(s) no carrinho
          </Title>
        </HeaderWrapper>
      </div>
    </HeaderContainer>
  )
}

export default RestaurantHeader
