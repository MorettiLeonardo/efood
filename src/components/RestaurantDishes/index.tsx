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

type Modal = {
  isVisible: boolean
  url: string
}

type Props = {
  name: string
  description: string
  portion: string
  price: number
}

const RestaurantDishes = ({ description, name, portion, price }: Props) => {
  const [modal, setModal] = useState<Modal>({ isVisible: false, url: '' })

  const closeModal = () => {
    setModal({ isVisible: false, url: '' })
  }

  return (
    <Card>
      <CardImage src={sushi} alt="prato de sushi" />
      <CardTitle>{name}</CardTitle>
      <CardDescription>{description}</CardDescription>
      <Modal className={modal.isVisible ? 'visible' : ''}>
        <ModalContent className="container">
          <img src={sushi} alt="sushi" />
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
