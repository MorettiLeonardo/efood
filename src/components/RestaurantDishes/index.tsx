import { useState } from 'react'

import sushi from '../../assets/images/sushi.svg'
import close from '../../assets/images/close.svg'

import {
  Card,
  CardButton,
  CardDescription,
  CardImage,
  CardTitle,
  Modal,
  ModalContent
} from './styles'
import { descMax } from '../RestaurantCard'
import { useDispatch } from 'react-redux'

import { add, open } from '../../store/reducers/cart'
import { Cardapio } from '../../pages/Home'

type Modal = {
  isVisible: boolean
  url: string
}

type Props = {
  cardapio: Cardapio
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
    <Card>
      <CardImage src={cardapio.foto} alt={cardapio.nome} />
      <CardTitle>{cardapio.nome}</CardTitle>
      <CardDescription>{descMax(cardapio.descricao)}</CardDescription>
      <Modal className={modal.isVisible ? 'visible' : ''}>
        <ModalContent className="container">
          <img src={cardapio.foto} alt={cardapio.nome} />
          <div>
            <CardTitle>{cardapio.nome}</CardTitle>
            <CardDescription>{cardapio.descricao}</CardDescription>
            <br />
            <CardDescription>Serve: de {cardapio.porcao}</CardDescription>
            <CardButton onClick={addToCart}>
              Adicionar ao carrinho - R$ {cardapio.preco}
            </CardButton>
          </div>
          <img
            src={close}
            alt="Fechar"
            style={{ cursor: 'pointer' }}
            onClick={() => setModal({ isVisible: false, url: '' })}
          />
        </ModalContent>
        <div className="overlay" onClick={() => closeModal()}></div>
      </Modal>
      <CardButton onClick={() => setModal({ isVisible: true, url: '' })}>
        Mais detalhes
      </CardButton>
    </Card>
  )
}

export default RestaurantDishes
