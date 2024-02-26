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

type Modal = {
  isVisible: boolean
  url: string
}

type Props = {
  name: string
  description: string
  portion: string
  price: number
  cover: string
}

const RestaurantDishes = ({
  description,
  name,
  portion,
  price,
  cover
}: Props) => {
  const [modal, setModal] = useState<Modal>({ isVisible: false, url: '' })

  const closeModal = () => {
    setModal({ isVisible: false, url: '' })
  }

  return (
    <Card>
      <CardImage src={cover} alt={name} />
      <CardTitle>{name}</CardTitle>
      <CardDescription>{descMax(description)}</CardDescription>
      <Modal className={modal.isVisible ? 'visible' : ''}>
        <ModalContent className="container">
          <img src={cover} alt={name} />
          <div>
            <CardTitle>{name}</CardTitle>
            <CardDescription>{description}</CardDescription>
            <br />
            <CardDescription>{portion}</CardDescription>
            <CardButton>Adicionar ao carrinho - R$ {price}</CardButton>
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
