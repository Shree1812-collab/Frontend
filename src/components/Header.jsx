import { NavLink } from "react-router-dom"

export default function Header() {
  return (
    <div className="flex justify-between px-10 items-center bg-blue-300">
        {/* logo */}
        <img className="w-25" 
            src="data:image/png;base64,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"></img>   
            <ul className="flex gap-4">
            <li>
                <NavLink to="/" className={({isActive})=> isActive ? "text-white bg-amber-400 p-2" : ""}>Home</NavLink>
            </li>
            <li>    
                <NavLink to="/products" className={({isActive})=> isActive ? "text-white bg-amber-400 p-2" : ""}>ProductList</NavLink>
            </li>
            <li>
                <NavLink to="/contact" className={({isActive})=> isActive ? "text-white bg-amber-400 p-2" : ""}>Contact Us</NavLink> 
            </li>
             {/* <li>
                <NavLink to="/product" className={({isActive})=> isActive ? "text-white bg-amber-400 p-2" : ""}>Product</NavLink> 
            </li> */}
        </ul>
    
    </div>
  )
}
