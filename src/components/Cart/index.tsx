import { useDispatch, useSelector } from 'react-redux'
import trash from '../../assets/images/trash.svg'
import {
  Overlay,
  CartContainer,
  SideBar,
  Product,
  Total,
  Trash
} from './styles'
import { RootReducer } from '../../store'

import { close, remove } from '../../store/reducers/cart'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const formatPrice = (price = 0) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price)
  }

  const getTotalPrice = () => {
    return items.reduce((acc, currentValue) => {
      return (acc += currentValue.preco)
    }, 0)
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <SideBar>
        <ul>
          {items.map((item) => (
            <Product key={item.id}>
              <Trash src={trash} onClick={() => removeItem(item.id)} />
              <img src={item.foto} alt={item.nome} />
              <div>
                <h4>{item.nome}</h4>
                <p>{formatPrice(item.preco)}</p>
              </div>
            </Product>
          ))}
        </ul>
        <Total>
          <p>Valor total</p>
          <p>{formatPrice(getTotalPrice())}</p>
        </Total>
        <button type="button"> Continuar com a entrega </button>
      </SideBar>
    </CartContainer>
  )
}

export default Cart
