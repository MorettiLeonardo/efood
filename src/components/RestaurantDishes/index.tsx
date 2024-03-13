import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { add, open } from '../../store/reducers/cart'

import { descMax } from '../RestaurantCard'

import close from '../../assets/images/close.svg'
import * as S from './styles'

type Modal = {
  isVisible: boolean
  url: string
}

type Props = {
  cardapio: Menu
}

const RestaurantDishes = ({ cardapio }: Props) => {
  const [modal, setModal] = useState<Modal>({ isVisible: false, url: '' })

  const closeModal = () => {
    setModal({ isVisible: false, url: '' })
  }

  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(add(cardapio))
    dispatch(open())
    closeModal()
  }

  return (
    <S.Card>
      <S.CardImage src={cardapio.foto} alt={cardapio.nome} />
      <S.CardTitle>{cardapio.nome}</S.CardTitle>
      <S.CardDescription>{descMax(cardapio.descricao)}</S.CardDescription>
      <S.Modal className={modal.isVisible ? 'visible' : ''}>
        <S.ModalContent className="container">
          <img src={cardapio.foto} alt={cardapio.nome} />
          <div>
            <S.CardTitle>{cardapio.nome}</S.CardTitle>
            <S.CardDescription>{cardapio.descricao}</S.CardDescription>
            <br />
            <S.CardDescription>Serve: de {cardapio.porcao}</S.CardDescription>
            <S.CardButton onClick={addToCart}>
              Adicionar ao carrinho - R$ {cardapio.preco}
            </S.CardButton>
          </div>
          <img
            src={close}
            alt="Fechar"
            style={{ cursor: 'pointer' }}
            onClick={() => setModal({ isVisible: false, url: '' })}
          />
        </S.ModalContent>
        <div className="overlay" onClick={() => closeModal()}></div>
      </S.Modal>
      <S.CardButton onClick={() => setModal({ isVisible: true, url: '' })}>
        Mais detalhes
      </S.CardButton>
    </S.Card>
  )
}

export default RestaurantDishes
