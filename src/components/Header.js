import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/shared/logo.svg"


const Header = () => {
    const [isNavOpen, updateIsNavOpen] = useState(false)

    const handleClick = () => updateIsNavOpen(!isNavOpen)

    return (
        <header className="header">
            <Link to="/" className="header__logo">
                <img src={ Logo } alt="Space tourism logo" />
            </Link>
            <nav className="nav">
                <button type="button" className="nav__btn" onClick={ handleClick }>X</button>
                <ul className={ `nav__list ${ isNavOpen ? "open" : "" }` }>
                    <li className="nav__items__item">
                        <Link to="/" className="nav__items__item__link">
                            <span>01</span>Home
                        </Link>
                    </li>
                    <li className="nav__items__item">
                        <Link to="/destination" className="nav__items__item__link">
                            <span>02</span>Destination
                        </Link>
                    </li>
                    <li className="nav__items__item">
                        <Link to="/crew" className="nav__items__item__link">
                            <span>03</span>Crew
                        </Link>
                    </li>
                    <li className="nav__items__item">
                        <Link to="/technology" className="nav__items__item__link">
                            <span>04</span>Technology
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;