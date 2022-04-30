import { useState } from "react";
import { Link } from "react-router-dom";
import PAGES from "../pages"
import { ReactComponent as Hamburger } from "../assets/images/shared/icon-hamburger.svg"
// import Close from "../assets/images/shared/icon-close.svg"

const Nav = ({ updatePage }) => {
    const [isNavOpen, updateIsNavOpen] = useState(false)
    const handleClick = () => updateIsNavOpen(!isNavOpen)

    return (
        <nav className="nav">
            <button type="button" className="nav__btn" onClick={ handleClick }><Hamburger /></button>
            <ul className={ `nav__list ${ isNavOpen ? "open" : "" }` }>
                <li className="nav__items__item">
                    <Link to="/" className="nav__items__item__link" onClick={() => updatePage(PAGES.HOME)}>
                        <span>00</span>Home
                    </Link>
                </li>
                <li className="nav__items__item">
                    <Link to="/destination" className="nav__items__item__link" onClick={() => updatePage(PAGES.DESTINATION)}>
                        <span>01</span>Destination
                    </Link>
                </li>
                <li className="nav__items__item">
                    <Link to="/crew" className="nav__items__item__link" onClick={() => updatePage(PAGES.CREW)}>
                        <span>02</span>Crew
                    </Link>
                </li>
                <li className="nav__items__item">
                    <Link to="/technology" className="nav__items__item__link" onClick={() => updatePage(PAGES.TECHNOLOGY)}>
                        <span>03</span>Technology
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav