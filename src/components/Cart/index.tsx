import { useEffect, useState } from 'react'
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

  const [step, setStep] = useState(1)

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
      fullName: Yup.string().required('O campo é obrigatório'),
      adress: Yup.string().required('O campo é obrigatório'),
      city: Yup.string().required('O campo é obrigatório'),
      cep: Yup.string().required('O campo é obrigatório'),
      number: Yup.string().required('O campo é obrigatório'),
      complement: Yup.string().required('O capo é obrigatorio'),
      cardNameOwner: Yup.string().required('O campo é obrigatório'),
      cardNumber: Yup.string().required('O campo é obrigatório'),
      cardCode: Yup.string().required('O campo é obrigatório'),
      expiresMonth: Yup.string().required('O campo é obrigatório'),
      expiresYear: Yup.string().required('O campo é obrigatório')
    }),
    onSubmit: (values) =>
      purchase({
        delivery: {
          address: {
            city: values.city,
            complement: values.complement,
            description: values.adress,
            number: values.number,
            zipCode: values.cep
          },
          receiver: values.fullName
        },
        payment: {
          card: {
            name: values.cardNameOwner,
            number: values.cardNumber,
            code: values.cardCode,
            expires: {
              month: '1',
              year: '2023'
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

  const handleContinueDelivery = () => {
    setStep(2)
  }

  const handleContinuePayment = () => {
    setStep(3)
  }

  const handleGoBack = () => {
    setStep((prevStep) => prevStep - 1)
  }

  const submitForm = () => {
    form.handleSubmit()
    if (form.isValid) {
      setStep(4)
    } else {
      alert('Preencha os campos')
    }
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <FormContainer onSubmit={form.handleSubmit}>
        {step === 1 && (
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
            <Button
              type="button"
              className="margin-top"
              onClick={handleContinueDelivery}
            >
              Continuar com a entrega
            </Button>
          </SideBar>
        )}

        {step === 2 && (
          <SideBar>
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
              onClick={handleContinuePayment}
            >
              Continuar com o pagamento
            </Button>
            <Button type="button" onClick={handleGoBack}>
              Voltar para o carrinho
            </Button>
          </SideBar>
        )}

        {step === 3 && (
          <SideBar>
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
                className={
                  checkInputHasError('cardNameOwner') ? 'is-error' : ''
                }
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
                  className={
                    checkInputHasError('expiresMonth') ? 'is-error' : ''
                  }
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
                  className={
                    checkInputHasError('expiresYear') ? 'is-error' : ''
                  }
                />
              </InputGroup>
            </Group>
            <Button type="submit" className="margin-top" onClick={submitForm}>
              Finalizar pagamento
            </Button>
            <Button type="button" onClick={handleGoBack}>
              Voltar para a edição de endereço
            </Button>
          </SideBar>
        )}

        {step === 4 && (
          <SideBar>
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
              Lembre-se da importância de higienizar as mãos após o recebimento
              do pedido, garantindo assim sua segurança e bem-estar durante a
              refeição.
            </TextOrderPlaced>
            <TextOrderPlaced>
              Esperamos que desfrute de uma deliciosa e agradável experiência
              gastronômica. Bom apetite!
            </TextOrderPlaced>
            <Button
              type="button"
              className="margin-top"
              onClick={() => setStep(1)}
            >
              Concluir
            </Button>
          </SideBar>
        )}
      </FormContainer>
    </CartContainer>
  )
}

export default Cart
