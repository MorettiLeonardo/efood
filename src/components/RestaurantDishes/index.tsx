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

const RestaurantDishes = () => {
  const [modal, setModal] = useState<Modal>({ isVisible: false, url: '' })

  const closeModal = () => {
    setModal({ isVisible: false, url: '' })
  }

  return (
    <Card>
      <CardImage src={sushi} alt="prato de sushi" />
      <CardTitle>Nome do prato</CardTitle>
      <CardDescription>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti
        possimus perspiciatis sapiente vero deleniti ipsum, nihil quibusdam
        earum voluptatum minus alias inventore error numquam minima consequuntur
        maiores consectetur porro cupiditate.
      </CardDescription>
      <Modal className={modal.isVisible ? 'visible' : ''}>
        <ModalContent className="container">
          <img src={sushi} alt="sushi" />
          <div>
            <CardTitle>Nome do prato</CardTitle>
            <CardDescription>
              A pizza Margherita é uma pizza clássica da culinária italiana,
              reconhecida por sua simplicidade e sabor inigualável. Ela é feita
              com uma base de massa fina e crocante, coberta com molho de tomate
              fresco, queijo mussarela de alta qualidade, manjericão fresco e
              azeite de oliva extra-virgem. A combinação de sabores é perfeita,
              com o molho de tomate suculento e ligeiramente ácido, o queijo
              derretido e cremoso e as folhas de manjericão frescas, que
              adicionam um toque de sabor herbáceo. É uma pizza simples, mas
              deliciosa, que agrada a todos os paladares e é uma ótima opção
              para qualquer ocasião.
            </CardDescription>
            <br />
            <CardDescription>Serve de 2 a 3 pessoas</CardDescription>
            <CardButton>Adicionar ao carrinho - R$ 60,90</CardButton>
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
