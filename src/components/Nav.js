import { Link } from "react-router-dom";
import PAGES from "../pages"
import { ReactComponent as Hamburger } from "../assets/images/shared/icon-hamburger.svg"
import { ReactComponent as Close } from "../assets/images/shared/icon-close.svg"
import { useNav, useNavUpdate, useNavClick } from "../navContext"

const Nav = () => {
    const isNavOpen = useNav()
    const navClick = useNavClick()
    const navUpdate = useNavUpdate()

    let navIcon = <Hamburger />
    if ( isNavOpen ) {
        navIcon = <Close />
    } // Todo: define the hamburger and close in CSS instead.

    return (
        <nav className="nav">
            <button type="button" className="nav__btn" onClick={ () => navUpdate(!isNavOpen) }>{ navIcon }</button>
            <ul className={ `nav__list ${ isNavOpen ? "open" : "" }` }>
                <li className="nav__list__item">
                    <Link to="/" className="nav__list__item__link" onClick={(e) => navClick(e, PAGES.HOME)}>
                        <span className="num">00</span>Home
                    </Link>
                </li>
                <li className="nav__list__item">
                    <Link to="/destination" className="nav__list__item__link" onClick={(e) => navClick(e, PAGES.DESTINATION)}>
                        <span className="num">01</span>Destination
                    </Link>
                </li>
                <li className="nav__list__item">
                    <Link to="/crew" className="nav__list__item__link" onClick={(e) => navClick(e, PAGES.CREW)}>
                        <span className="num">02</span>Crew
                    </Link>
                </li>
                <li className="nav__list__item">
                    <Link to="/technology" className="nav__list__item__link" onClick={(e) => navClick(e, PAGES.TECHNOLOGY)}>
                        <span className="num">03</span>Technology
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav