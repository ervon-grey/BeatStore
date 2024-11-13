import { displayPriceCurrency } from '../utils.js'


const Cart = (props) => {
 const cart = props.cart;
 const cartContainerRef = props.cartContainerRef
 const setCart = props.setCart;
 if (!cart["items"][0]) {
  return (
   <div className={`mt-2 fixed top-16 lg:right-8 right-2 bg-gray p-2 rounded-lg w-80 z-50 max-w-full text-center ${cart['open'] ? 'visible' : 'hidden'}`} ref={cartContainerRef}>
    <span className="">Your cart is empty</span>
   </div>
  )
 }
 return (
  <div ref={cartContainerRef} className={`mt-2 fixed top-16 lg:right-8 right-2 bg-gray p-2 rounded-lg w-80 z-50 max-w-full ${cart['open'] ? 'visible' : 'hidden'}`}>
   <span className="font-bold ">Your cart</span>
   <ul className="pt-4 pr-4 max-h-80 overflow-y-auto">
    {cart["items"]?.map((cartObject, index) => (
     <li className="flex w-full items-center mb-2 text-[15px]">
      <img src={cartObject["beat"]["artwork_thumbnail"]} width="48px" className="rounded"></img>
      <span className="pl-2">{cartObject["beat"]["title"]}</span>
      <span className="ml-auto pr-2">{displayPriceCurrency(cartObject["license"])}</span>
      <button onClick={() => setCart({ ...cart, items: cart["items"].filter((_, i) => i !== index) })}><img src="static/x_icon.png" width="20px"></img></button>
     </li>
    ))}
   </ul>
   <button className="w-full mt-2 rounded-lg font-bold bg-blue text-white px-4 py-2">
    {cart['items'].reduce((sum, item) => sum + parseFloat((item['license']?.['price'] || 0)), 0).toFixed(2)} {cart['items'][0]['license']['currency']} Checkout
   </button>
  </div>
 )
}

export default Cart
