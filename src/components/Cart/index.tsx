import sushi from '../../assets/images/sushi.svg'
import trash from '../../assets/images/trash.svg'
import {
  Overlay,
  CartContainer,
  SideBar,
  Product,
  Total,
  Trash
} from './styles'

const Cart = () => (
  <CartContainer>
    <Overlay />
    <SideBar>
      <ul>
        <Product>
          <Trash src={trash} />
          <img src={sushi} alt="" />
          <div>
            <h4>Nome do produto</h4>
            <p>R$ 60,90</p>
          </div>
        </Product>
      </ul>
      <Total>
        <p>Valor total</p>
        <p>R$ 182,70</p>
      </Total>
      <button type="button"> Continuar com a entrega </button>
    </SideBar>
  </CartContainer>
)

export default Cart
