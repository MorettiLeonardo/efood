import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import { formatPrice } from '../../utils'

import { close, remove } from '../../store/reducers/cart'
import { usePurchaseMutation } from '../../services/api'
import { RootReducer } from '../../store'

import trash from '../../assets/images/trash.svg'

import * as S from './styles'

const Cart = () => {
  const [step, setStep] = useState(1)

  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const [purchase, { data, isLoading }] = usePurchaseMutation()

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
        .min(5, 'O campo precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      adress: Yup.string()
        .min(5, 'O campo precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      city: Yup.string()
        .min(5, 'O campo precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      cep: Yup.string()
        .min(9, 'O campo precisa ter pelo menos 9 caracteres')
        .max(9, 'O campo pode ter no máximo 9 caracteres')
        .required('O campo é obrigatório'),
      number: Yup.string()
        .min(1, 'o campo precisa ter pelo menos um caracter')
        .required('O campo é obrigatório'),
      complement: Yup.string().min(
        5,
        'O campo precisa ter pelo menos 5 caracteres'
      ),
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
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={closeCart} />
      <S.FormContainer onSubmit={form.handleSubmit}>
        {step === 1 && (
          <S.SideBar>
            {items.length > 0 ? (
              <>
                <ul>
                  {items.map((item) => (
                    <S.Product key={item.id}>
                      <S.Trash
                        src={trash}
                        onClick={() => removeItem(item.id)}
                      />
                      <img src={item.foto} alt={item.nome} />
                      <div>
                        <h4>{item.nome}</h4>
                        <p>{formatPrice(item.preco)}</p>
                      </div>
                    </S.Product>
                  ))}
                </ul>
                <S.Total>
                  <p>Valor total</p>
                  <p>{formatPrice(getTotalPrice())}</p>
                </S.Total>
                <S.Button
                  type="button"
                  className="margin-top"
                  onClick={handleContinueDelivery}
                >
                  Continuar com a entrega
                </S.Button>
              </>
            ) : (
              <p className="empty-text">
                O carrinho está vazio, adicione pelo menos um produto para
                continuar com a compra
              </p>
            )}
          </S.SideBar>
        )}

        {step === 2 && (
          <S.SideBar>
            <h3>Entrega</h3>
            <S.InputGroup>
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
            </S.InputGroup>
            <S.InputGroup>
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
            </S.InputGroup>
            <S.InputGroup>
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
            </S.InputGroup>
            <S.Group left="155px" right="155px">
              <S.InputGroup>
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
              </S.InputGroup>
              <S.InputGroup>
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
              </S.InputGroup>
            </S.Group>
            <S.InputGroup>
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
            </S.InputGroup>
            <S.Button
              type="button"
              className="margin-top"
              onClick={handleContinuePayment}
            >
              Continuar com o pagamento
            </S.Button>
            <S.Button type="button" onClick={handleGoBack}>
              Voltar para o carrinho
            </S.Button>
          </S.SideBar>
        )}

        {step === 3 && (
          <S.SideBar>
            <h3>Pagamento - Valor a pagar {formatPrice(getTotalPrice())}</h3>
            <S.InputGroup>
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
            </S.InputGroup>
            <S.Group left="228px" right="83px">
              <S.InputGroup>
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
              </S.InputGroup>
              <S.InputGroup>
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
              </S.InputGroup>
            </S.Group>
            <S.Group left="155px" right="155px">
              <S.InputGroup>
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
              </S.InputGroup>
              <S.InputGroup>
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
              </S.InputGroup>
            </S.Group>
            <S.Button
              type="submit"
              className="margin-top"
              onClick={submitForm}
              disabled={isLoading}
            >
              {isLoading ? 'Finalizando pagamento...' : 'Finalizar pagamento'}
            </S.Button>
            <S.Button type="button" onClick={handleGoBack}>
              Voltar para a edição de endereço
            </S.Button>
          </S.SideBar>
        )}

        {step === 4 && (
          <S.SideBar>
            <h3>Pedido realizado - {data?.orderId}</h3>
            <S.TextOrderPlaced>
              Estamos felizes em informar que seu pedido já está em processo de
              preparação e, em breve, será entregue no endereço fornecido.
            </S.TextOrderPlaced>
            <S.TextOrderPlaced>
              Gostaríamos de ressaltar que nossos entregadores não estão
              autorizados a realizar cobranças extras.
            </S.TextOrderPlaced>
            <S.TextOrderPlaced>
              Lembre-se da importância de higienizar as mãos após o recebimento
              do pedido, garantindo assim sua segurança e bem-estar durante a
              refeição.
            </S.TextOrderPlaced>
            <S.TextOrderPlaced>
              Esperamos que desfrute de uma deliciosa e agradável experiência
              gastronômica. Bom apetite!
            </S.TextOrderPlaced>
            <S.Button
              type="button"
              className="margin-top"
              onClick={() => (setStep(1), closeCart())}
            >
              Concluir
            </S.Button>
          </S.SideBar>
        )}
      </S.FormContainer>
    </S.CartContainer>
  )
}

export default Cart
