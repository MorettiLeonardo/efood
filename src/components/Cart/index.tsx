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
import { usePurchaseMutation } from '../../services/api'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const [cart, setCart] = useState(true)
  const [delivery, setDelivery] = useState(false)
  const [payment, setPayment] = useState(false)
  const [orderPlaced, setOrderPlaced] = useState(false)
  const [erro, setErro] = useState(true)

  const [purchase, { isError, isLoading, data }] = usePurchaseMutation()

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
    onSubmit: (values) =>
      purchase({
        delivery: {
          address: {
            city: values.city,
            complement: values.complement,
            description: values.adress,
            number: Number(values.number),
            zipCode: values.cep
          },
          receiver: values.fullName
        },
        payment: {
          card: {
            name: values.cardNameOwner,
            number: Number(values.cardNumber),
            code: Number(values.cardCode),
            expires: {
              month: 1,
              year: 2023
            }
          }
        },
        products: [{ id: 1, price: 10 }]
      })
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

  const checkInputHasError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    const hasError = isInvalid && isTouched

    return hasError
  }

  const validateCart = () => {
    if (items.length === 0) {
      setCart(true)
      setDelivery(false)
      alert('Precis ter pelo menos um item no carrinho')
    } else {
      setCart(false)
      setDelivery(true)
    }
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
          <Button type="button" className="margin-top" onClick={validateCart}>
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
              className={checkInputHasError('fullName') ? 'is-error' : ''}
            />
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
              className={checkInputHasError('adress') ? 'is-error' : ''}
            />
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
              className={checkInputHasError('city') ? 'is-error' : ''}
            />
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
                className={checkInputHasError('cep') ? 'is-error' : ''}
              />
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
                className={checkInputHasError('number') ? 'is-error' : ''}
              />
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
              className={checkInputHasError('complement') ? 'is-error' : ''}
            />
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
          <h3>Pagamento - Valor a pagar {formatPrice(getTotalPrice())}</h3>
          <InputGroup>
            <label htmlFor="cardNameOwner">Nome no cartão</label>
            <input
              type="text"
              id="cardNameOwner"
              name="cardNameOwner"
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              value={form.values.cardNameOwner}
              className={checkInputHasError('cardNameOwner') ? 'is-error' : ''}
            />
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
                className={checkInputHasError('cardNumber') ? 'is-error' : ''}
              />
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
                className={checkInputHasError('cardCode') ? 'is-error' : ''}
              />
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
                className={checkInputHasError('expiresMonth') ? 'is-error' : ''}
              />
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
                className={checkInputHasError('expiresYear') ? 'is-error' : ''}
              />
            </InputGroup>
          </Group>
          <Button
            type="submit"
            className="margin-top"
            onClick={() => (
              form.handleSubmit(), setPayment(false), setOrderPlaced(true)
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
          <h3>Pedido realizado - #???</h3>
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
