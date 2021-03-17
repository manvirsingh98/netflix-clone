import React,{useEffect,useState} from 'react'
import './Nav.css'
const Nav = () => {
const [scroll, handleScroll] = useState(false)
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100) {
                handleScroll(true)
            } else {
                handleScroll(false)
            } 
        })
        return () => {
            window.removeEventListener("scroll")
        }
    }, [])

    return (
        <div className={`nav ${scroll && "nav__black"}`}>
            <img className="nav__logo"
                src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
                alt="logo"
            />
             <img className="nav__avatar"
                src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                alt="avatar"
            />
            
        </div>
    )
}

export default Nav
