import { useDispatch, useSelector } from 'react-redux'
import trash from '../../assets/images/trash.svg'
import {
  Overlay,
  CartContainer,
  SideBar,
  Product,
  Total,
  Trash,
  Button,
  InputGroup,
  Group,
  TextOrderPlaced
} from './styles'
import { RootReducer } from '../../store'

import { close, remove } from '../../store/reducers/cart'
import { useState } from 'react'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const [cart, setCart] = useState(true)
  const [delivery, setDelivery] = useState(false)
  const [payment, setPayment] = useState(false)
  const [orderPlaced, setOrderPlaced] = useState(false)

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
      <SideBar className={cart ? '' : 'is-hidden'}>
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
        <Button
          type="button"
          className="margin-top"
          onClick={() => (setDelivery(true), setCart(false))}
        >
          Continuar com a entrega
        </Button>
      </SideBar>
      <SideBar className={delivery ? '' : 'is-hidden'}>
        <form>
          <h3>Entrega</h3>
          <InputGroup>
            <label htmlFor="receiver">Quem vai receber</label>
            <input type="text" id="receiver" name="receiver" />
          </InputGroup>
          <InputGroup>
            <label htmlFor="adress">Endereço</label>
            <input type="text" id="adress" name="adress" />
          </InputGroup>
          <InputGroup>
            <label htmlFor="city">Cidade</label>
            <input type="text" id="city" name="city" />
          </InputGroup>
          <Group left="155px" right="155px">
            <InputGroup>
              <label htmlFor="cep">CEP</label>
              <input type="text" id="cep" name="cep" />
            </InputGroup>
            <InputGroup>
              <label htmlFor="number">Número</label>
              <input type="text" id="number" name="number" />
            </InputGroup>
          </Group>
          <InputGroup>
            <label htmlFor="complement">Complemento (opcional)</label>
            <input type="text" id="complement" name="complement" />
          </InputGroup>
          <Button
            type="button"
            className="margin-top"
            onClick={() => (setDelivery(false), setPayment(true))}
          >
            Continuar com o pagamento
          </Button>
          <Button
            type="button"
            onClick={() => (setDelivery(false), setCart(true))}
          >
            Voltar para o carrinho
          </Button>
        </form>
      </SideBar>
      <SideBar className={payment ? '' : 'is-hidden'}>
        <form>
          <h3>Pagamento - Valor a pagar R$ 190,90</h3>
          <InputGroup>
            <label htmlFor="cardNameOwner">Nome no cartão</label>
            <input type="text" id="cardNameOwner" name="cardNameOwner" />
          </InputGroup>
          <Group left="228px" right="83px">
            <InputGroup>
              <label htmlFor="cardNumber">Número do cartão</label>
              <input type="number" id="cardNumber" name="cardNumber" />
            </InputGroup>
            <InputGroup>
              <label htmlFor="cardCode">CVV</label>
              <input type="number" id="cardCode" name="cardCode" />
            </InputGroup>
          </Group>
          <Group left="155px" right="155px">
            <InputGroup>
              <label htmlFor="expiresMonth">Mês de vencimento</label>
              <input type="number" id="expiresMonth" name="expiresMonth" />
            </InputGroup>
            <InputGroup>
              <label htmlFor="expiresYear">Ano de vencimento</label>
              <input type="number" id="expiresYear" name="expiresYear" />
            </InputGroup>
          </Group>
          <Button
            type="button"
            className="margin-top"
            onClick={() => (setPayment(false), setOrderPlaced(true))}
          >
            Finalizar pagamento
          </Button>
          <Button
            type="button"
            onClick={() => (setPayment(false), setDelivery(true))}
          >
            Voltar para a edição de endereço
          </Button>
        </form>
      </SideBar>
      <SideBar className={orderPlaced ? '' : 'is-hidden'}>
        <h3>Pedido realizado - #asjda</h3>
        <TextOrderPlaced>
          Estamos felizes em informar que seu pedido já está em processo de
          preparação e, em breve, será entregue no endereço fornecido.
        </TextOrderPlaced>

        <TextOrderPlaced>
          Gostaríamos de ressaltar que nossos entregadores não estão autorizados
          a realizar cobranças extras.
        </TextOrderPlaced>

        <TextOrderPlaced>
          Lembre-se da importância de higienizar as mãos após o recebimento do
          pedido, garantindo assim sua segurança e bem-estar durante a refeição.
        </TextOrderPlaced>

        <TextOrderPlaced>
          Esperamos que desfrute de uma deliciosa e agradável experiência
          gastronômica. Bom apetite!
        </TextOrderPlaced>
        <Button
          className="margin-top"
          onClick={() => (setOrderPlaced(false), setCart(true), closeCart())}
        >
          Concluir
        </Button>
      </SideBar>
    </CartContainer>
  )
}

export default Cart
