import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { close, remove } from '../../store/reducers/cart'

import trash from '../../assets/images/trash.svg'

import { RootReducer } from '../../store'

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
  TextOrderPlaced,
  FormContainer
} from './styles'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const [cart, setCart] = useState(true)
  const [delivery, setDelivery] = useState(false)
  const [payment, setPayment] = useState(false)
  const [orderPlaced, setOrderPlaced] = useState(false)

  const form = useFormik({
    initialValues: {
      fullName: '',
      adress: '',
      city: '',
      cep: '',
      number: '',
      complement: '',
      cardNameOwner: '',
      cardNumber: '',
      cardCode: '',
      expiresMonth: '',
      expiresYear: ''
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      adress: Yup.string()
        .min(5, 'Endereço inválido')
        .required('O campo é obrigatório'),
      city: Yup.string()
        .min(5, 'Cidade inválida')
        .required('O campo é obrigatório'),
      cep: Yup.string()
        .min(9, 'CEP inválido')
        .max(9)
        .required('O campo é obrigatório'),
      number: Yup.string()
        .min(1, 'Número inválido')
        .required('O campo é obrigatório'),
      complement: Yup.string().min(
        4,
        'A referência precisa ter mais de 4 caracteres'
      ),
      cardNameOwner: Yup.string()
        .min(5, 'O campo precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      cardNumber: Yup.string()
        .min(5, 'O campo precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      cardCode: Yup.string()
        .min(5, 'O campo precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      expiresMonth: Yup.string()
        .min(5, 'O campo precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      expiresYear: Yup.string()
        .min(5, 'O campo precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório')
    }),
    onSubmit: (values) => console.log(values)
  })

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

  const getErrorMessage = (fieldName: string, message?: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors

    if (isInvalid && isTouched) return message
    return ''
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <FormContainer onSubmit={form.handleSubmit}>
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
          <h3>Entrega</h3>
          <InputGroup>
            <label htmlFor="fullName">Quem vai receber</label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              value={form.values.fullName}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            <small>{getErrorMessage('fullName', form.errors.fullName)}</small>
          </InputGroup>
          <InputGroup>
            <label htmlFor="adress">Endereço</label>
            <input
              type="text"
              id="adress"
              name="adress"
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              value={form.values.adress}
            />
            <small>{getErrorMessage('adress', form.errors.adress)}</small>
          </InputGroup>
          <InputGroup>
            <label htmlFor="city">Cidade</label>
            <input
              type="text"
              id="city"
              name="city"
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              value={form.values.city}
            />
            <small>{getErrorMessage('city', form.errors.city)}</small>
          </InputGroup>
          <Group left="155px" right="155px">
            <InputGroup>
              <label htmlFor="cep">CEP</label>
              <input
                type="text"
                id="cep"
                name="cep"
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                value={form.values.cep}
              />
              <small>{getErrorMessage('cep', form.errors.cep)}</small>
            </InputGroup>
            <InputGroup>
              <label htmlFor="number">Número</label>
              <input
                type="text"
                id="number"
                name="number"
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                value={form.values.number}
              />
              <small>{getErrorMessage('number', form.errors.number)}</small>
            </InputGroup>
          </Group>
          <InputGroup>
            <label htmlFor="complement">Complemento (opcional)</label>
            <input
              type="text"
              id="complement"
              name="complement"
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              value={form.values.complement}
            />
            <small>
              {getErrorMessage('complement', form.errors.complement)}
            </small>
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
        </SideBar>
        <SideBar className={payment ? '' : 'is-hidden'}>
          <h3>Pagamento - Valor a pagar R$ 190,90</h3>
          <InputGroup>
            <label htmlFor="cardNameOwner">Nome no cartão</label>
            <input
              type="text"
              id="cardNameOwner"
              name="cardNameOwner"
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              value={form.values.cardNameOwner}
            />
            <small>
              {getErrorMessage('cardNameOwner', form.errors.cardNameOwner)}
            </small>
          </InputGroup>
          <Group left="228px" right="83px">
            <InputGroup>
              <label htmlFor="cardNumber">Número do cartão</label>
              <input
                type="number"
                id="cardNumber"
                name="cardNumber"
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                value={form.values.cardNumber}
              />
              <small>
                {getErrorMessage('cardNumber', form.errors.cardNumber)}
              </small>
            </InputGroup>
            <InputGroup>
              <label htmlFor="cardCode">CVV</label>
              <input
                type="number"
                id="cardCode"
                name="cardCode"
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                value={form.values.cardCode}
              />
              <small>{getErrorMessage('cardCode', form.errors.cardCode)}</small>
            </InputGroup>
          </Group>
          <Group left="155px" right="155px">
            <InputGroup>
              <label htmlFor="expiresMonth">Mês de vencimento</label>
              <input
                type="number"
                id="expiresMonth"
                name="expiresMonth"
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                value={form.values.expiresMonth}
              />
              <small>
                {getErrorMessage('expiresMonth', form.errors.expiresMonth)}
              </small>
            </InputGroup>
            <InputGroup>
              <label htmlFor="expiresYear">Ano de vencimento</label>
              <input
                type="number"
                id="expiresYear"
                name="expiresYear"
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                value={form.values.expiresYear}
              />
              <small>
                {getErrorMessage('expiresYear', form.errors.expiresYear)}
              </small>
            </InputGroup>
          </Group>
          <Button
            type="submit"
            className="margin-top"
            onClick={() => (
              form.handleSubmit, setPayment(false), setOrderPlaced(true)
            )}
          >
            Finalizar pagamento
          </Button>
          <Button
            type="button"
            onClick={() => (setPayment(false), setDelivery(true))}
          >
            Voltar para a edição de endereço
          </Button>
        </SideBar>
        <SideBar className={orderPlaced ? '' : 'is-hidden'}>
          <h3>Pedido realizado - #asjda</h3>
          <TextOrderPlaced>
            Estamos felizes em informar que seu pedido já está em processo de
            preparação e, em breve, será entregue no endereço fornecido.
          </TextOrderPlaced>
          <TextOrderPlaced>
            Gostaríamos de ressaltar que nossos entregadores não estão
            autorizados a realizar cobranças extras.
          </TextOrderPlaced>
          <TextOrderPlaced>
            Lembre-se da importância de higienizar as mãos após o recebimento do
            pedido, garantindo assim sua segurança e bem-estar durante a
            refeição.
          </TextOrderPlaced>
          <TextOrderPlaced>
            Esperamos que desfrute de uma deliciosa e agradável experiência
            gastronômica. Bom apetite!
          </TextOrderPlaced>
          <Button
            type="button"
            className="margin-top"
            onClick={() => (setOrderPlaced(false), setCart(true), closeCart())}
          >
            Concluir
          </Button>
        </SideBar>
      </FormContainer>
    </CartContainer>
  )
}

export default Cart
