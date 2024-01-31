import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCookies } from 'react-cookie';
import { useNavigate } from "react-router-dom";
import Logo from "../images/logo.png";
import { HiMenuAlt3 } from "react-icons/hi"
import { AiOutlineClose } from "react-icons/ai"




export const Navbar = () => {
    const [open, setOpen] = useState(false)
    const [cookies, setCookies] = useCookies(["access_token"])
    const navigate = useNavigate()

    const logout = () => {
        setCookies("access_token", "")
        window.localStorage.removeItem("userID");
        navigate("/auth");
    }
    return (
        <header className="w-full fixed z-10 bg-[#ea6514]">
    <nav className="flex w-full py-2 px-4 md:px-20 items-center justify-between">
        <a href="/" className="flex items-center justify-center text-white text-lg cursor-pointer font-semibold">
            <img src={Logo} alt="Logo" className="hidden md:block w-8 h-8 lg:w-14 lg:h-14" />
            <span className="text-orange-300">Recipe</span><span className="text-white">Hub</span>
            <Link to="/" className="px-20 text-white font-bold">Home</Link>
        </a>
        <div className="hidden md:flex text-white gap-6">
            {!cookies.access_token ? (
                <Link to="/auth" className='custom-btn md:block bg-transparent border border-white text-white rounded-full min-w-[140px] font-bold'>Login/Register</Link>

            ) : (
                <>
                    <div className="flex w-full py-2 md:py-3 px-4 md:px-20 items-center justify-between gap-6">
                        <Link to="/create-recipe" className="text-white font-bold">Create Recipe</Link>
                        <Link to="/saved-recipes" className="text-white font-bold">Saved Recipes</Link>
                    </div>
                    <button onClick={logout} className='hidden custom-btn md:block bg-transparent border border-white text-white hover:bg-white hover:text-slate-700 rounded-full min-w-[100px] font-bold'>Logout</button>
                </>
            )}
        </div>

        <button className="block md:hidden text-white text-xl"
            onClick={() => setOpen(prev => !prev)}>
            {open ? <AiOutlineClose /> : <HiMenuAlt3 />}
        </button>
    </nav>

    <div className={`${open ? "flex" : "hidden"} bg-orange-800 flex-col w-full px-4 pt-16 pb-10 text-white gap-6 text-[14px]`}>
        {!cookies.access_token ? (
            <Link to="/auth" className="text-white font-bold">Login/Register</Link>
        ) : (
            <>
                <Link to="/create-recipe" className="text-white font-bold">Create Recipe</Link>
                <Link to="/saved-recipes" className="text-white font-bold">Saved Recipe</Link>
                <button onClick={logout} className='custom-btn md:block bg-transparent border border-white text-white hover:bg-white hover:text-slate-700 rounded-full font-bold'>Logout</button>
            </>
        )}
    </div>
</header>

    )
}