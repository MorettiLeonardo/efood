import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { RootReducer } from '../../store'
import { open } from '../../store/reducers/cart'

import logo from '../../assets/images/logo.svg'

import { Title, HeaderContainer, HeaderWrapper } from './styles'

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
