import React from 'react';
import { useLocation } from 'react-router-dom';
import PayPalButton from './PayPalButton';

function Checkout() {
 const location = useLocation();
 const cart = location.state?.cart || { items: [] };

 function tags2title(tags) {
  if (tags) {
   return tags.replace(/,/g, ' x')
  }
  return ''
 }

 return (
  <div className="App min-h-screen max-w-screen-2xl mx-auto">
   <nav className="bg-blue top-0 z-50 flex flex-row h-16 py-4 px-2 lg:px-8">
    <img src="static/logo_white.png" className="lg:h-full  h-5/6 pt-2 lg:pt-0 flex-initial align-middle justify-self-start" alt=""></img>
   </nav>
   <div className="grid grid-cols-12 pt-12 gap-4 p-2 md:p-12 ">

    <div className="w-100 md:col-span-8 col-span-12">
     <div className="w-100 flex  mb-8 px-3">
      <span class="text-2xl font-semibold mr-6">Cart</span>
      <button className="hidden md:flex text-black bg-white p-2 mr-3 border-solid border-2 border-gray  rounded-lg flex items-center">
       <img src="static/share-fill.svg" width="14px" alt=""></img>
      </button>
     </div>
     <div className="m-0 p-0 rounded">
      {cart.items?.map((item, index) => (
       <div key={index} className="grid grid-cols-12 gap-1 px-1">
        {/* Beat Details */}
        <div className="sm:col-span-10 col-span-9 p-2 flex">
         <img src={item.beat.artwork_thumbnail} alt="error" className="w-[50px] h-[50px] rounded-lg" />
         <div className="flex flex-col w-full overflow-hidden">
          <span className="lg:pl-6 pl-4 font-semibold overflow-hidden whitespace-nowrap text-ellipsis">
           {item.beat.title} - {tags2title(item.beat.tags)} Type Beat
         </span>
          <p className="text-sm lg:pl-6 pl-4">
           License: {item.license.license_type}
          </p>
         </div>

        </div>

        <div className="sm:col-span-2 col-span-3 pt-3">
         <p className="">{item.license.price} {item.license.currency}</p>
        </div>
       </div>
      ))}
     </div>

     <div className="bg-gray rounded mt-4 py-1">
      <div className="w-100 grid grid-cols-12 gap-1 px-1">
       <span className="sm:col-span-10 col-span-9 pl-2 text-sm">Subtotal</span>
       <span className="sm:col-span-2 col-span-3 text-sm ">{cart['items'].reduce((sum, item) => sum + parseFloat((item['license']?.['price'] || 0)), 0).toFixed(2)} {cart['items'][0]['license']['currency']}</span>
      </div>
      <div className="w-100 grid grid-cols-12 gap-1 px-1 mt-1">
       <span className="sm:col-span-10 col-span-9 pl-2 font-bold text-[15px]">TOTAL</span>
       <span className="sm:col-span-2 col-span-3 font-bold">{cart['items'].reduce((sum, item) => sum + parseFloat((item['license']?.['price'] || 0)), 0).toFixed(2)} {cart['items'][0]['license']['currency']}</span>
      </div>
     </div>
     <hr className="mt-7 md:invisible" style={{ border: "1px solid #F0F0F0" }}></hr>
    </div>

    <div className="md:col-span-4 col-span-12 p-2 rounded">

     <div className="w-100 flex justify-between px-4">
      <span class="text-xl font-semibold">Checkout</span>
      <button className="bg-gray px-2 rounded flex items-center gap-2">
       <span className="text-black text-sm">License Info</span>
       <img src="./static/info-icon.png" width="14px" alt="Info Icon" />
      </button>
     </div>

     <div className="flex flex-col gap-4 p-4">
      {/* Email */}
      <div>
       <label htmlFor="email" className="mt-2.5 block text-sm font-medium ">
        Email
       </label>
       <input
        type="email"
        id="email"
        placeholder="Enter your email"
        className="bg-gray-500 mt-1 block w-full rounded shadow-sm focus:border-blue-500 focus:ring-blue-500 text-sm px-2 py-1.5"
        style={{
         border: '1px solid #D3D3D3'
        }}
       />
      </div>

      {/* Artist Name */}
      <div>
       <label htmlFor="artistName" className="mt-2.5 block text-sm font-medium ">
        Artist Name
       </label>
       <input
        type="text"
        id="artistName"
        placeholder="Enter your artist name"
        className="bg-gray-500 mt-1 block w-full rounded shadow-sm focus:border-blue-500 focus:ring-blue-500 text-sm px-2 py-1.5"
        style={{
         border: '1px solid #D3D3D3'
        }}
       />
      </div>

      {/* Real Name */}
      <div>
       <label htmlFor="realName" className="mt-2.5 block text-sm font-medium ">
        Real Name
       </label>
       <input
        type="text"
        id="realName"
        placeholder="Enter your real name"
        className="bg-gray-500 mt-1 block w-full rounded shadow-sm focus:border-blue-500 focus:ring-blue-500 text-sm px-2 py-1.5"
        style={{
         border: '1px solid #D3D3D3'
        }}
       />
      </div>

      <PayPalButton />

     </div>

    </div>

   </div>
  </div >
 );
}

export default Checkout;
