import {useRouter} from 'next/router'

const Cart = () => {

  const router = useRouter();
  const {cart} = router.query;

  console.log(cart)


  return(
    <div>
      pagina  de {cart}
    </div>
  )
}
export default Cart;