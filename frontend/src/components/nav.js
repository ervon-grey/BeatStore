

const Header = () => {
    return (
            <nav className="bg-blue sticky top-0 z-50 flex flex-row h-16 py-4 px-2 lg:px-8">
               <img src="static/logo_white.png" className="lg:h-full  h-5/6 pt-2 lg:pt-0 flex-initial align-middle justify-self-start" alt=""></img>
                <div className="w-full flex flex-row justify-end">
                 <div className="pt-2 mr-16 hidden lg:block">
                     <a className="text-white flex font-semibold" href="/">
                     <img src="./static/circle-fill.svg" className="mr-1" width="7px" alt=""></img>
                     Beats
                     </a>
                 </div>
                 <div className="pt-2 mr-16 hidden lg:block"><a className="text-white font-semibold" href="/">Contact</a></div>
                 <div>
                     <button className="mt-1.5 px-3 py-1.5 text-black bg-white text-sm rounded-lg font-semibold flex items-center">
                      <img src="static/bag-fill-black.svg" alt=""></img>
                      <span className="pl-2">20€</span>
                     </button>
                 </div>
                </div>
            </nav>
        )
}

export default Header
