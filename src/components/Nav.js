import { Link } from "react-router-dom";
import PAGES from "../pages"
import { useNav, useNavUpdate, useNavClick } from "../navContext"

const Nav = () => {
    const isNavOpen = useNav()
    const navClick = useNavClick()
    const navUpdate = useNavUpdate()

    return (
        <nav className={ `nav ${ isNavOpen ? "open" : "" }` }>
            <button type="button" className="nav__btn" onClick={ () => navUpdate(!isNavOpen) }>
                <span className={ `hamburger ${ isNavOpen ? "open" : "" }` }></span>
            </button>
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